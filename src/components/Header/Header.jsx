// src/components/Header/Header.jsx
import { Link } from "react-router-dom";
import { FaShoppingCart, FaFacebook, FaInstagram } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-left">
        <h1 className="header-title">Mi Tienda</h1>
      </div>
      <div className="header-right">
        <Link to="/cart" className="header-icon">
          <FaShoppingCart />
        </Link>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="header-icon">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="header-icon">
          <FaInstagram />
        </a>
      </div>
    </header>
  );
};

export default Header;
