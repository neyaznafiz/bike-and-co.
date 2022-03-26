import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BsTypeH1 } from 'react-icons/bs';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {

  // product set
  const [products, setProducts] = useState([])

  // cart set
  const [cart, setCart] = useState([])

  // data fetch
  useEffect(() => {

    fetch("FakeBikeData.json")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  // select product for cart handle 
  const addToCartHandle = (product) => {


    const newCart = [...cart, product]

    // cerror handle 
    if (newCart.length > 4) {
      alert('You already added 4 products')
    }
    else {
      setCart(newCart);
    }

  }

  // select again button handle
  const Delete = () => {
    setCart([])
  }

  return (
    <div className='shop-container'>

      <div className="product-container">
        {/* map from product */}
        {
          products.map(product => <Product
            key={product.id}
            product={product}
            addToCartHandle={addToCartHandle}
          ></Product>)
        }
      </div>

      {/* cart section */}
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