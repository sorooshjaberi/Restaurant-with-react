import React from 'react'
import Food from './Food'
const MenuBuilder = (props) => {
  const addHandler = (value) => {
    props.addHandler(value)
  }
   const foods = props.foodsData.map((foodData) => {
     return <Food addHandler={addHandler} key={foodData.id} {...foodData}/>
    })
  return (
    <>
    {foods}
    </>
  )
}

export default MenuBuilder