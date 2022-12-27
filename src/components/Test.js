import React, { useState } from 'react'
// import robot from '../assets/haker3.jpg'

const Test = ({ id }) => {
  const [click, setClick] = useState('')
  const onClick = () => {
    let newCard = click === 'test' ? 'test_active' : 'test'
    setClick(newCard)
  }
  console.log(click)
  // <div className={`test test_left ${click}`} onClick={onClick}>1</div>,
  // <div className={`test test_center ${click}`} onClick={onClick}>2</div>,
  // <div className={`test test_right ${click}`} onClick={onClick}>3</div>]
  return (
    <div>
      <div className={click} onClick={onClick}>{id}</div>

    </div>
  )
}

export default Test
