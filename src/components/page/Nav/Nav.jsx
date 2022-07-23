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
  const [selection, setSelection] = useState("head");
  const navbarContext = useContext(NavbarContext);

  useEffect(() => {
    const scrollEvent = () => {
      let minOffset = 0;
      let minOffsetKey = null;
      for (const [key, value] of Object.entries(navbarContext)) {
        if (window.scrollY >= value.current.offsetTop - 50 && value.current.offsetTop >= minOffset) {
          minOffset = value.current.offsetTop;
          minOffsetKey = key;
        }
      }
      setSelection(minOffsetKey);
    };

    window.addEventListener('scroll', scrollEvent);

    return () => window.removeEventListener('scroll', scrollEvent);
  }, [navbarContext])
  
  return (
    <nav className='container container__nav'>
        <ul className='nav__contents'>
          {navItems.map(
            (item, index) => 
              <NavListItem domId={item.target} key={index} href={item.href} icon={item.icon} selection={selection} />
          )}
        </ul>
    </nav>
  )
}

export default Nav