function ProductCard({ product, onViewDetail, onAddToCart }) {
  return (
    <article className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-info">
        <span className="category-badge">{product.category}</span>
        <h3>{product.title}</h3>

        <div className="product-meta">
          <strong>${product.price}</strong>
          <span>⭐ {product.rating.rate} ({product.rating.count})</span>
        </div>

        <div className="product-actions">
          <button onClick={() => onViewDetail(product)}>Detail</button>
          <button className="cart-button" onClick={() => onAddToCart(product)}>
            Add Cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;