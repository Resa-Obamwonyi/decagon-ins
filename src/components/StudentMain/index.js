import React from "react";
import { StudentMainStyle } from "./style";
import headerImage from "../../images/header-group.png";

function StudentMain({heading, padding}) {
  return (
    <StudentMainStyle background={headerImage} padding={padding}>
      <div className="shadow">
        <h1>{heading}</h1>
      </div>
    </StudentMainStyle>
  );
}

export default StudentMain;
