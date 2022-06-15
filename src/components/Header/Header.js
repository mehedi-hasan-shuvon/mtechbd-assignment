import React, { useContext, useEffect } from 'react';
import './Header.css';
import logo from '../../assets/logov1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../App';
import { getStoredCart } from '../../CustomHooks/fakedb';


const Header = () => {
    const [text, setTest] = useContext(CartContext);
    let item_number = 0;
    useEffect(() => {
        const storedCart = getStoredCart();
        item_number = Object.keys(storedCart).length;
    }, []);

    return (
        <nav className='header'>
            <div className='header-content'>
                <img className='logo-img' src={logo} alt="This is the logo of mtechbd" />

                <div className='cart-logo-div' onClick={() => setTest(!text)}>
                    <FontAwesomeIcon className='cart-logo' icon={faCartShopping}></FontAwesomeIcon>
                    <div className='badge'>item: {item_number}</div>
                </div>

            </div>
        </nav>
    );
};

export default Header;