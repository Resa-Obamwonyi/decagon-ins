import React from 'react';
import {ButtonStyle} from './style';

const Button=({link, children, width, disabled})=> {

    return (
      <a href={link}>
        <ButtonStyle width={width} type="submit" disabled={disabled}> 
          {children}
        </ButtonStyle>
      </a>
    );
}


export default Button;
