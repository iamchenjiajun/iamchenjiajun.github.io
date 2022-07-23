import React from 'react'
import { useNavbarRef } from '../context/NavbarContext';
import './about.css'

function About() {
  const ref = useNavbarRef("about");

  return (
    <div className="container about__container" id='about' ref={ref}>
        <article>
            <h2>about me</h2>
            <p>
              I am Jia Jun, a final year Computer Engineering student, currently studying at the National Univeristy of Singapore (NUS).
              My interests are in the area of Embedded Systems and Web Development. I like to write programs and work with electronics.
            </p>
        </article>
    </div>
  )
}

export default About