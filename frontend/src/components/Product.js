import React, { useEffect, useState } from 'react';
 import { Link } from "react-router-dom";
import axios  from 'axios';

const Product = ({props}) => {
    const mealsList ="Available Meals";
    const availableDrinks ="Available Drinks";
    const [products, setProducts] = useState([])

     useEffect(() => {
         const fetchProducts = async()=>{
            const products = await axios.get('https://blogs-api.herokuapp.com/ggag_meals')
            setProducts(products.data); 
            console.log( products.data)
         }
        fetchProducts();
       
     }, [])

    return (
        <section className="product-container">
 {/* <!-- Start of Meals container   1 --> */}

    <div className="meals_banner">
        <div className="container">
            <h1>{mealsList}</h1><hr /> <br />
            <div className="row">
                <div className="col-md-12">
                    <img src="https://source.unsplash.com/1500x500/?hamburger" className="img-responsive"
                        alt="meals banner image" />
                </div>
            </div>
        </div>
    </div>
    {/* <!-- End of Meals container   1 --> */}


    {/* <!-- Start of list of avaialable meals --> */}
    <div className="meals-list">
          
{
<div className="container">
    {products.map(product => (
          <div className="row" key={product.id}>
        <div className="col-md-8">
        <div className="left-img">
            <a href="{`${product.id}`}">
            <img src={product.meal_image}
            className="img-responsive" alt={product.name} />
            </a>
            
            <br /> <br /> 
        </div>
    </div>
    <div class="col-md-4 well">
        <p className="meals-des">
            <h3>{product.name}&nbsp; | &nbsp;
            <b>{product.price}</b></h3>
            <button className="btn btn-danger"><b> {product.id + (product.name).substring(0, 1) +" " + product.name}</b></button>
            </p>
            <p>{product.description}</p>
            <a href="{`/${product.id}`}" className="btn btn-info"><b>ADD TO CART</b></a>
    </div>
    </div> 
    ))}
 </div> 
}
 
</div>

   
{/* <!-- End of list of avaialable meals --> */}


    {/* <!-- Start of list of avaialable Drinks --> */}
    <div className="drinks-list" style={{display:'none'}}>
        <div className="container">
            <h1>{availableDrinks}</h1> <hr />
            <div className="row">
                <div className="col-md-4">
                    <div className="left-drink-img">
                        <a href="#"><img src="https://source.unsplash.com/1500x1680/?icetea" className="img-responsive"
                                alt="list of meals" /></a>
                        <h3 className="drink-des">&nbsp;Ice Tea</h3>
                    </div>
                </div>
                <div className="col-md-8">
                    <a href="#"><img src="https://source.unsplash.com/1500x800/?milkshake" className="img-responsive"
                            alt="list of meals" /></a>
                    <h3 className="drink-des">&nbsp; Milkshake</h3>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- End of list of avaialable Drinks --> */}
    </section>
    )





}

export default Product
