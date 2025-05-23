import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';
import { CartContext } from '../../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-block section">
      <div className="product-img">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-card">
        <section className='card-info'>
        <h3>{product.name}</h3>
        <p>{product.price}₽</p>
        </section>
        <div className="buttons">
          <Link to={`/product/${product.id}`}>Подробнее</Link> 
          <button onClick={() => addToCart(product)}>В корзину</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;