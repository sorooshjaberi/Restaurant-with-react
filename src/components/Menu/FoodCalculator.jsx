import React from "react";
import { useRef } from "react";
import './Menu.scss'

const FoodCalculator = (props) => {
const input  = useRef()
const addHandler =() => {
    if(input.current.value>0)
  props.addHandler(input.current.value)
}
  return (
    <div className="foodCalculator">
      <div className="amountForm">
        <label htmlFor="amount" className="amountLabel">
          Amount
        </label>
        <input ref={input} type="number" name="amount" min='0' id="" className="amountInput"  />
      </div>
      <a onClick={addHandler} className="amountButton">+ Add</a>
    </div>
  );
};

export default FoodCalculator;
