import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { product } = props;
  console.log(product);

  return (
    <section className="product-container">
      <div class="ui card">
        <a href="/cart/`{product._id}`" class="ui medium image">
          <img src={product.meal_img} alt={product.name}/>
        </a>
        <div class="content">
          <a class="header">{product.name}</a>
          <div class="meta">
            <span class="date"><b> {product._id + (product.name).substring(0, 1) + " " + "Burger"}</b></span>
          </div>
          <div class="description">
            {product.description}
          </div>
        </div>
        <div class="extra content">
          <a>
            <i class="heart outlineicon icon"></i>
            {product.calories} Calories
          </a> &nbsp;
          <a>
            <i class="band aid icon"></i>
            {product.fiber} Fiber
          </a>
        </div>
      </div>
    </section>
  );
};

export default Product;
