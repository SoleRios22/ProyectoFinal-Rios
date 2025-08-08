import { createContext,useState} from "react";
import Swal from "sweetalert2";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);


const addProductInCart = (product) => {
  const productInCart = cart.find((item) => item.id === product.id);

  if (productInCart) {
    let newQuantity = productInCart.quantity + product.quantity;

    if (newQuantity > product.stock) {
      newQuantity = product.stock;
      Swal.fire({
        icon: "warning",
        title: "Stock insuficiente",
        html: `
          <p>No puedes agregar más de <b>${product.stock}</b> unidades.</p>
          <img src="${product.image}" alt="${product.name}" style="max-width:150px; margin-top:10px; border-radius:8px;" />
        `,
        confirmButtonColor: "#3085d6",
      });
    }

    const updatedCart = cart.map((item) =>
      item.id === product.id
        ? { ...item, quantity: newQuantity }
        : item
    );
    setCart(updatedCart);
  } else {
    let quantityToAdd =
      product.quantity > product.stock ? product.stock : product.quantity;

    if (product.quantity > product.stock) {
      Swal.fire({
        icon: "warning",
        title: "Stock insuficiente",
        html: `
          <p>Solo hay <b>${product.stock}</b> unidades disponibles.</p>
          <img src="${product.image}" alt="${product.name}" style="max-width:150px; margin-top:10px; border-radius:8px;" />
        `,
        confirmButtonColor: "#3085d6",
      });
    }

    setCart([...cart, { ...product, quantity: quantityToAdd }]);
  }
};


   
    const totalQuantity=()=>{
        const total=cart.reduce((total, product)=> total + product.quantity, 0);
        return total;
    }

    const totalPrice=()=>{
        const total=cart.reduce((total, product)=> total + (product.price * product.quantity), 0);
        return total;
    }

    const deleteProductById=(id)=>{
       const productsFilter= cart.filter((product)=> product.id !== id);
       setCart(productsFilter);
    }

    const clearCart = () => {
        setCart([]);
    };

    return(
        <CartContext.Provider value={{cart,addProductInCart, totalQuantity, totalPrice, deleteProductById, clearCart}}>
            {children}
        </CartContext.Provider>
    )

};

export {CartContext, CartProvider};