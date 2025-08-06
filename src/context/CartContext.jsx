import { createContext,useState} from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);


const addProductInCart = (productToAdd) => {
  // Verificamos si el producto ya está en el carrito
  const existingProduct = cart.find(product => product.id === productToAdd.id);

  if (existingProduct) {
    // Si el producto existe, mapeamos el carrito para actualizar su cantidad
    setCart(
      cart.map(product =>
        product.id === productToAdd.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  } else {
    // Si el producto no existe, lo agregamos al carrito con una cantidad de 1
    setCart([...cart, { ...productToAdd, quantity: 1 }]);
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