import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cards from '../component/Cards';

function Products() {

    const [products, setProduct] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((products) => {
                setProduct(products.data)
                console.log(products)
            })
    }, [])

    return (
        <div>
                    <div className="flex gap-4 flex-wrap justify-center mt-24">
                            {
                                products.length > 0 ? products.map(product =><Cards key={product.id} id={product.id} img={product.image} title={product.title} desc={product.description} price={product.price}/>)  : <div className="">Loading ....</div>
                            }
                    </div>
        </div>
    )
}

export default Products
