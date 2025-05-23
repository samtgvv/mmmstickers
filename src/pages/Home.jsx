import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Header />
      <div className='section home'>
        <section className='home-banner-1'>
          <main className='home-main'>
            <h2>LUCKY <br/> STICKERS</h2>
            <p>Лучшие наклейки на любой вкус, уникальные дизайны, созданные с любовью, чтобы выразить вашу индивидуальность!</p>
            <div className="go-to-catalog">
            <Link  to="/catalog">Перейти в каталог</Link></div>
          </main>
          <img src="https://nokidsstickers.ru/wp-content/uploads/2025/05/nature-drop-—-srednij-razmer.png" alt="" srcset=""/>
        </section>

        <section className='home-banner'>
          <img src='https://nokidsstickers.ru/wp-content/uploads/2025/03/banner-fkttory.png'></img>
          <main className='about' id='about'>
            <h3>О компании</h3>
            <p>Мы – магазин стикеров, где творчество встречается с самовыражением! Здесь вы найдете уникальные дизайны, созданные с любовью, чтобы выразить вашу индивидуальность!</p>
          </main>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Home;