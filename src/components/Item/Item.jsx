import "./item.css"
import { Link } from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


const Item = ({product={}}) => {
  const { addProductInCart } = useContext(CartContext);

   const addProduct=(quantity)=>{
    const productCart={...product, quantity};
    addProductInCart(productCart);
   
  }

  return (
 <li className="item" >
    <div className="img-item-container">
      <img className="img-item" src={product.image} alt="" />
    </div>
    <div className="text-item">
      <p className="title-item">{product.name}</p>
      <p className="price-item">Precio: ${product.price}</p>
      <Link to={"/detail/" + product.id} className="link-item">
      <p className="button-item">Mas información</p>
      </Link>
      <ItemCount stock={product.stock} addProduct={addProduct} />
       
    </div>
    
    </li>
    
  )
}

export default Item