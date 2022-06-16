import { faCircleXmark, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { CartContext, CartLengthContext } from '../../App';
import useCart from '../../CustomHooks/useCart';
import useProducts from '../../CustomHooks/useProducts';
import CartItems from '../CartItems/CartItems';
import SingleCartItem from '../SingleCartItem/SingleCartItem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Cart.css';
import { deleteShoppingCart } from '../../CustomHooks/fakedb';

const Cart = (props) => {
    const [text, setTest] = useContext(CartContext);

    const { cart, handelRemoveProduct, handelClearCart, handelAddToCart } = props;

    const handelCheckout = () => {
        toast.success("Cart Items has been ordered to Checkout");
    }




    let total = 0;
    let shipping_charge_per_product = 5;
    let total_Shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        total_Shipping = total_Shipping + shipping_charge_per_product;
    }
    const grandTotal = total + total_Shipping;



    return (
        <div className='cart-container'>
            <div className='cart'>
                <div className='cart-header'>
                    <h2>Cart</h2>
                    <FontAwesomeIcon onClick={() => setTest(!text)} icon={faCircleXmark}></FontAwesomeIcon>
                </div>
                <hr />
                <h3>You have {cart.length} Items and {quantity} Total Quantities </h3>
                <div className='single-cart-product-container'>
                    {
                        cart.map(product => <SingleCartItem key={product.id}
                            product={product}
                            handelRemoveProduct={handelRemoveProduct}
                            handelAddToCart={handelAddToCart}></SingleCartItem>)
                    }
                </div>
                <hr />
                <div>
                    <h3>Sub-total=${total.toFixed(2)}</h3>
                    <h3>Delivary Charge=+${total_Shipping.toFixed(2)}</h3>
                </div>
                <hr />
                <h3>Grand Total=${grandTotal.toFixed(2)}</h3>
                <div onClick={handelCheckout} className='proceed-div'>
                    <button className='proceed-btn'>Proceed to Checkout</button>
                </div>
                <div onClick={handelClearCart} className='clear-div'>
                    <button className='clear-btn'>Clear Cart</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Cart;