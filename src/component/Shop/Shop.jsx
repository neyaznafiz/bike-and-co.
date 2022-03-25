import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {

    const [products, setProducts] = useState([])

    

    useEffect(() => {

        fetch("FakeBikeData.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='shop-container'>
            <div className="col-md-10 product-container">
               
               {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
               
            </div>
            <div className="col-md-2">

            </div>
        </div>
    );
};

export default Shop;