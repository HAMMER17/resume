import React from 'react'
import { data } from '../data'
import haker from '../assets/haker.png'
import { IoColorPalette } from 'react-icons/io5'
import '../style/navbar.css'


const Navbar = ({ changeModal, changeThemeDark, changeThemeLight, modal, getRed, colors }) => {

  return (
    <>
      <nav style={{ background: colors }}>
        <div className="container nav_container" >
          <a href="/" className='nav_logo'>
            <img className='nav_img' src={haker} alt="h" />
          </a>
          <ul className="nav_menu">
            {data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)}
          </ul>
          <button id='theme_icon' onClick={changeModal}>
            <IoColorPalette size={35} />
          </button>
        </div>
      </nav>
      <div className={modal}>
        <div className="span_container">
          <div className='span red' onClick={() => getRed('red')}></div>
          <div className='span blue' onClick={() => getRed('blue')}></div>
          <div className='span orange' onClick={() => getRed('orange')}></div>
          <div className='span green' onClick={() => getRed('green')}></div>
        </div>
        <div className="span_container">
          <button className='spanBtn white' onClick={() => changeThemeLight('dark')}>white</button>
          <button className='spanBtn black' onClick={() => changeThemeDark('light')}>black</button>
        </div>
      </div>
    </>
  )
}

export default Navbar;
