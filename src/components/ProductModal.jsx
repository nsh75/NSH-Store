function ProductModal({ product, onClose, onAddToCart }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <section className="modal-content" onClick={(event) => event.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ×
        </button>

        <div className="modal-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="modal-info">
          <span className="category-badge">{product.category}</span>
          <h2>{product.title}</h2>
          <p>{product.description}</p>

          <div className="modal-stats">
            <div>
              <span>Price</span>
              <strong>${product.price}</strong>
            </div>

            <div>
              <span>Rating</span>
              <strong>⭐ {product.rating.rate}</strong>
            </div>

            <div>
              <span>Reviews</span>
              <strong>{product.rating.count}</strong>
            </div>
          </div>

          <button
            className="modal-cart-button"
            onClick={() => onAddToCart(product)}
          >
            Add to Store Cart
          </button>
        </div>
      </section>
    </div>
  );
}

export default ProductModal;