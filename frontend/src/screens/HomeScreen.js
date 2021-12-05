import React, { useState } from "react";
import Product from "../components/Product";
import data from "../data.json";
const HomeScreen = () => {
  const burgerTitles = "List of Burgers";
  return (
    <section className="home_screen">
      <div className="ui container">
        {" "}
        <br /> <br />
        <h1 className="ui text purple">{burgerTitles}</h1>
        <div className="ui three grid">
          {data.products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeScreen;
