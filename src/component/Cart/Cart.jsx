import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    return (
        
            <div className=''>
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
                <button>Click to random Select</button> 
                <br /> <br />
               <button>Select Again</button>
            </div>

            

        
    );
};

export default Cart;