import React from "react";
import { StudentMainStyle } from "./style";
import Button from "../Button";
import headerImage from "../../images/header-group.png";

function StudentMain({heading}) {
  return (
    <StudentMainStyle background={headerImage}>
      <div className="shadow">
        <h1>{heading}</h1>
      </div>
    </StudentMainStyle>
  );
}

export default StudentMain;
