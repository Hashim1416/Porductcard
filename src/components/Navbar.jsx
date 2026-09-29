import { ShoppingBag } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../features/cart/cartSlice';

export default function Navbar() {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav className="navbar glass-panel">
      <div className="navbar-logo">
        <ShoppingBag color="#a5b4fc" />
        Nexus Gadgets
      </div>
      <button className="cart-toggle" onClick={() => dispatch(toggleCart())}>
        <ShoppingBag size={24} />
        {totalQuantity > 0 && <span className="cart-badge">{totalQuantity}</span>}
      </button>
    </nav>
  );
}
