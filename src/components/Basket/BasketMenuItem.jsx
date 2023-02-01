import React, { useContext } from "react";
import BItemInfo from "./BItemInfo";
import BItemCal from "./BItemCal";
import "./BasketModal.scss";
import CartContext from "../../Contexts/cartContext";

const BasketMenuItem = (props) => {
  const CartCtx = useContext(CartContext);
  const pData = props.data;
  const onSub = () => {
    const obj = {
      id: pData.id,
      name: pData.name,
      description: pData.description,
      price: pData.price,
      amount: -1,
    };
    CartCtx.onAdd(obj);
  };
  const onAdd = () => {
    const obj = {
      id: pData.id,
      name: pData.name,
      description: pData.description,
      price: pData.price,
      amount: +1,
    };
    CartCtx.onAdd(obj);
  };
  return (
    <div className="BMenuItem">
      <BItemInfo data={props.data} />
      <BItemCal amount={props.data.amount} onSub={onSub} onAdd={onAdd} />
    </div>
  );
};

export default BasketMenuItem;
