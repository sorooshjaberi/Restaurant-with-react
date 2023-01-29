import React from "react";
import BasketMenuItem from "./BasketMenuItem";
const BasketMenuBuilder = (props) => {
  const onSub = (obj) => {
    props.onSub(obj);
  };
  const onAdd = (a) => {
    props.onAdd(a);
  };
  const menu = props.data.map((food) => {
    return (
      <BasketMenuItem
        onAdd={onAdd}
        onSub={onSub}
        key={Math.random()}
        data={food}
      />
    );
  });
  return <>{menu}</>;
};

export default BasketMenuBuilder;
