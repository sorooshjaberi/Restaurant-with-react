import React, { useContext } from "react";
import CartContext from "../../Contexts/cartContext";
import BasketMenuItem from "./BasketMenuItem";
const BasketMenuBuilder = (props) => {
  const foodsCtx = useContext(CartContext);
  const menu = foodsCtx.orderedMeals.map((food) => {
    return <BasketMenuItem  key={Math.random()} data={food} />;
  });
  return <>{menu}</>;
};

export default BasketMenuBuilder;
