import React, { useContext, useEffect, useState } from 'react'
import './nav.css'
import { MdContacts, MdHome, MdPerson, MdWork, MdContentPaste } from 'react-icons/md'
import NavListItem from './NavListItem';
import NavbarContext from '../../context/NavbarContext';

const navItems = [
  {href: "/#", icon: <MdHome />, target: "head"},
  {href: "/#about", icon: <MdPerson />, target: "about"},
  {href: "/#skills", icon: <MdContentPaste />, target: "skills"},
  {href: "/#projects", icon: <MdWork />, target: "projects"},
  {href: "/#contact", icon: <MdContacts />, target: "contact"},
];

function Nav() {
  const [scroll, setScroll] = useState(window.scrollY);
  const navbarContext = useContext(NavbarContext);

  let minOffset = 0;
  let minOffsetKey = navItems[0].target;
  for (const [key, value] of Object.entries(navbarContext)) {
    if (value.current && scroll >= value.current.offsetTop - 50 && value.current.offsetTop >= minOffset) {
      minOffset = value.current.offsetTop;
      minOffsetKey = key;
    }
  }

  useEffect(() => {
    const scrollEvent = () => setScroll(window.scrollY);
    window.addEventListener('scroll', scrollEvent);
    return () => window.removeEventListener('scroll', scrollEvent);
  }, []);
  
  return (
    <nav className='container container__nav'>
        <ul className='nav__contents'>
          {navItems.map(
            (item, index) => 
              <NavListItem domId={item.target} key={index} href={item.href} icon={item.icon} selection={minOffsetKey} />
          )}
        </ul>
    </nav>
  )
}

export default Nav