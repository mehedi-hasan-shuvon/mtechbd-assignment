import React, { useContext } from 'react';
import './Header.css';
import logo from '../../assets/logov1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../App';


const Header = () => {
    const [text, setTest] = useContext(CartContext);

    return (
        <nav className='header'>
            <div className='header-content'>
                <img className='logo-img' src={logo} alt="This is the logo of mtechbd" />

                <div className='cart-logo-div' onClick={() => setTest(!text)}>
                    <FontAwesomeIcon className='cart-logo' icon={faCartShopping}></FontAwesomeIcon>
                    <div className='badge'>0</div>
                </div>

            </div>
        </nav>
    );
};

export default Header;