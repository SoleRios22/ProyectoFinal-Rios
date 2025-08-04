import { useContext } from "react";
import { CartContext } from '../../context/CartContext';

const Cart = () => {
    const { cart } = useContext(CartContext);

  return (
    <div>
        <h2>Carrito de Compras</h2>{
        
        cart.map((productCart)=> (
            <div style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                <img src={productCart.image} alt="" width={200} />
                <p>{productCart.name}</p>
                <p>${productCart.price}</p>
                <p>Cantidad: {productCart.quantity}</p>
            </div>
        
        ))
        }
        </div>
  )
}

export default Cart