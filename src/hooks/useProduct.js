import { useState, useEffect } from 'react';
import { getProductById } from '../data/products.js';

const useProduct = (productId) => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProductById(productId)
            .then((data) => {
                setProduct(data);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return {product, loading};
};

export default useProduct;