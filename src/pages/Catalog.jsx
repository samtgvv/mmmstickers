import React, { useState } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard/ProductCard';
import productsData from '../data/products.js';
import Footer from '../components/Footer.jsx';

function Catalog() {
  const [query, setQuery] = useState('');
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} добавлен в корзину`);
  };

  const filtered = productsData.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <Header />
      <div style={{ padding: '20px', textAlign: 'center'}}>
        <input
          type="text"
          placeholder="поиск..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: '12px', width: '350px', background: 'white',   border: '1px solid white', borderRadius: '20px' }}
        />
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '30px',
          padding: '20px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {filtered.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Catalog;