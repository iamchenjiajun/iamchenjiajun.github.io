import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className='footer__wrapper'>
        <footer className='outer__container footer__outer'>
            <div className="container footer__container">
                <h2>Jia Jun</h2>
                <p>Made with React using create-react-app and react-icons.</p>
                <p>Deployed with gh-pages.</p>
                <a className='footer__source-code' href="https://github.com/iamchenjiajun/iamchenjiajun.github.io">Source code</a>
            </div>
        </footer>
    </div>
  )
}

export default Footer