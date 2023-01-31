import React, { useState } from "react";
import Nothing from "./Nothing";
import "./BasketModal.scss";
import BasketMenuBuilder from "./BasketMenuBuilder";
import OrderForm from "../OrderForm/OrderForm";
const BasketModal = (props) => {
  const [showPay, setShowPay] = useState(false);
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
  const payHandler = () => {
    setShowPay(true);
  };
  const basket = (
    <div className="modalPopup">
      {menu}
      {props.data.length > 0 && (
        <div className="BItemTotal">
          <div className="BItemTotal__text">&lArr; Total</div>
          <div className="BItemTotal__amount">${total}</div>
        </div>
      )}
      <div className="buttonsContainerBasket">
        <a onClick={props.onClose} className="basketButton">
          <span>Close</span>
        </a>
        {props.data.length > 0 && (
          <a onClick={payHandler} className="basketButton pay">
            <span>Order</span>
          </a>
        )}
      </div>
    </div>
  );
  return (
    <>
      {!showPay && basket}
      {showPay && <OrderForm data={props.data} total={total} />}
    </>
  );
};

export default BasketModal;
