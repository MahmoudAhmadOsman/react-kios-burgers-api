import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { burger } = props;
  console.log(burger);

  return (
    <section className="product-container">

      <div class="ui card">
        <Link to={`/burger/${burger._id}`} class="ui large image">
          <img src={burger.meal_img} alt={burger.name} />
        </Link>
        <div class="content">
          <a class="header">{burger.name}</a>
          <div class="meta">
            <span class="date">
              <b>
                {" "}
                {burger._id + burger.name.substring(0, 1) + " " + "Burger"}
              </b>
            </span>
          </div>
          <div class="description">{burger.description}</div>
        </div>
        <div class="extra content">


          {/* Start of add to cart */}
          <Link to="#">
            <div class="ui left action input">
              <button className="ui button" title="Calories">
                <i class="heart outline icon" ></i>
                <small className="ui heart outline icon">{burger.calories} </small>
              </button>
              <button class="ui violet icon button">
                <i class="cart icon"></i>&nbsp;
                Checkout
              </button>
              <button className="ui button">{burger.price}</button>
              {/* <input type="text" disabled value={burger.price} /> */}
            </div>
          </Link>
          {/* End of add to cart */}
        </div>
      </div>
    </section>
  );
};

export default Product;
