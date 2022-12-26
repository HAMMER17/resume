import React, { useState } from 'react'
import robot from '../assets/haker3.jpg'
import '../style/test.css'

const Testimonials = ({ colors }) => {
  const [click, setClick] = useState('test')

  const arr = [1, 2, 3]


  return (
    <section id="testimonials">
      <h2>Testimonials</h2>
      <div className="test_container">
        {arr.map((_, id) => {
          return <div key={id} style={{ background: colors }}
            className={id === click ? 'test_active' : 'test'} onClick={() => setClick(id)}>
            <img className='testImg' src={robot} alt='rob' />
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
