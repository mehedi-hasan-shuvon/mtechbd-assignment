import { faCircleMinus, faDeleteLeft, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import './SingleCartItem.css'
const SingleCartItem = (props) => {
    const { product, handelRemoveProduct, handelAddToCart } = props;
    const { image, title, description, price, rating, quantity } = product;

    let itemSubToatalPrice = price * quantity;

    const [prodcutQuantity, SetProductQuantity] = useState(quantity);

    useEffect(() => {
        SetProductQuantity(quantity);
    }, [])

    const handelDecrement = () => {
        if (prodcutQuantity > 1) {
            SetProductQuantity(prevCount => prevCount - 1);
        }

    }


    const handelIncrement = () => {
        if (prodcutQuantity < 10) {
            SetProductQuantity(prevCount => prevCount + 1);
        }

    }
    const handelSubmit = () => {

    }

    return (
        <div className='single-cart-item'>

            <img className='cart-item-img' src={image} alt="" />
            <div className='cart-single-item-details'>
                <p className='cart-item-title' title={title}>{title}</p>
                <p className='cart-item-price'> price: ${price}(per piece) X Quantity: {quantity}</p>
                <p>Total:$ {itemSubToatalPrice.toFixed(2)}</p>
                <div className='plus-minus-container'>
                    <div className='quantity-txt cart-quantity-text'>{prodcutQuantity}</div>
                    <div>
                        <button type='button' onClick={handelIncrement} className='plus-btn cart-plus-btn'>+</button>
                        <button type='button' onClick={handelDecrement} className='minus-btn cart-minus-btn'>-</button>
                    </div>
                    <button className='cart-update-btn' onClick={()=>handelAddToCart(product,prodcutQuantity)}>Update Quantity</button>
                </div>
                {/* <div>
                    <button onClick={handelAddToCart(product, prodcutQuantity)}>submit</button>
                </div> */}
                

            </div>
            <div className="delete-cart-item">
                <FontAwesomeIcon onClick={() => handelRemoveProduct(product)} className='delete-icon' icon={faCircleMinus}></FontAwesomeIcon>
            </div>

        </div>
    );
};

export default SingleCartItem;