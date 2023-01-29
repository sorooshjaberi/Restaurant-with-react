import React from 'react'
import "./BasketModal.scss";

const BItemInfo = ({data}) => {
  return (
    <div className="BItemInfo">
    <div className="BItemName">{data.name}</div>
    <div className="BItemExpense">
    <div className="BItemPrice">${data.price * data.amount}</div>
    </div>
  </div>
  )
}

export default BItemInfo