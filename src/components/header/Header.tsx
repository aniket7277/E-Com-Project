import React, { useState } from "react";
import logo from "../../assets/img/logo.svg";   // your logo file path
import cart from "../../assets/img/cart.svg";   // your cart image file path

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      {/* Left: Logo */}
      <div className="logo-container">
        <a href="">
          <img src={logo} alt="Logo" className="logo" />
        </a>
      </div>

      {/* Hamburger button */}
      <button
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Nav links */}
      <nav className={`nav-links ${isOpen ? "active" : ""}`}>
        <a href="/" className="active">HOME</a>
        <a href="/bag">BAG</a>
        <a href="/sneakers">SNEAKERS</a>
        <a href="/belt">BELT</a>
        <a href="/contact">CONTACT</a>
      </nav>

      {/* Right: Cart */}
      <div className="cart-container">
        <img src={cart} alt="Cart" className="cart" />
        <span className="cart-text">Items</span>
        <span className="cart-price">$0.00</span>
      </div>
    </header>
  );
};

export default Header;