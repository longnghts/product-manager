import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import axios from 'axios';

const Home = props =>{
    const [products, setProducts] = useState(null);
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/')
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    })
    return(
        <div>
            <h1>The Store of Many Products</h1>
            {
                products ?
                products.map((product, i) => {
                    return <Card product={product}/>
                })
                : ''
            }
        </div>
    )
}

export default Home;