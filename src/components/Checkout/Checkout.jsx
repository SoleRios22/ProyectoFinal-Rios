import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import FormCheckout from "../FormCheckout/FormCheckout";
import { addDoc, collection } from "firebase/firestore";
import db from "../../db/db";

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: ""
    })

    const [orderId, setOrderId] = useState(null);
    const {cart, totalPrice}=useContext(CartContext);

    const handleChangeInput=(event)=>{
        setDataForm({...dataForm, [event.target.name]: event.target.value})


    }

    const sentOrder=(event)=>{
        event.preventDefault();
        const order = {
            buyer: {...dataForm},
            products:[...cart],
            total:totalPrice()
        }

        uploadOrder(order);
    }   

    const uploadOrder=async(order)=>{
        try{
            const orderRef = collection(db, "orders");
            const response= await addDoc(orderRef, order);
           setOrderId(response.id);

        }catch(error){
            console.log(error);
        }   


    }

  return (
    <div className="checkout">
        {
          orderId ? (
            <div>
                <h2>Gracias por tu compra!</h2>
                <p>Tu ID de orden es: {orderId}</p>
            </div>
          ):(<FormCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} sentOrder={sentOrder}    />) 
        }

       
    </div>
  )
}

export default Checkout