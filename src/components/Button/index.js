import React from 'react';
import {ButtonStyle} from './style';

const Button=({link, children, width})=> {

    return (
      <ButtonStyle width={width}>
        <a href={link}>{children}</a>
      </ButtonStyle>
    );
}


export default Button;
