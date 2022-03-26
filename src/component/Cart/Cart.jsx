import React from 'react';
import { useState } from 'react';
import './Cart.css'

const Cart = ({ cart, Delete }) => {

    // set random for random select from cart
    const [random, setRandom] = useState({})

    // function for random product select
    const selectRandomProduct = (cart) => {
        let randomProduct = Math.floor(Math.random() * cart.length)
        let randomResult = cart[randomProduct]
        setRandom(randomResult)
    }



    return (

        <div className='cart'>

            {/* display selected in cart */}
            <div className='info-container'>
                <h4>Selected Bikes</h4>
                {
                    cart.map((product) => (
                        <div className='product-info-in-cart' key={product.id}>
                            <img src={product.img} alt="" />
                            <p>{product.name}</p>
                        </div>
                    ))
                }

            </div>

            {/* display random product form cart selected product */}
            <div className='random'>
                <img src={random.img} alt="" />
                <p>{random.name} </p>

                {/* random product button */}
                <button onClick={() => selectRandomProduct(cart)}>Click To Choose One</button>
            </div>

            <br />

            {/* select again button */}
            <button onClick={Delete}>Select Again</button>
        </div>
    );
};

export default Cart;