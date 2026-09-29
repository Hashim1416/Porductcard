import { ShoppingCart, Check } from 'lucide-react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);
  
  const cartItems = useSelector(state => state.cart.items);
  const itemInCart = cartItems.find(item => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="product-card glass-panel">
      <div className="product-image-container">
        <span className="product-category">{product.category}</span>
        <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <button 
          className="btn-primary" 
          onClick={handleAddToCart}
          style={{ background: added ? 'var(--success)' : '' }}
        >
          {added ? <><Check size={20} /> Added to Cart</> : <><ShoppingCart size={20} /> Add to Cart</>}
        </button>
      </div>
    </div>
  );
}
