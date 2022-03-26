import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    const emptyCart = () => {

    }

    return (

        <div className='cart'>
            <h3>Order Summary</h3>
            <div className='info-container'>

                {
                    cart.map((product) => (
                        <div className='product-info-in-cart' key={product.id}>
                            <img src={product.img} alt="" />
                            <p>{product.name}</p>
                        </div>
                    ))
                }
            </div>
            <button>Click To Random Select</button>
            <br />
            <button>Select Again</button>
        </div>




    );
};

export default Cart;