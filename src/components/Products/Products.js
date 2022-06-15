import React, { useContext, useEffect, useState } from 'react';
import { CartContext, CartLengthContext } from '../../App';
import { addToDb, deleteShoppingCart, getStoredCart, removeFromDb } from '../../CustomHooks/fakedb';
import useProducts from '../../CustomHooks/useProducts';
import Cart from '../Cart/Cart';
import SingleProduct from '../SingleProduct/SingleProduct';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Products.css'
const Products = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);
    const [text, setTest] = useContext(CartContext);
    const [length,SetLength] = useContext(CartLengthContext);
    SetLength(cart.length);

    useEffect(() => {
        const storedCart = getStoredCart();
        // console.log(storedCart);
        const savedCart=[]
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id == id);
            if (addedProduct) {
                            
                            const quantity = storedCart[id];
                            addedProduct.quantity = quantity;
                            savedCart.push(addedProduct);
                        }
        }
        setCart(savedCart)
    }, [products]);


    const handelAddToCart = (product) => {
        // console.log("add to cart cliecked", product);
        let newCart=[];
        const exists=cart.find(single_product=>single_product.id == product.id);
        if(!exists){
            product.quantity=1;
            newCart = [...cart, product];
        }else{
            const rest=cart.filter(single_product=>product.id !== single_product.id);
            exists.quantity= exists.quantity+1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(product.id)
    }

    const handelRemoveProduct = (product) => {
        console.log(product);
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    };


 const handelClearCart=()=>{
        setCart([]);
        deleteShoppingCart();
        toast.info("Cart Has been Cleared")
    }



    // console.log(cart);

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
                text && <Cart cart={cart} handelRemoveProduct={handelRemoveProduct} handelClearCart={handelClearCart}></Cart>
            }
        </div>
    );
};

export default Products;