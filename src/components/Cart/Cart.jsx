import { useContext } from "react";
import { CartContext } from '../../context/CartContext';
import { Link, useNavigate } from "react-router-dom";
import './Cart.css';
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const Cart = () => {
    const { cart, totalPrice, deleteProductById, clearCart } = useContext(CartContext);
    const navigate = useNavigate();

    const handleCheckout = () => {
        if (cart.length === 0) {
            Swal.fire({
                icon: "warning",
                title: "Carrito vacío",
                text: "Agrega productos antes de finalizar la compra",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "Entendido"
            });
        } else {
            navigate("/checkout");
        }
    };

    return (
        <div className="cart">
            <h1 className="title-cart">Productos en el carrito:</h1>
            {cart.map((productCart) => (
                <div className="item-cart" key={productCart.id}>
                    <img className="img-item-cart" src={productCart.image} alt="" width={200} />
                    <p className="text-item-cart">{productCart.name}</p>
                    <p className="text-item-cart">c/u: ${productCart.price}</p>
                    <p className="text-item-cart">Cantidad: {productCart.quantity}</p>
                    <p className="text-item-cart">Precio parcial: ${productCart.price * productCart.quantity}</p>
                    <button
                        className="delete-item-cart"
                        onClick={() => deleteProductById(productCart.id)}
                    >
                        <MdDelete />
                    </button>
                </div>
            ))}
            <div className="info-cart">
                <h3 className="text-info-cart">Precio total: ${totalPrice()}</h3>
                <button className="button-continue-cart" onClick={handleCheckout}>
                    Finalizar compra
                </button>
                <button className="button-delete-cart" onClick={clearCart}>
                    Vaciar Carrito
                </button>
            </div>
        </div>
    );
};

export default Cart;
