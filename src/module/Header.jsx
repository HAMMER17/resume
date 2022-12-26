import React, { useState } from 'react'
import haker from '../assets/haker.png'
import { socials } from '../socials'
import { FaNodeJs, FaReact, FaCss3, FaHtml5 } from 'react-icons/fa'
import { SiRedux } from 'react-icons/si'
import '../style/header.css'

const Header = ({ colors }) => {
  const [change, setChahge] = useState('header_img')

  const changeImg = () => {
    const img = change === 'header_img' ? 'header_active' : 'header_img'
    setChahge(img)
  }
  return (
    <header id="header">
      <div className="container header_container">
        <div className="header_profile">
          <img src={haker} alt="haker" className={change} onClick={changeImg} />
          <div className='header_verticale'>

            <FaNodeJs fontSize={30} className='header_icon2' />
            < FaReact fontSize={30} className='header_icon' />
            <FaCss3 fontSize={30} className='header_icon2' />
            <FaHtml5 fontSize={30} className='header_icon2' />
            <SiRedux fontSize={30} className='header_icon' />

          </div>
        </div>
        <span className='header_click'>click photo...</span>
        <h3>I am Developer</h3>
        <p>
          I develop websites, as well as applications and online stores.
          I can help you with design, hosting and database...
          you can contact me this is not a big example of a site !
        </p>
        <div className="header_cta">
          <a href="#contact" className={`btn primary ${colors}`}>Let is Tolk...</a>
          <a href="#portfolio" className='btn light'>My Work!</a>
        </div>
        <div className="header_socials">
          {socials.map(elem => <a href={elem.title} target="_blank" key={elem.id} style={{ background: colors }}
            rel="noopener noreferrer">{elem.icon}</a>)}
        </div>

      </div>
    </header>
  )
}

export default Header
