import React from "react";
import Form from "./Form";
import "./OrderForm.scss";
const OrderForm = ({ total, data }) => {
  return (
    <div className="form">
      <Form total={total} orderData={data} />
    </div>
  );
};

export default OrderForm;
