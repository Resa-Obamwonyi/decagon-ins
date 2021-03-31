import React from 'react';
import {ButtonStyle} from './style';

const Button=({link, children, width})=> {

    return (
      <a href={link}>
        <ButtonStyle width={width} type="submit">
          {children}
        </ButtonStyle>
      </a>
    );
}


export default Button;
