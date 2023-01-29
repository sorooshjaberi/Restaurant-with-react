import React from 'react'
import './Navigation.scss'
import CartButton from './CartButton'
import Basket from './Basket'
const Navigation = (props) => {
  return (
    <nav className='navBar'>
        <h2 className='navBrand'>ReactMeals</h2>
        <div className="right-container">
        <CartButton/>
        <Basket foods = {props.foods}/>
        </div>
    </nav>
  )
}

export default Navigation