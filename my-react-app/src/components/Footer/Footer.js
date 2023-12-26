// Footer.js
import React from "react";
import "./Footer.css"; // Створіть файл Footer.css для стилізації, якщо потрібно
import logo from "./../../Images/logo.png";

const Footer = () => {
  return (
        <footer className="footer">
        <div className="width">
            <div className="footer-content">
                <div className="footer-section">
                <img src={logo} alt="Logo" className="footer-logo" />
                <p>2019-23 SMASH</p>
                </div>

                <div className="footer-section">
                <ul>
                    <li>Розпродаж</li>
                    <li>Акції</li>
                    <li>Співробітництво</li>
                    <li>Відгуки</li>
                    <li>Політика конфіденційності</li>
                </ul>
                </div>

                <div className="footer-section">
                <ul>
                    <li>Контакти</li>
                    <li>Доставка і оплата</li>
                    <li>Обмін та повернення</li>
                    <li>Договір оферти</li>
                    <li>Про нас</li>
                </ul>
                </div>

                <div className="footer-section">
                <h2>Підписка</h2>
                <div className="subscribe">
                    <input type="text" placeholder="Введіть ваш email" />
                    <div className="underline"></div>
                </div>
                </div>
            </div>
        </div>
        </footer>
  );
};

export default Footer;
