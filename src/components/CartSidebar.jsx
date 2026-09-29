import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart, addToCart, removeFromCart } from '../features/cart/cartSlice';

export default function CartSidebar() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <>
      {/* Overlay */}
      <div 
        className={`cart-overlay ${cart.isCartOpen ? 'open' : ''}`} 
        onClick={() => dispatch(toggleCart())}
      />
      
      {/* Sidebar */}
      <div className={`cart-sidebar ${cart.isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2 className="cart-title">
            <ShoppingBag size={24} color="var(--accent-color)" />
            Your Cart
          </h2>
          <button className="close-btn" onClick={() => dispatch(toggleCart())}>
            <X size={24} />
          </button>
        </div>

        <div className="cart-items">
          {cart.items.length === 0 ? (
            <div className="empty-cart">
              <ShoppingBag size={64} />
              <p>Your cart is empty</p>
            </div>
          ) : (
            cart.items.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <div>
                    <h4 className="cart-item-title">{item.name}</h4>
                    <p className="cart-item-category">{item.category}</p>
                  </div>
                  <div className="cart-item-actions">
                    <p className="cart-item-price">${item.totalPrice.toFixed(2)}</p>
                    <div className="quantity-controls">
                      <button onClick={() => dispatch(removeFromCart(item.id))}>
                        {item.quantity === 1 ? <Trash2 size={16} /> : <Minus size={16} />}
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button onClick={() => dispatch(addToCart(item))}>
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span className="total-label">Subtotal</span>
              <span className="total-amount">${cart.totalAmount.toFixed(2)}</span>
            </div>
            <button className="btn-primary checkout-btn">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
