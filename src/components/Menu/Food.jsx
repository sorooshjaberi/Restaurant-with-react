import React from "react";
import FoodInfo from "./FoodInfo";
import FoodCalculator from "./FoodCalculator";
import "./Menu.scss";
const Food = (props) => {
  const addHandler = (value) => {
    const obj = {
      id: props.id,
      name: props.name,
      description: props.description,
      price: props.price,
      amount: +value,
    };
    props.addHandler(obj);

  };
  return (
    <div className="food">
      <FoodInfo
        name={props.name}
        desc={props.description}
        price={props.price}
      />
      <FoodCalculator addHandler={addHandler} />
    </div>
  );
};

export default Food;
