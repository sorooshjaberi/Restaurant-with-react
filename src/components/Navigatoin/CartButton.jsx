import React from "react";
import "./Navigation.scss";

const CartButton = (props) => {
  return <a onClick={props.onClick} className="cartButton">Cart</a>;
};

export default CartButton;
