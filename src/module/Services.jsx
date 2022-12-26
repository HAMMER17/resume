import React from 'react'
import '../style/services.css'
import back from '../assets/back.png'
import front from '../assets/front.jpg'
import f from '../assets/f3.webp'
import b from '../assets/front2.webp'
import Card from '../components/Card'

const Services = ({ colors }) => {
  const data = [back, front, f, b]
  return (
    <section id="services">
      <h2>Services</h2>
      <div className="container services_container">
        {data.map((elem, id) => {
          return <Card key={id} img={elem} colors={colors}
            text='Development on REACT HODE CSS HTML' />
        })}

      </div>
    </section>
  )
}

export default Services;
