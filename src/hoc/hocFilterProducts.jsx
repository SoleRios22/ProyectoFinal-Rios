import { useState } from "react";
import useProducts from "../hooks/useProducts"

const hocFilterProducts=(Component)=>{
    return function(){
        const [query, setQuery] = useState("");
        const {products, loading} = useProducts();

        const changeInput=(event)=>{
            setQuery(event.target.value.toLowerCase());
        };

        const search=(productsList)=>{
            const filterProducts = productsList.filter((product) => {
                return product.name.toLowerCase().includes(query) 
            });
            return filterProducts;
        }

        return(
            <>
                <div>
                    <input type="text" placeholder="Buscar productos..." onChange={changeInput} />
                </div>
                <Component products={search(products)}   />
            </>
        )
    }
}
export default hocFilterProducts;