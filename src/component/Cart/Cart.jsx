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


            <div className='random'>
                <img src={random.img} alt="" />
                <p>{random.name} </p>

                <button onClick={() => selectRandomProduct(cart)}>Click To Choose One</button>
            </div>

            <br />

            <button onClick={Delete}>Select Again</button>
        </div>




    );
};

export default Cart;