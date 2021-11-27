import React, { useState } from 'react'
import Product from '../components/Product'
import loading from '../components/Loading'

const HomeScreen = () => {

    const [loading, error, produtcs] = useState({});
    return (
        <section className="home-product">
            {
                loading ?(
                     <div className="loading">
                    <Loading />
                </div> ): error ? (<div>
                    <Product products={products}></Product>
                </div>
                )
            }
            
        </section>
    )
}

export default HomeScreen
