import React from "react";
import { TestimonyWrapStyle } from "./style";
import Testimony from "../Testimony";
import { testimonies } from "./testimonydata";

function TestimonyWrap() {
  return (
    <TestimonyWrapStyle>
      {testimonies.map((testimonies) => (
        <Testimony
          key={testimonies.name}
          text={ testimonies.text}
          name={testimonies.name}
          avatar={testimonies.avatar}
          stack={testimonies.stack}
        />
      ))}
    </TestimonyWrapStyle>
  );
}

export default TestimonyWrap;
