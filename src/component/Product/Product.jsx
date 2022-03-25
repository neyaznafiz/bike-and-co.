import React from 'react';
import './Product.css'

const Product = ({ product }) => {


    const { name, img, price } = product

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className=''>
                <h4>Name: {name}</h4>
                <p>Price : ${price}</p>
            </div>
            <button className='addtocart'>Add To Cart</button>
        </div>
    );
};

export default Product;