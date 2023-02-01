import React, { useContext } from "react";
import CartContext from "../../Contexts/cartContext";
import Form from "./Form";
import "./OrderForm.scss";
const OrderForm = ({onClose, total, data }) => {
  const CartCtx = useContext(CartContext)
  return (
    <div className="form">
      <Form onClose = {Cart} total={total} orderData={data} />
    </div>
  );
};

export default OrderForm;
