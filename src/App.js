import { useState } from 'react'
import Navbar from './module/Navbar'
import Header from './module/Header'
import About from './module/About'
import Services from './module/Services'
import Portfolio from './module/Portfolio'
import Testimonials from './module/Testimonials'
// import FAQs from './module/FAQs'
import Contact from './module/Contact'
import Footer from './module/Footer'
// import FloatingNav from './module/FloatingNav'

import './index.css';

function App() {
  const [theme, setTheme] = useState('dark')
  const [modal, setModal] = useState('modal')
  const [colors, setColors] = useState('')

  const changeThemeLight = () => {
    const newTheme = 'light'
    setTheme(newTheme)
    setColors('')
  }
  const changeThemeDark = () => {
    const newTheme = 'dark'
    setTheme(newTheme)
    setColors('')
  }
  const getRed = (col) => {
    const newColor = col;
    setColors(newColor)
  }

  const changeModal = () => {
    const change = modal === 'modal' ? 'header_modal' : 'modal';
    setModal(change)

  }
  return (
    <main data_theme={theme} >
      <Navbar changeModal={changeModal} changeThemeDark={changeThemeDark}
        colors={colors} getRed={getRed} changeThemeLight={changeThemeLight} modal={modal} />
      <Header colors={colors} />
      <About colors={colors} />
      <Services colors={colors} />
      <Portfolio colors={colors} />
      <Testimonials colors={colors} />
      {/* <FAQs /> */}
      <Contact colors={colors} />
      <Footer />
      {/* <FloatingNav /> */}
    </main>
  );
}

export default App;
