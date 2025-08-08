import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import {Link} from "react-router-dom";



const ItemDetail = ({ product = {} }) => {
  const { addProductInCart } = useContext(CartContext);

  const addProduct=(quantity)=>{
    const productCart={...product, quantity};
    addProductInCart(productCart);
   

  }

  const sinStock=product.stock===0;

  return (
    <div className='item-detail'>
        <div className='item-detail-image-content'>
          <img src={product.image} className="item-detail-image"  alt="" />
        </div>
        <div className='item-detail-text-content'>
          <p className='item-detail-text'>{product.name}</p>
          <p className='item-detail-text-description'>Descripción: {product.description}</p>
          <p className='item-detail-text'>Precio: ${product.price}</p> 

          {sinStock ? (
            <p className="sin-stock">⚠️ Producto sin stock disponible</p>):(
          <ItemCount stock={product.stock} addProduct={addProduct} />)}

             <div className="botones-extra">
          <Link to="/" className="btn-navegacion">Volver al inicio</Link>
         
        </div>  
        </div> 
    </div>
  )
}

export default ItemDetail