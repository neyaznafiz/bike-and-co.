import React from 'react';
import { useState } from 'react';
import './Cart.css'

const Cart = ({ cart, Delete }) => {

    const [random, setRandom] = useState({})
    

    const selectRandomProduct = (cart) => {
        let randomProduct = Math.floor(Math.random() * cart.length)
        let randomResult = cart[randomProduct]
        setRandom(randomResult)
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
<hr />
            <div >
                <h5>Random Choose Section</h5>
                <div className='random'>
                <img src={random.img} alt="" />
                <p>{random.name}</p>
                </div>
            </div>

            <button onClick={() => selectRandomProduct(cart)}>Click Here To Choose One</button>
            <br />

            <button onClick={Delete}>Select Again</button>
        </div>




    );
};

export default Cart;