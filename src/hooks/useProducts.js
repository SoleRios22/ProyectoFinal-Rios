import { useEffect, useState } from "react";
import {collection, getDocs, query, where} from "firebase/firestore";
import db from "../db/db";



const useProducts = (category) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts=async()=>{
    try{
      const dataDb=await getDocs(collection(db,"products"));

      const data=dataDb.docs.map((productDb)=>{
        return {id:productDb.id, ...productDb.data()}
      })
      setProducts(data);
      setLoading(false);
    }catch(error){
      console.log(error);
  }
  }

  const getProductsByCategory =async()=>{
    try{
      const q=query(collection(db,"products"), where("category","==",category));
      const dataDb=await getDocs(q);
      const data=dataDb.docs.map((productDb)=>{
        return {id:productDb.id, ...productDb.data()}
      })
      setProducts(data);
      setLoading(false);
    }catch(error){
      console.log(error);
    }
  

  }

  useEffect(() => {

   if (category){
    getProductsByCategory();
   }else{
    getProducts();
   }

  }, [category]);

  return {products, loading};
};

export default useProducts;
