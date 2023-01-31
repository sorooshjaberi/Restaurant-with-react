import React from "react";
import Form from "./Form";
import './OrderForm.scss'
const OrderForm = ({ total }) => {
  return (
    <div className="form">
      <Form />
      <div className="form__total">"${total}"</div>
    </div>
  );
};

export default OrderForm;
