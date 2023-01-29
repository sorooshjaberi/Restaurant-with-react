import React from 'react'
import './BackDrop.scss'
const BackDrop = (props) => {
  return (
    <div onClick={props.onClick} className='backDrop'>{props.children}</div>
  )
}

export default BackDrop