
import './cartwidget.css';
import { GiShoppingCart } from "react-icons/gi";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';  
import { Link } from 'react-router-dom';  


export const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
     <Link to="/cart" className="cartwidget ">
      <GiShoppingCart size={35} color="green" />
      <p>{totalQuantity()}</p>
    </Link>
  )
}

export default CartWidget;