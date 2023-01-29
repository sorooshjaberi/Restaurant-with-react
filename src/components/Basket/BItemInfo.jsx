import React from 'react'
import "./BasketModal.scss";

const BItemInfo = ({data}) => {
    console.log(data);
  return (
    <div className="BItemInfo">
    <div className="BItemName">{data.name}</div>
    <div className="BItemExpense">
    <div className="BItemPrice">${data.price * data.amount}</div>
    {/* <div className="BItemAmount">{data.amount} X</div> */}
    </div>
  </div>
  )
}

export default BItemInfo