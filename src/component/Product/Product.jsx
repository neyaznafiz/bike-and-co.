import React from 'react';
import './Product.css'
import { BsMinecart } from "react-icons/bs"

const Product = ({ product, addToCartHandle }) => {

    // destructure from product
    const { name, img, price } = product

    return (
        // display product
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p>{name}</p>
                <h5>Price : ${price}</h5>

                {/* add to cart button */}
                <button onClick={() => addToCartHandle(product)} className='addtocart'><span>Add To Cart</span> <BsMinecart /></button>
            </div>

        </div>
    );
};

export default Product;