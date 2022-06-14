import React, { useEffect, useState } from 'react';
import useProducts from '../../CustomHooks/useProducts';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Products.css'
const Products = () => {
    const [products, setProducts] = useProducts();

    return (
        <div className='products-container'>
            <h1>{products.length}</h1>
            <div className='products'>


                {
                    products.map(product => <SingleProduct
                        key={product.id}
                        SingleProduct={product}
                    ></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default Products;