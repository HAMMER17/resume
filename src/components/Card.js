import React from 'react'

const Card = ({ img, text, colors }) => {
  return (
    <div className='card'>
      <h3 className={`card_h3 ${colors}`}>{text}</h3>
      <img src={img} alt="img" className='cardImg' />
    </div>
  )
}

export default Card
