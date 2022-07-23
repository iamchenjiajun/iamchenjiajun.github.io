import React, { useContext, useRef } from 'react'

const NavbarContext = React.createContext({});

export function useNavbarRef(name) {
    const navbarContext = useContext(NavbarContext);
    const ref = useRef();
    navbarContext[name] = ref;
    return ref;
}

export default NavbarContext;