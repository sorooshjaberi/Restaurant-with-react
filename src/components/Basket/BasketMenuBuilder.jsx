import React from "react";
import BasketMenuItem from "./BasketMenuItem";
const BasketMenuBuilder = (props) => {
  const onAdd = (a) => {
    console.log(a);
    props.onAdd(a);
  };
  const menu = props.data.map((food) => {
    return (
      <BasketMenuItem
        onAdd={onAdd}
        
        key={Math.random()}
        data={food}
      />
    );
  });
  return <>{menu}</>;
};

export default BasketMenuBuilder;
