import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './footer.css';

function Footer() {
    return (
        <section id='contacts' className='footer'>
            <h3>Контакты</h3>
            <ul className='footer-ul'>
                <li>Email: hello@stickershop.ru</li>
                <li>Телефон: +7 (900) 000-00-00</li>
                <li>Instagram: @kazan.stickers</li>
            </ul>
            <p>©Мустафина Марьям</p>
        </section>
    );
}

export default Footer;