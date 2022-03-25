import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    return (
        <div>
            <h1>Order Summary</h1>

            <p>Name : {cart}</p>
        </div>
    );
};

export default Cart;