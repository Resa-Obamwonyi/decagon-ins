import React from "react";
import { HeaderStyle } from "./style";
import NavWrap from "../NavWrap";

function Header({backgroundColor, color, position}) {
    return (
      <HeaderStyle backgroundColor={backgroundColor} position={position}>
        <NavWrap color={color} />
      </HeaderStyle>
    );
}

export default Header;
