import React from 'react';
import './FormCheckout.css';

const FormCheckout = ({dataForm, handleChangeInput, sentOrder}) => {
  return (
    <div>
        <form onSubmit={sentOrder} className="form-checkout">
            <h2>Checkout</h2>
            <div className="content-input">
                <label className="label">Nombre completo: </label>
                <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput}/>
            </div>

            <div className="content-input">
                <label classname="label">Teléfono: </label>
                <input type="number" name="phone" value={dataForm.phone} onChange={handleChangeInput}/>
            </div>

            <div className="content-input">
                <label classname="label">Email: </label>
                <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput}/>
            </div>

            <button type="submit" className="button-send-order">Enviar Orden</button>
        </form>

    </div>
  )
}

export default FormCheckout