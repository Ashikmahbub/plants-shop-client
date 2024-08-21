import React, { useEffect, useState } from 'react';
import { getProducts } from '../api';

const Home = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        const fetchProducts = async() =>{
            const {data} = await getProducts();
            setProducts(data);
        }
        fetchProducts();
    })

    return (
        <div>
            <h1>Welcome to te Plant Shop</h1>
            <div>
                {
                    products.map(product => (
                        <div key={product._id}>
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <p>${product.price}</p>

                        </div>
                    ))
                }    
            </div>            
        </div>
    );
};

export default Home;