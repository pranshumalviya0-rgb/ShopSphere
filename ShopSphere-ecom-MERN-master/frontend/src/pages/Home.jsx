import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import '../styles/product.css';
import API_URL from '../config';


const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        setProducts(data.slice(0, 4)); // Featured products
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="home-container">
      {/* Premium Hero Banner */}
      <div className="hero-banner" style={{ background: 'radial-gradient(circle at top right, rgba(139, 92, 246, 0.25), transparent 60%), linear-gradient(135deg, #18181b 0%, #09090b 100%)' }}>
        <h1 style={{ fontSize: '3.6rem', fontWeight: '800', background: 'linear-gradient(to right, #ffffff, #c084fc, #db2777)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '15px' }}>
          Welcome to ShopSphere
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#a1a1aa', maxWidth: '600px', margin: '0 auto 25px auto', lineHeight: '1.6' }}>
          Discover curated high-end products, experience lightning-fast checkouts, and explore our fully-integrated dashboard.
        </p>
        <Link to="/shop" className="btn" style={{ padding: '14px 32px', fontSize: '16px', borderRadius: '30px' }}>
          Start Shopping
        </Link>
      </div>

      {/* Featured Categories Section */}
      <div className="categories-section" style={{ margin: '60px 0' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2.2rem' }}>Browse Categories</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
          {[
            { name: 'Electronics', count: 'Premium Gadgets', bg: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.05) 100%)', border: 'rgba(139, 92, 246, 0.2)' },
            { name: 'Clothing', count: 'Sleek Apparel', bg: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)', border: 'rgba(236, 72, 153, 0.2)' },
            { name: 'Furniture', count: 'Modern Spaces', bg: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(236, 72, 153, 0.1) 100%)', border: 'rgba(139, 92, 246, 0.2)' }
          ].map((cat, idx) => (
            <div key={idx} style={{
              background: cat.bg,
              border: `1px solid ${cat.border}`,
              borderRadius: '16px',
              padding: '40px 30px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = `0 10px 25px ${cat.border}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
              }}>
              <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '8px' }}>{cat.name}</h3>
              <p style={{ color: '#a1a1aa', fontSize: '0.95rem', marginBottom: '20px' }}>{cat.count}</p>
              <Link to="/shop" style={{ color: '#ec4899', fontWeight: '600', fontSize: '0.95rem' }}>Explore &rarr;</Link>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <h2 style={{ fontSize: '2.2rem', marginTop: '60px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '15px' }}>
        Featured Products
      </h2>
      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px', color: '#a1a1aa' }}>Loading products...</div>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}

      {/* Developer Resume Trust/Value Banner */}
      <div style={{
        marginTop: '80px',
        padding: '50px 40px',
        background: '#18181b',
        border: '1px solid rgba(255,255,255,0.05)',
        borderRadius: '16px',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '15px', background: 'linear-gradient(to right, #fff, #a1a1aa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Engineered for Excellence
        </h2>
        <p style={{ color: '#a1a1aa', maxWidth: '700px', margin: '0 auto 40px auto', lineHeight: '1.7' }}>
          This full-stack platform implements rigorous software practices including secure state management, schema-validated database models, test payment gateways, and responsive design systems.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
          {[
            { title: 'State Management', desc: 'Predictable Redux Toolkit architecture' },
            { title: 'Secure REST API', desc: 'Mongoose models & JWT Auth middleware' },
            { title: 'Razorpay Sandbox', desc: 'Simulated payment processing flow' },
            { title: 'Responsive CSS', desc: 'Mobile-first fluid grid layout' }
          ].map((item, index) => (
            <div key={index} style={{
              flex: '1 1 200px',
              background: '#09090b',
              padding: '20px',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.03)'
            }}>
              <h4 style={{ color: '#8b5cf6', marginBottom: '8px', fontSize: '1.1rem' }}>{item.title}</h4>
              <p style={{ color: '#71717a', fontSize: '0.85rem' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
