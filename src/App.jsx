import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import CartSidebar from './components/CartSidebar';

function App() {
  const products = useSelector((state) => state.products.items);

  return (
    <div className="app-container">
      <Navbar />
      
      <main>
        <header className="page-header">
          <h1 className="page-title">The Future of Tech</h1>
          <p className="page-subtitle">Discover our premium collection of next-gen gadgets.</p>
        </header>

        <section className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </main>

      <CartSidebar />
    </div>
  );
}

export default App;
