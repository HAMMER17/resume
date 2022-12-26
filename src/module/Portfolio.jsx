import React, { useState } from 'react'
import '../style/portfolio.css'

import robot from '../assets/robot.png'
import front from '../assets/front.jpg'
import front1 from '../assets/f3.webp'
// import front2 from '../assets/frontend-e.webp'
// import front3 from '../assets/front2.webp'

const Portfolio = ({ colors }) => {
  const array = [front, front1, front, front1]
  const [slider, setSlider] = useState(0)

  const nextSlide = () => {
    if (slider < 0)
      setSlider((n) => n + 100)
  }
  const backSlide = () => {
    if (slider > -300)
      setSlider((n) => n - 100)
  }
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio_container">

        <img className='portfolioImg2' src={robot} alt="w" />
        <div className="portfolio_slider" >
          {array.map((elem, index) => {
            return <img key={index} className='portImg' src={elem} alt="font"
              style={{ transform: `translateX(${slider}%)` }} />
          })}
        </div>
        <button className='btn next' onClick={backSlide} style={{ background: `${colors}` }}>+</button>
        <button className='btn back' onClick={nextSlide} style={{ background: `${colors}` }}>-</button>
      </div>
    </section>
  )
}

export default Portfolio
