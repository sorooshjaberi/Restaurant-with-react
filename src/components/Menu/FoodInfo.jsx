import React from "react";
import "./Menu.scss";

const FoodInfo = (props) => {
  return (
    <div className="foodInfo">
      <div className="foodName">{props.name}</div>
      <div className="foodDesc">{props.desc}</div>
      <div className="foodPrice">${props.price}</div>
    </div>
  );
};

export default FoodInfo;
