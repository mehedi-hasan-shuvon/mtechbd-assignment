import { faCircleXmark, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { CartContext } from '../../App';
import './Cart.css';

const Cart = (props) => {
    const [text, setTest] = useContext(CartContext);
    const { cart } = props;

    let total = 0;
    let shipping_charge_per_product = 5;
    let total_Shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price*product.quantity;
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
                <h3>Your Items {cart.length} and quantity {quantity}</h3>
                <div>
                    <p>product will show up here</p>
                </div>
                <hr />
                <div>
                    <h3>Sub-total=${total.toFixed(2)}</h3>
                    <h3>Delivary Charge=+${total_Shipping.toFixed(2)}</h3>
                </div>
                <hr />
                <h3>Grand Total=${grandTotal.toFixed(2)}</h3>
            </div>
        </div>
    );
};

export default Cart;