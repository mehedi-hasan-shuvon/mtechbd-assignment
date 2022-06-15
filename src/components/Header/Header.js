import React, { useContext, useEffect } from 'react';
import './Header.css';
import logo from '../../assets/logov1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartContext, CartLengthContext } from '../../App';
import { getStoredCart } from '../../CustomHooks/fakedb';
import useProducts from '../../CustomHooks/useProducts';
import useCart from '../../CustomHooks/useCart';


const Header = () => {
    const [text, setTest] = useContext(CartContext);
    const [length,SetLength] = useContext(CartLengthContext);
    const [products, setProducts] = useProducts();
    const [cart, SetCart] = useCart(products);
    let item_number = 0;

    return (
        <nav className='header'>
            <div className='header-content'>
                <img className='logo-img' src={logo} alt="This is the logo of mtechbd" />

                <div className='cart-logo-div' onClick={() => setTest(!text)}>
                    <FontAwesomeIcon className='cart-logo' icon={faCartShopping}></FontAwesomeIcon>
                    <div className='badge'>{length}</div>
                </div>

            </div>
        </nav>
    );
};

export default Header;