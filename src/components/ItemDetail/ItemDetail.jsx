import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';



const ItemDetail = ({ product = {} }) => {
  const { addProductInCart } = useContext(CartContext);

  const addProduct=(quantity)=>{
    const productCart={...product, quantity};
    addProductInCart(productCart);
   

  }

  return (
    <div className='item-detail'>
        <div className='item-detail-image-content'>
          <img src={product.image} className="item-detail-image"  alt="" />
        </div>
        <div className='item-detail-text-content'>
          <p className='item-detail-text'>{product.name}</p>
          <p className='item-detail-text-description'>{product.description}</p>
          <p className='item-detail-text'>Price: ${product.price}</p> 
          <ItemCount stock={product.stock} addProduct={addProduct} />
        </div> 
    </div>
  )
}

export default ItemDetail