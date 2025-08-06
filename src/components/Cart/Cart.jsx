import { useContext } from "react";
import { CartContext } from '../../context/CartContext';
import { Link } from "react-router-dom";
import './Cart.css';
import { MdDelete } from "react-icons/md";

const Cart = () => {
    const { cart, totalPrice, deleteProductById, clearCart } = useContext(CartContext);

  return (
    <div className="cart">
        <h1 className="title-cart">Productos en el carrito:</h1>{
        
        cart.map((productCart)=> (
            <div className="item-cart" key={productCart.id}>
                <img className="img-item-cart"src={productCart.image} alt="" width={200} />
                <p className="text-item-cart">{productCart.name}</p>
                <p className="text-item-cart">c/u: ${productCart.price}</p>
                <p className="text-item-cart">Cantidad: {productCart.quantity}</p>
                <p className="text-item-cart">Precio parcial: ${productCart.price * productCart.quantity} </p>
                <button className="delete-item.cart"onClick={()=> deleteProductById(productCart.id)}>
                    <MdDelete/>
                </button>
            </div>
        
        ))
        }
        <div className="info-cart">
                <h3 className="text-info-cart">Precio total: ${totalPrice()}</h3>
                <Link className="button-continue-cart"to="/checkout">Finalizar compra</Link>
                <button className="button-delete-cart" onClick={clearCart}>Vaciar Carrito</button>
            </div>
        </div>
  )
}

export default Cart