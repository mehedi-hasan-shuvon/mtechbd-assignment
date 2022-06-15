import React from 'react';
import './SingleCartItem.css'
const SingleCartItem = (props) => {

    const {image, title, description, price, rating, quantity}=props.product
    return (
        <div>
            <h3>this is single item {title}</h3>
        </div>
    );
};

export default SingleCartItem;