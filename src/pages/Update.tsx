import React from "react";
import Header from "../components/Header";
import FormDiv from "../components/Update";
import Index from "../components/footer";
import styled from "styled-components";

const ApplyStyle = styled.div`
  
  @media (min-width: 768px) {
    max-width: 100%;
  }
  @media (min-width: 992px) {
    max-width: 100%;
  }
  @media (min-width: 1200px) {
    max-width: 100%;
  }
  @media (min-width: 1360px) {
    max-width: 100%;
  }
`;

function Apply() {
  return (
    <ApplyStyle>
      <Header backgroundColor="#2D2F48" color="#ffffff" position="relative" location="apply" maxWidth="80%" padding="0 10%"/>
      <FormDiv />
      <Index width="80%" padding="0 10%"/>
    </ApplyStyle>
  );
}

export default Apply;
