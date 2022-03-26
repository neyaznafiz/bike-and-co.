import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BsTypeH1 } from 'react-icons/bs';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {

  const [products, setProducts] = useState([])

  const [cart, setCart] = useState([])
  // console.log(cart);

  useEffect(() => {

    fetch("FakeBikeData.json")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])


  const addToCartHandle = (product) => {


    const newCart = [...cart, product]

    if (newCart.length > 4) {
      alert('You already added 4 product')
    }
    else {
      setCart(newCart);
    }

  }

  const Delete = () => {
    setCart([])
  }

  return (
    <div className='shop-container'>

      <div className="product-container">

        {
          products.map(product => <Product
            key={product.id}
            product={product}
            addToCartHandle={addToCartHandle}
          ></Product>)
        }
      </div>

      <div className="cart-container">
        <Cart
          Delete={Delete}
          cart={cart}
        ></Cart>
      </div>
    </div>
  );
};

export default Shop;