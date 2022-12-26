import React, { useState } from 'react'
import h2 from '../assets/haker2.jpg'
import h1 from '../assets/haker.png'
import h3 from '../assets/haker3.jpg'
import h4 from '../assets/haker4.jpg'
import h5 from '../assets/haker5.jpg'
import CV from '../assets/output.pdf'
import '../style/about.css'

const About = ({ colors }) => {
  const [slide, setSlide] = useState(0)
  const images = [h2, h1, h3, h4, h5]
  const changeImg = () => {
    setSlide(slide ? slide - 1 : images.length - 1)
  }
  return (
    <section id='about'>
      <div className="container about_container">
        <div className="about_left">
          <span className='about_span'>click photo...</span>
          <div className="about_portret">
            <img src={images[slide]} alt="haker" className='about_img' onClick={changeImg} />
          </div>
        </div>

        <div className="about_right">
          <h2>About Me</h2>
          {/* <div className="about_card"></div> */}
          <p className='about_p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Ex voluptates quasi assumenda repellat aspernatur a corporis voluptate inventore.
            Omnis, nostrum!
            Odit omnis officia cum quibusdam blanditiis aspernatur deserunt error praesentium?</p>
          <p className='about_p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Assumenda animi aperiam totam magni laboriosam quos possimus sit. Delectus aspernatur labore tempore?
            Illo repellat aliquam vero laudantium corrupti doloremque sint. Quis?</p>
          <p className='about_p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Ex voluptates quasi assumenda repellat aspernatur a corporis voluptate inventore.
            Omnis, nostrum!
            Odit omnis officia cum quibusdam blanditiis aspernatur deserunt error praesentium?</p>

          <button className={`btn primary ${colors}`} onClick={changeImg}>Change Img</button>
          <a href={CV} download className="btn light" >Download</a>
        </div>
      </div>
    </section>
  )
}

export default About;
