import React from 'react'

function NavListItem(props) {
  const className = (props.selection === props.domId) ? "nav__item selected" : "nav__item";

  return (
    <li>
        <a href={props.href} className={className}>
            {props.icon}
        </a>
    </li>
  )
}

export default NavListItem