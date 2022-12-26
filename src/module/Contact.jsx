import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../style/contact.css'

const Contact = ({ colors }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zpzvph7', 'template_utrs61f', form.current, 'b8fj2rufkTNGBRXe3')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h2>Contact with Me</h2>
      <div className="contact_container">
        <form action="" className="contact_form" ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Name</label>
          <input className='contact_input' type="text" name='name' />
          <label htmlFor="phone">Phone</label>
          <input className='contact_input' type="text" name='phone' />
          <label htmlFor="email">Email</label>
          <input className='contact_input' type="text" name='email' />
          <label htmlFor="text">Text...</label>
          <textarea id="" cols="30" rows="10" name='message'></textarea>
          <button className={`btn send ${colors}`}>SEND</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
