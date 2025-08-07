import "./NavBar.css";
import logoTienda from "../../assets/Icono.png";
import CartWdidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useCategorias } from "../../hooks/useCategory";

const NavBar = () => {

    const { categorias, loading } = useCategorias();
    return(
        <div className="sidebar">
            
        <Link to = "/" >
           <img className="logo" src={logoTienda} alt="" />
        </Link>
         <div className="cart-widget">
            <CartWdidget />
           </div>

           <ul className="category-list">
                {loading ? (<li>Cargando...</li>
        ) : (
          categorias.map((cat, i) => (
            <li key={i}>
              <Link to={`/category/${encodeURIComponent(cat.toLowerCase())}`} className="category">
                {cat}
              </Link>
            </li>
          ))
        )}
              
           </ul>
          
        </div>
    )
};

export default NavBar;
