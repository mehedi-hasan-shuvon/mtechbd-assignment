import React, { useState } from 'react';
import './Modal.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Modal = ({ cart }) => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cart.length == 0) {
            toast.error("Cart is Empty");
        } else {

            toast.success("Cart Items has been ordered");
            setModal(!modal);

        }


    };


    return (
        <>
            <button onClick={toggleModal} className="proceed-btn">
                Proceed to Checkout
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h1>Checkout:</h1>
                        <form className="form" onSubmit={handleSubmit}>
                            <h2>Please give Information</h2>
                            <div>
                                <label> <span className='email-span'>Name:</span></label>
                                <input
                                    placeholder="Name"
                                    id='name'
                                    required
                                />
                            </div>

                            <div className='email-input'>
                                <label><span className='email-span'>Email:</span> </label>
                                <input
                                    placeholder="Email"
                                    id='email'
                                    required
                                />
                            </div>
                            <div className='address-input'>
                                <label><span className='address-span'>Address:</span></label>
                                <textarea
                                    placeholder="street/city/country"
                                    id='address'
                                    required
                                ></textarea>
                            </div>

                            <div>
                                <label>Number: </label>
                                <input
                                    placeholder="Phone Number"
                                    required
                                />
                            </div>


                            <button className='plus-btn modal-btn-plus' onClick={handleSubmit}
                                type="submit"
                            >
                                Submit
                            </button>
                        </form>

                        <button className="close-modal" onClick={toggleModal}>
                            CLOSE
                        </button>
                    </div>
                </div>
            )}
            <ToastContainer />
        </>
    );
};

export default Modal;