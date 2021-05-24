import React from "react";
import Header from "../components/Header";
import StudentMain from "../components/StudentMain";
import Questions from "../components/Questions";
import ApplyBanner from "../components/ApplyBanner";
import Index from "../components/footer";

function FAQ() {
  return (
    <div>
      <Header />
      <StudentMain heading={"FAQs"} />
      <Questions />
      <ApplyBanner />
      <Index />
    </div>
  );
}

export default FAQ;
