import React from 'react'
import './contact.css'

function Contact() {
  return (
    <section className='container contact__container' id='contact'>
        <h2>get in touch! (wip)</h2>
        <form action="" className='contact__form'>
          <input className='contact__form-input' required type="text" placeholder='your name' />
          <input className='contact__form-input' required type="email" name="" id="" placeholder='your email' />
          <textarea className='contact__form-textarea' required name="" id="" cols="30" rows="10" placeholder='your message'></textarea>
          <button className='contact__form-button' type="submit">submit</button>
        </form>
    </section>
  )
}

export default Contact