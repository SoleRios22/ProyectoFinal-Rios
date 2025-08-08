import "./navbar.css";
import logoTienda from "../../assets/Icono.png";
import CartWdidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useCategorias } from "../../hooks/useCategory";
import {useState} from "react";

const NavBar = () => {

    const { categorias, loading } = useCategorias();
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <div className="navbar">
            
        <Link to = "/" >
           <img className="logo" src={logoTienda} alt="" />
        </Link>
         
          {/* Botón hamburguesa */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        ☰
      </button>

           <ul className={`menu ${menuOpen ? "open" : ""}`}>
                {loading ? (<li>Cargando...</li>
        ) : (
          categorias.map((cat, i) => (
            <li key={i}>
              <Link to={`/category/${encodeURIComponent(cat.toLowerCase())}`} className="category" onClick={() => setMenuOpen(false)} >
                {cat}
              </Link>
            </li>
          ))
        )}
              
           </ul>
           <div className="cart-widget">
            <CartWdidget />
           </div>
          
        </div>
    )
};

export default NavBar;
