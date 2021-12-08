import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductScreen = (props) => {
  const burgertId = props.match.params.id;

  //   const burgerDetails = useSelector((state) => state.burgerDetails);
  //   const { loading, error, burger } = burgerDetails;

  return (
    <section className="burgers-details" style={{ marginTop: "60px" }}>
      <div className="ui container">
        <h1>Burger Screen</h1> <div className="ui divider"></div>
        <b>Burger ID: </b>
        {burgertId}
      </div>
    </section>
  );
};

export default ProductScreen;
