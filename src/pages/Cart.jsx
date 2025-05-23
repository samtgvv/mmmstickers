import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Cart.css';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <Header />
      <div className='section cart'>
        <h2>Корзина</h2>

        {cart.length === 0 ? (
          <p>Корзина пуста</p>
        ) : (
          <>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.name} — {item.price}₽
                </li>
              ))}
            </ul>
            <h3>Итоговая cумма: {total}₽</h3>
            <button className='order'
              onClick={() => alert('Ваш заказ успешно оформлен!')}
            >
              Оформить заказ
            </button>
          </>
        )}
        <Link className='go-to-catalog' to="/catalog">Перейти в каталог</Link>
      </div>
      <Footer />
    </>
  );
}

export default Cart;