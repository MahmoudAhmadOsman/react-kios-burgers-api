import React, { useEffect, useState } from 'react';
 import { Link } from "react-router-dom";
import axios  from 'axios';

const Product = ({props}) => {
    const mealsList ="Available Meals";
    const availableDrinks ="Available Drinks";
    const [products, setProducts] = useState([])

     useEffect(() => {
         const fetchProducts = async()=>{
            const products = await axios.get('https://blogs-api.herokuapp.com/meals_api')
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
        <div className="col-md-">
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
    {
        product.length > 0 ? (
        <span className="alert-danger">No Product Found!</span>
        ): (
        
        <div className="show-product">
           <div className="col-md-8">
        <div className="left-img">
            <Link to={`/cart/${product.id}`}>
            <img src={product.meal_image}
            className="img-responsive" alt={product.name} />
            </Link>
            
            <br /> <br /> 
        </div>
    </div>
    <div class="col-md-4 card">
        <p className="meals-des">
            <h3>{product.name}&nbsp; | &nbsp;
            <b>{product.price}</b></h3>
            <p className="text-warning"><b> {product.id + (product.name).substring(0, 1) +" " + product.name}</b></p> <hr />
            </p>
            <p>{product.description}</p>
           <p> 
               <Link to={`/cart/${product.id}`} className="btn btn-warning"><b className="add_to_cart">ADD TO CART</b></Link>
            </p>
    </div>
    </div>
        )
    }
  
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
