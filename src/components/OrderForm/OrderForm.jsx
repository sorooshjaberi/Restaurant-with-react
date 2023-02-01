import React from "react";
import Form from "./Form";
import './OrderForm.scss'
const OrderForm = ({ total ,data}) => {
  return (
    <div className="form">
      <Form orderData={data}/>
      <div className="form__total">"${total}"</div>
    </div>
  );
};

export default OrderForm;
