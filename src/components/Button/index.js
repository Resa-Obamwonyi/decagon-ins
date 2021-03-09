import React from 'react';
import {ButtonStyle} from './style';

const Button=({link, width, backgroundColor, color, border, children})=> {

    return (
      <ButtonStyle width={width} backgroundColor={backgroundColor} color={color} border={border}>
        <a href={link}>{children}</a>
      </ButtonStyle>
    );
}


export default Button;
