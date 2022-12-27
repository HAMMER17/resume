import React, { useState } from 'react'
import robot from '../assets/haker3.jpg'
import haker from '../assets/haker2.jpg'
import virus from '../assets/haker.png'
import '../style/test.css'

const Testimonials = ({ colors }) => {
  const [click, setClick] = useState('test')

  const arr = [{
    img: robot,
    id: 1
  },
  {
    img: haker,
    ig: 2
  },
  {
    img: virus,
    id: 3
  }
  ]


  return (
    <section id="testimonials">
      <h2>Testimonials</h2>
      <div className="test_container">
        {arr.map((item, id) => {
          return <div key={id}
            className={id === click ? `test_active ${colors}` : 'test'} onClick={() => setClick(id)}>
            <img className='testImg' src={item.img} alt='rob' />
            <h4>JS</h4>
            <h4>NODE</h4>
            <h4>REACT</h4>
            <h4>FIREBASE</h4>
          </div>
        })}
      </div>

    </section>
  )
}

export default Testimonials;
