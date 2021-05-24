import React from "react";
import { HeaderStyle } from "./style";
import NavWrap from "../NavWrap";

function Header({backgroundColor, color, position, location}: any) {
    return (
      <HeaderStyle backgroundColor={backgroundColor} position={position}>
        <NavWrap color={color} location={location}/>
      </HeaderStyle>
    );
}

export default Header;
