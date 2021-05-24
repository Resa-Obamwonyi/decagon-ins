import React from 'react';
import {NavStyle} from './style';


const Nav=({ children, link , color}: any) => {

    return (
        <NavStyle color={color}>  

        <a href={link}>
            {children}
            
        </a>
        </NavStyle>
        )
}


export default Nav;
