import React from 'react';
import './Product.css'
import {BsMinecart} from "react-icons/bs"

const Product = ({ product, addToCartHandle }) => {


    const { name, img, price } = product

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h5>{name}</h5>
                <p>Price : ${price}</p>

                <button onClick={() => addToCartHandle(product)} className='addtocart'><span>Add To Cart</span> <BsMinecart /></button>
            </div>
            
        </div>
    );
};

export default Product;