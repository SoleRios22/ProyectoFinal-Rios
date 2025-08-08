import { useState } from "react";
import "./itemCount.css";

const ItemCount = ({stock,addProduct}) => {
    const [count, setCount] = useState(1);

    const handleClickDecrement = () => {
        if (count > 1){
         setCount(count - 1);
        }
    };

    const handleClickIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

  return (
    <div className="item-count">
        <div className="counter">
            <button onClick={handleClickDecrement} className="btn-control">-</button>
            <p className="count">{count}</p>
            <button onClick={handleClickIncrement} className="btn-control">+</button>
        </div>
        
        <button onClick={()=>addProduct(count)} className="btn-add">Añadir al carrito</button>
    </div>
  )

}
export default ItemCount