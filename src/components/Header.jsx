function Header({ cartCount, onCartClick }) {
  return (
    <header className="hero">
      <div className="hero-content">
        <p className="eyebrow">NSH Store</p>
        <h1>Curated Goods for Modern Living</h1>
        <p>
          Discover selected fashion, accessories, electronics, and daily
          essentials in one clean and modern shopping experience.
        </p>

        <div className="hero-actions">
          <a href="#catalog" className="primary-link">
            Explore Catalog
          </a>

          <button className="cart-pill cart-clickable" onClick={onCartClick}>
            🛒 Cart: {cartCount}
          </button>
        </div>
      </div>

      <div className="hero-visual">
        <div className="speed-card">
          <span>New Collection</span>
          <strong>NSH STORE</strong>
          <p>Premium picks for everyday style</p>
        </div>
      </div>
    </header>
  );
}

export default Header;