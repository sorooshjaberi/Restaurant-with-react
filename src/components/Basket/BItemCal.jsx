import React from 'react'
import "./BasketModal.scss";

const BItemCal = (props) => {

  return (
    <div className='BItemCal'>
        <a onClick={props.onAdd} className="addBtn"><span>+</span></a>
        <div className="BItemAmount">{props.amount}</div>
        <a onClick={props.onSub} className="subBtn"><span>-</span></a>
    </div>
  )
}

export default BItemCal