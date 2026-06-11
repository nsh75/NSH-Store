function CartDrawer({
  cartItems,
  cartTotal,
  onClose,
  onIncrease,
  onDecrease,
  onRemove,
  onCheckout,
}) {
  return (
    <div className="cart-overlay" onClick={onClose}>
      <aside className="cart-drawer" onClick={(event) => event.stopPropagation()}>
        <div className="cart-header">
          <div>
            <p className="eyebrow">Cart</p>
            <h2>Shopping Cart</h2>
          </div>

          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <h3>Cart masih kosong</h3>
            <p>Tambahkan produk dari katalog NSH Store.</p>
          </div>
        ) : (
          <>
            <div className="cart-list">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.title} />

                  <div className="cart-item-info">
                    <h3>{item.title}</h3>
                    <span>${item.price}</span>

                    <div className="cart-quantity">
                      <button onClick={() => onDecrease(item.id)}>-</button>
                      <strong>{item.quantity}</strong>
                      <button onClick={() => onIncrease(item.id)}>+</button>
                    </div>
                  </div>

                  <button
                    className="remove-cart"
                    onClick={() => onRemove(item.id)}
                  >
                    Hapus
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div>
                <span>Total</span>
                <strong>${cartTotal.toFixed(2)}</strong>
              </div>

              <button className="checkout-button" onClick={onCheckout}>
                Beli Sekarang
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

export default CartDrawer;