import React from "react";
import Header from "../components/Header";
import StudentMain from "../components/StudentMain";
import Questions from "../components/Questions";
import ApplyBanner from "../components/ApplyBanner";
import Index from "../components/footer";
import {IndexStyle} from "./style"

function FAQ() {
  return (
    <IndexStyle>
      <Header />
      <StudentMain heading={"FAQs"} />
      <Questions />
      <ApplyBanner />
      <Index />
    </IndexStyle>
  );
}

export default FAQ;
