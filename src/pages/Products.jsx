import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import products from '../data/products';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Products.css'


function Product() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <>
        <Header />
        <div style={{ padding: 50 }}>
          <h2>Товар не найден 😢</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div style={{ padding: '50px 70px 130px 130px', borderRadius: "60px" }}>
        <main className='tovar'>
        <img src={product.image} alt={product.name}  />
          <section className='info-card'>
          <h2>{product.name}</h2>
          
          <p>{product.description}</p>
          <h3>Цена: {product.price}₽</h3>
          <button className='add-to-cart'
            onClick={() => addToCart(product)}>
            Добавить в корзину
          </button>
          <h4>Основные характеристики</h4>
            <ul>
            <li>Виниловые стикеры с авторским дизайном, влагостойкие.</li>
            <li>Если не получилось приклеить с первого раз - не беда, их легко можно переклеить!</li>
            <li>Не оставляют следов, но советуем предварительно протереть поверхность перед наклеиванием.</li>
            <li>Каждый арт уже вырезан по контуру с отступом в 1 мм от края!</li>
          </ul>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Product;