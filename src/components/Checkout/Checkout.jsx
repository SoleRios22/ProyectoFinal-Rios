import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import FormCheckout from "../FormCheckout/FormCheckout";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import db from "../../db/db";
import "./checkout.css";

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: ""
    });

    const [orderId, setOrderId] = useState(null);
    const { cart, totalPrice } = useContext(CartContext);
    const navigate = useNavigate();

    // 🔹 Verifica si el carrito está vacío y alerta
    useEffect(() => {
        if (cart.length === 0) {
            Swal.fire({
                icon: "warning",
                title: "Carrito vacío",
                text: "No puedes finalizar la compra sin productos",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "Ir a la tienda"
            }).then(() => {
                navigate("/"); // Cambia a "/tienda" si tienes esa ruta
            });
        }
    }, [cart, navigate]);

    const handleChangeInput = (event) => {
        setDataForm({ ...dataForm, [event.target.name]: event.target.value });
    };

    const sentOrder = (event) => {
        event.preventDefault();
        const order = {
            buyer: { ...dataForm },
            products: [...cart],
            total: totalPrice()
        };
        uploadOrder(order);
    };

    const uploadOrder = async (order) => {
        try {
            const orderRef = collection(db, "orders");
            const response = await addDoc(orderRef, order);
            setOrderId(response.id);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="checkout">
            {orderId ? (
                <div className="checkout-confirmation">
                    <h2 className="checkout-title">¡Gracias por tu compra!</h2>
                    <p className="checkout-message">Tu ID de orden es:</p>
                    <p className="order-id">{orderId}</p>
                </div>
            ) : (
                <FormCheckout
                    dataForm={dataForm}
                    handleChangeInput={handleChangeInput}
                    sentOrder={sentOrder}
                />
            )}
        </div>
    );
};

export default Checkout;
