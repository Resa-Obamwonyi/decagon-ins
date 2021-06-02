import React from "react";
import { HeaderStyle } from "./style";
import NavWrap from "../NavWrap";

function Header({backgroundColor, color, position, location, maxWidth, padding}: any) {
    return (
      <HeaderStyle backgroundColor={backgroundColor} position={position} maxWidth={maxWidth} padding={padding}>
        <NavWrap color={color} location={location} maxWidth={maxWidth}/>
      </HeaderStyle>
    );
}

export default Header;
