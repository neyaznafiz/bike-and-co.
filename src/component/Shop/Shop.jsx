import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {

    const [products, setProducts] = useState([])

    const [cart, setCart] = useState([])
    console.log(cart);

    useEffect(() => {

        fetch("FakeBikeData.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    
    const addToCartHandle = (product) => {
        // const newCart = [...cart, products.name]
        // setCart(newCart)
     setCart(product);

    }


    return (
        <div className='shop-container'>
            <div className="col-md-10 product-container">

                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCartHandle={addToCartHandle}
                    ></Product>)
                }

            </div>
            <div className="col-md-2">
                <Cart 
                cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;