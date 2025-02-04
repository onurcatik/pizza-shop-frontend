// components/Header.js
import Link from 'next/link';

const Header = () => {
  return (
    <header className="header">
      <section className="flex">
        <a href="#home" className="logo">
          <img src="/images/logo.png" alt="Pizza-Shop Logo" className="logo-img" />
          Pizza-Shop
        </a>
        <nav className="navbar">
          <a href="#home">Anasayfa</a>
          <a href="#about">Hakkımızda</a>
          <a href="#menu">Menü</a>
          <a href="#order">Sipariş</a>
          <a href="#faq">SSS</a>
        </nav>
        <div className="icons">
          <div id="menu-btn" className="fas fa-bars"></div>
          <div id="user-btn" className="fas fa-user"></div>
          <div id="order-btn" className="fas fa-box"></div>
          <div id="cart-btn" className="fas fa-shopping-cart">
            <span>(4)</span>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
