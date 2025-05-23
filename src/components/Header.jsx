import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Header.css';

function Header() {
  const { cart } = useContext(CartContext);

  return (
    <header className="site-header">
      <h1>mm</h1>
      <nav className='nav-center'>
        <main>
          <Link to="/">Главная</Link>
          <Link to="/catalog">Каталог</Link>
          <Link to="/#about" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
            О нас
          </Link>
          <Link to="/#contacts" onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}>
            Контакты
          </Link>
        </main>
      </nav>
      <nav className='nav-end'>
        <Link to="/cart" className='header-btn'>
          <p>Корзина</p> {cart?.length > 0 && <span className="cart-count">{cart.length}</span>}
        </Link>
      </nav>
    </header>
  );
}

export default Header;