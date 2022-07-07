import React from 'react'
import './footer.css'

function Footer() {
  return (
    <footer className='outer__container footer__outer'>
        <div className="container footer__container">
            <h2>Jia Jun</h2>
            <p>Made with create-react-app and react-icons.</p>
            <a className='footer__source-code' href="https://github.com/iamchenjiajun/iamchenjiajun.github.io">Source code</a>
        </div>
    </footer>
  )
}

export default Footer