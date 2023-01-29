import React from "react";
import Nothing from "./Nothing";
import "./BasketModal.scss";
import BasketMenuBuilder from "./BasketMenuBuilder";
const BasketModal = (props) => {
  const onAdd = (a) => {
    props.onAdd(a);
  };
  let menu = <Nothing />;
  let total = 0;
  if (props.data.length !== 0) {
    menu = <BasketMenuBuilder onAdd={onAdd} data={props.data} />;
    total = props.data.reduce((a, b) => {
      return (a += b.amount * b.price);
    }, 0);
  }
  return (
    <div className="modalPopup">
      {menu}
      {props.data.length>0 && <div className="BItemTotal">
        <div className="BItemTotal__text">&lArr; Total</div>
        <div className="BItemTotal__amount">{total}</div>
      </div>}
      <div className="buttonsContainerBasket">
        <a onClick={props.onClose} className="basketButton">
          <span>Close</span>
        </a>
        {props.data.length>0 &&<a onClick={props.onClose} className="basketButton pay">
          <span>Pay</span>
        </a>}
      </div>
    </div>
  );
};

export default BasketModal;
