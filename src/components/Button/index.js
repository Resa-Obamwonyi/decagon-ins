import React from 'react';
import {ButtonStyle} from './style';

const Button=({link, children})=> {

    return (
      <ButtonStyle>
        <a href={link}>{children}</a>
      </ButtonStyle>
    );
}


export default Button;
