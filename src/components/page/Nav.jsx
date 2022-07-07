import React from 'react'
import './nav.css'
import { MdContacts, MdHome, MdPerson, MdWork } from 'react-icons/md'

function Nav() {
  return (
    <nav className='container container__nav'>
        <ul className='nav__contents'>
          <li><a href="/#" className='nav__item'><MdHome /></a></li>
          <li><a href="/#about" className='nav__item'><MdPerson /></a></li>
          <li><a href="/#projects" className='nav__item'><MdWork /></a></li>
          <li><a href="/#contact" className='nav__item'><MdContacts /></a></li>
        </ul>
    </nav>
  )
}

export default Nav