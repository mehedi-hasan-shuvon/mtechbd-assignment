// import React from 'react';
// import useCart from '../../CustomHooks/useCart';
// import useProducts from '../../CustomHooks/useProducts';
// import SingleCartItem from '../SingleCartItem/SingleCartItem';
// import './CartItems.css';
// const CartItems = () => {
//     const [products, setProducts] = useProducts();
//     const [cart, SetCart] = useCart(products);

//     const handelRemoveProduct = () => {
//         console.log("DD");
//     };
//     return (
//         <div>
//             <h2>this is cart has {cart.length}</h2>
//             {
//                 cart.map(product => <SingleCartItem key={product.id}
//                     product={product}
//                     handelRemoveProduct={handelRemoveProduct}></SingleCartItem>)
//             }
//         </div>
//     );
// };

// export default CartItems;