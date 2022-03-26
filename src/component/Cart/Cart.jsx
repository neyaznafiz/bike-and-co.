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
                        <div className='product-info-in-cart' key={product.id}>
                            <img src={product.img} alt="" />
                            {product.name}
                            </div>
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