import React, { useEffect, useState } from 'react';
import { getStoredCart } from './fakedb';

const useCart = (products) => {
    const [cart, SetCart] = useState([]);

    useEffect(()=>{
        const storedCart=getStoredCart();
        const savedCart=[];
        for(const id in storedCart){
            const addedProduct=products.find(product => product.id == id);
            if(addedProduct){
                const quantity= storedCart[id];
                addedProduct.quantity=quantity;
                savedCart.push(addedProduct);
            }
        }
        SetCart(savedCart);
    },[products]);
    return [cart, SetCart];
};

export default useCart;