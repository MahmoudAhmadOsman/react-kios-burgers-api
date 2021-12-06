import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { burger } = props;
  console.log(burger);

  return (
    <section className="product-container">
      <div class="ui card">
        <Link to={`/burger/${burger._id}`} class="ui medium image">
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
          <a>
            <i class="heart outline icon"></i>
            {burger.calories} Calories
          </a>{" "}
          &nbsp;
          {/* <a> <i class="band aid icon"></i> {burger.fiber} Fiber </a> */}
          <a>
            {" "}
            <i class="user md icon"></i> {burger.protein} Protein{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Product;
