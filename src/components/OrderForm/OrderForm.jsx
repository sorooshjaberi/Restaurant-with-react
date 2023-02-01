import React from "react";
import Form from "./Form";
import "./OrderForm.scss";
const OrderForm = ({onClose, total, data }) => {
  console.log(onClose);
  return (
    <div className="form">
      <Form onClose = {onClose} total={total} orderData={data} />
    </div>
  );
};

export default OrderForm;
