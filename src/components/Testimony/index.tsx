import React from "react";
import { TestimonyStyle } from "./style";

function Testimony({ text, avatar, name, stack }: any) {
  return (
    <TestimonyStyle>
      <div className="background">
        <span>“</span>
        <p>{text}</p>
        <div className="chat"></div>
      </div>
      <div className="student-section">
        <div className="student-avatar">
          <img src={avatar} alt="student-avatar" />
        </div>
        <div className="student-info">
          <h3>{name}</h3>
          <p>{stack} Stack</p>
        </div>
      </div>
    </TestimonyStyle>
  );
}

export default Testimony;
