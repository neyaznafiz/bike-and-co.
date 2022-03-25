import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Shop = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {

        fetch('../../../public/FaceBikeData.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='row'>
            <div class="col-md-8">

            </div>
            <div class="col-md-4">

            </div>
        </div>
    );
};

export default Shop;