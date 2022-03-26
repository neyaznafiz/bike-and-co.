import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    return (
        <div>
            <div className='cart-container'>
                <h1>Order Summary</h1>
                <div>
                {
                    cart.map((product)=>(
                        <p key={product.id}>
                            {product.name}
                            </p>
                    ))
                }
            </div>
            </div>
            <div>
                <button>Click to random Select</button>
                <button>Select Again</button>
            </div>
        </div>
    );
};

export default Cart;