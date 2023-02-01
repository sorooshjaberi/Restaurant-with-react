import React, { useContext, useState } from "react";
import Nothing from "./Nothing";
import "./BasketModal.scss";
import BasketMenuBuilder from "./BasketMenuBuilder";
import OrderForm from "../OrderForm/OrderForm";
import CartContext from "../../Contexts/cartContext";
const BasketModal = (props) => {
  const CartCtx = useContext(CartContext);
  const [showPay, setShowPay] = useState(false);
  let menu = <Nothing />;
  let total = 0;
  if (props.data.length !== 0) {
    menu = <BasketMenuBuilder />;
    total = CartCtx.orderedMeals.reduce((a, b) => {
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
        <a onClick={props.onClose} className="basketButton closer">
          <span onClick={props.onClose} className="closer">
            Close
          </span>
        </a>
        {props.data.length > 0 && (
          <a onClick={payHandler} className="basketButton pay ">
            <span className="">Order</span>
          </a>
        )}
      </div>
    </div>
  );
  return (
    <>
      {!showPay && basket}
      {showPay && (
        <OrderForm onClose={props.onClose} data={props.data} total={total} />
      )}
    </>
  );
};

export default BasketModal;
