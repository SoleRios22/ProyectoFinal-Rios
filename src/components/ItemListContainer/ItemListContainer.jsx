
import Item from "../Item/Item.jsx";
import "./itemlistcontainer.css"; 
import {ItemList} from "../ItemList/ItemList";
import useProducts from "../../hooks/useProducts.js";
import Loading from "../Loading/Loading";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { category } = useParams();
  const {products, loading} = useProducts(category);


  return (
    <div className="itemlistcontainer ">
        <h1>"Bienvenidos a mi Tienda Online"</h1>
        <p>En esta tienda encontrarás una variedad de productos para elegir.</p>
        <p>¡Explora y disfruta de tu experiencia de compra!</p>     
        {
          loading ? <Loading /> : <ItemList products={products} />
        }
       
    </div>
    
  )
}

export default ItemListContainer