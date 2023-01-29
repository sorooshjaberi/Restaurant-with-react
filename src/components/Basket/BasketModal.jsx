import React from "react";
import Nothing from "./Nothing";
import "./BasketModal.scss";
import MenuBuilder from "../Menu/MenuBuilder";
import BasketMenuBuilder from "./BasketMenuBuilder";
const BasketModal = (props) => {
  const onAdd = (a) => {
    props.onAdd(a);
  };
  let menu = <Nothing />;
  if (props.data.length !== 0) {
    menu = <BasketMenuBuilder onAdd={onAdd}  data={props.data} />;
  }
  return <div className="modalPopup">{menu}
  <a onClick={props.onClose} className="closeButton"><span>Close</span></a>
  </div>;
};

export default BasketModal;
