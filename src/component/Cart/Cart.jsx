import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    return (
        <div>
            <div>
                <h1>Order Summary</h1>

                {/* <p> {cart}</p> */}
            </div>
            <div>
                <button>Click to random Select</button>
                <button>Select Again</button>
            </div>
        </div>
    );
};

export default Cart;