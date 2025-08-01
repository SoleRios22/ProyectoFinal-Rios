import "./NavBar.css";
import logoTienda from "../../assets/Icono.png";
import CartWdidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {

    return(
        <div className="navbar">
        <Link to = "/" >
           <img className="logo" src={logoTienda} alt="" />
        </Link>

           <ul className="menu">
                <li>
                    <Link to="/category/frutos" className="category"> Frutos Secos </Link>
                </li>
                <li>
                    <Link to="/category/cereales" className="category"> Cereales </Link>
                </li>
                <li>
                    <Link to="/category/harinas" className="category"> Harinas </Link>
                </li>
                <li>
                    <Link to="/category/semillas" className="category"> Semillas </Link>
                </li>
           </ul>

           <CartWdidget />
        </div>
    )
};

export default NavBar;
