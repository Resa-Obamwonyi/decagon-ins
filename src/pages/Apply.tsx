import React from "react";
import Header from "../components/Header";
import FormDiv from "../components/Form";
import Index from "../components/footer";
import {IndexStyle} from "./style"

function Apply() {
  return (
    <IndexStyle>
      <Header backgroundColor="#2D2F48" color="#ffffff" position="relative" location="apply"/>
      <FormDiv />
      <Index />
    </IndexStyle>
  );
}

export default Apply;
