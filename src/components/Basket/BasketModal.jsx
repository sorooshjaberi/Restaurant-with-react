import React from "react";
import Nothing from "./Nothing";
import "./BasketModal.scss";
import MenuBuilder from "../Menu/MenuBuilder";
import BasketMenuBuilder from "./BasketMenuBuilder";
const BasketModal = (props) => {
  const onSub = (a) => {
    props.onSub(a);
  };
  const onAdd = (a) => {
    props.onAdd(a);
  };
  let menu = <Nothing />;
  if (props.data.length !== 0) {
    // console.log(props.data);
    menu = <BasketMenuBuilder onAdd={onAdd} onSub={onSub} data={props.data} />;
  }
  return <div className="modalPopup">{menu}</div>;
};

export default BasketModal;
