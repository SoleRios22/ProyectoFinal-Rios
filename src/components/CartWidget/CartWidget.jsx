
import './cartwidget.css';
import { GiShoppingCart } from "react-icons/gi";

export const CartWidget = () => {
  return (
     <div className="cartwidget ">
      <GiShoppingCart size={35} color="green" />
      
      <h4>5</h4>
     
    </div>
  )
}

export default CartWidget;np