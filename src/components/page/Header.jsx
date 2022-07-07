import React from 'react'
import './header.css'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

function Header() {
  return (
    <div className='header__wrapper'>
      <header className='outer__container header__outer'>
        <div className="container header__container">
          <img className='avatar' src="https://github.com/iamchenjiajun.png" alt="Me" />
          <div className="header__container__about">
            <div className="header__container__about__name">
              <h4>hello, i'm</h4>
              <h2>Chen Jia Jun</h2>
            </div>
            <div className="header__container__about__links">
              <a href="https://www.github.com/iamchenjiajun"><FaGithub/></a>
              <a href="https://www.linkedin.com/in/iamchenjiajun"><FaLinkedinIn/></a>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header