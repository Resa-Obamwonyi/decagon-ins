import React from 'react';
import {ButtonStyle} from './style';

const Button=({link, children, width})=> {

    return (
      <ButtonStyle width={width} type="submit">
        <a href={link}>{children}</a>
      </ButtonStyle>
    );
}


export default Button;
