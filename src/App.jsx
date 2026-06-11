import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import './App.css';

import Header from './components/Header';
import Toolbar from './components/Toolbar';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import LoadingState from './components/LoadingState';
import CartDrawer from './components/CartDrawer';

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortOption, setSortOption] = useState('default');
  const [ratingFilter, setRatingFilter] = useState('all');

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        'https://fakestoreapi.com/products/categories'
      );

      setCategories(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchProducts = async (category = 'all') => {
    try {
      setLoading(true);
      setError('');

      const url =
        category === 'all'
          ? 'https://fakestoreapi.com/products'
          : `https://fakestoreapi.com/products/category/${encodeURIComponent(
              category
            )}`;

      const response = await axios.get(url);
      setProducts(response.data);
    } catch (err) {
      setError(
        'Gagal mengambil data produk. Periksa koneksi internet lalu coba lagi.'
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchProducts(selectedCategory);
  }, [selectedCategory]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (searchKeyword.trim() !== '') {
      result = result.filter((product) =>
        product.title.toLowerCase().includes(searchKeyword.toLowerCase())
      );
    }

    if (ratingFilter !== 'all') {
      result = result.filter(
        (product) => product.rating.rate >= Number(ratingFilter)
      );
    }

    if (sortOption === 'low-high') {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortOption === 'high-low') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, searchKeyword, sortOption, ratingFilter]);

  const addToCart = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);

    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    setToastMessage(`Berhasil Menambahkan ${product.title.slice(0, 28)} ke-Keranjang`);

    setTimeout(() => {
      setToastMessage('');
    }, 2200);
  };

  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    setToastMessage('Pembelian berhasil diproses. Terima kasih sudah berbelanja!');

    setTimeout(() => {
      setToastMessage('');
    }, 2500);

    setCartItems([]);
    setIsCartOpen(false);
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <main className="app">
      <Header cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />

      <section className="dashboard">
        <div className="stat-card">
          <span>Total Products</span>
          <strong>{products.length}</strong>
        </div>

        <div className="stat-card">
          <span>Showing</span>
          <strong>{filteredProducts.length}</strong>
        </div>

        <div className="stat-card">
          <span>Garage Cart</span>
          <strong>{cartCount}</strong>
        </div>
      </section>

      <Toolbar
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
        sortOption={sortOption}
        setSortOption={setSortOption}
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
      />

      {loading && <LoadingState />}

      {error && !loading && (
        <section className="error-state">
          <h2>Request Failed</h2>
          <p>{error}</p>
          <button onClick={() => fetchProducts(selectedCategory)}>
            Coba Lagi
          </button>
        </section>
      )}

      {!loading && !error && filteredProducts.length === 0 && (
        <section className="empty-state">
          <h2>Produk tidak ditemukan</h2>
          <p>Coba gunakan kata kunci, kategori, atau filter rating lain.</p>
        </section>
      )}

      {!loading && !error && filteredProducts.length > 0 && (
        <section className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetail={setSelectedProduct}
              onAddToCart={addToCart}
            />
          ))}
        </section>
      )}

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={addToCart}
        />
      )}

      {isCartOpen && (
        <CartDrawer
          cartItems={cartItems}
          cartTotal={cartTotal}
          onClose={() => setIsCartOpen(false)}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
          onRemove={removeFromCart}
          onCheckout={handleCheckout}
        />
      )}

      {toastMessage && <div className="toast">{toastMessage}</div>}
    </main>
  );
}

export default App;