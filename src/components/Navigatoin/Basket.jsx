import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import './Navigation.scss'

const Basket = (props) => {
  const [total, setTotal] = useState(0);
  let tot = 0;
  if (props.foods.length) {
    for (const food of props.foods) {
      tot += food.amount;
    }
  }
  useEffect(() => {
    setTotal(tot);
  }, [props.foods]);
  return <div className="amountNumber">{total}</div>;
};

export default Basket;
