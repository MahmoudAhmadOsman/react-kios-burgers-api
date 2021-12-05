import React from 'react'

const CartScreen = (props) => {
    const productId = props.match.params._id;
    const { products } = props;
    console.log(productId)
    return (
        <section className="cart-container" style={{marginTop:"60px"}}>
        <div className="ui container"> 
        <h1 className="text-danger">Your Shopping Cart</h1> 
        <div className="ui divider"></div>
            <div className="row">
                <div className="col-md-12">
               <p>{productId}</p>
                

                </div>
            </div>
        </div>
     </section>
    )
}

export default CartScreen
