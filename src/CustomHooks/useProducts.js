import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const url = `https://fakestoreapi.com/products`;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return [products, setProducts];

};

export default useProducts;