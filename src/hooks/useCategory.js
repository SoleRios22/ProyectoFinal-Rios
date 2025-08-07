import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import  db  from "../db/db";

export const useCategorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productosRef = collection(db, "products");

    const unsubscribe = onSnapshot(productosRef, (snapshot) => {
      const productos = snapshot.docs.map(doc => doc.data());
      const categoriasUnicas = [...new Set(productos.map(p => p.category))];
      setCategorias(categoriasUnicas);
      setLoading(false);
    }, (error) => {
      console.error("Error en onSnapshot:", error);
      setLoading(false);
    });

    // Cleanup
    return () => unsubscribe();
  }, []);

  return { categorias, loading };
};

