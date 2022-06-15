import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../App';
import { addToDb } from '../../CustomHooks/fakedb';
import useProducts from '../../CustomHooks/useProducts';
import Cart from '../Cart/Cart';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Products.css'
const Products = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);
    const [text, setTest] = useContext(CartContext);


    const handelAddToCart = (product) => {
        // console.log("add to cart cliecked", product);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }




    return (
        <div className='products-container'>
            <div className='products'>
                {
                    products.map(product => <SingleProduct
                        key={product.id}
                        SingleProduct={product}
                        handelAddToCart={handelAddToCart}
                    ></SingleProduct>)
                }
            </div>
            {
                text && <Cart cart={cart}></Cart>
            }
        </div>
    );
};

export default Products;