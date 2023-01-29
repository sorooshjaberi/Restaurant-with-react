import React from 'react'
import './BackDrop.scss'
const BackDrop = (props) => {
  return (
    <div  className='backDrop'>{props.children}</div>
  )
}

export default BackDrop