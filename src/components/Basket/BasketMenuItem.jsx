import React from "react";
import BItemInfo from "./BItemInfo";
import BItemCal from "./BItemCal";
import "./BasketModal.scss";

const BasketMenuItem = (props) => {
  const { pData } = props;
  const onSub = () => {
    const obj = {
      id: pData.id,
      name: pData.name,
      description: pData.description,
      price: pData.price,
      amount: -1,
    };
    props.onSub(obj);
  };
  const onAdd = () => {
    const obj = {
      id: pData.id,
      name: pData.name,
      description: pData.description,
      price: pData.price,
      amount: +1,
    };
    props.onAdd(obj);
  };
  return (
    <div className="BMenuItem">
      <BItemInfo data={props.data} />
      <BItemCal amount ={props.data.amount} onAdd={onAdd} onSub={onSub} />
    </div>
  );
};

export default BasketMenuItem;
