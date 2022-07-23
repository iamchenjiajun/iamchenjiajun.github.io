import React, { useState } from 'react'
import { useNavbarRef } from '../../context/NavbarContext';
import './contact.css'

const contactFormElem = <iframe title='contact me' className='contact__googleform' src="https://docs.google.com/forms/d/e/1FAIpQLScc_4FeJG3O6trW_BMRTsT_1UoNM8Pp8Bw2HuY9qTWHkH1-oA/viewform?embedded=true" width="640" height="937" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>;

function Contact() {
  const [contactForm, getContactForm] = useState(null);
  const ref = useNavbarRef("contact");

  return (
    <section className='container contact__container' id='contact' ref={ref}>
        <h2>get in touch!</h2>
        <p>Feel free to contact me via my LinkedIn, which you can find at the top of this website.</p>
        <p>Otherwise, you can contact me using this contact form. I'll try my best to respond within a few days.</p>
        <div className='contact__form'>
          <button className='contact__form-button' onClick={() => getContactForm(contactFormElem)}>Open contact form</button>
          <small className='contact__form-info'>Clicking the link above loads an embedded a Google Form in the current page.</small>
          {contactForm}
        </div>
    </section>
  )
}

export default Contact