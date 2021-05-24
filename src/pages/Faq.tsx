import "../App.css";
import Header from "../components/Header";
import StudentMain from "../components/StudentMain";
import Questions from "../components/Questions";
import ApplyBanner from "../components/ApplyBanner";
import Footer from "../components/Footer";
import React from "react";

function FAQ() {
  return (
    <div>
      <Header />
      <StudentMain heading={"FAQs"} />
      <Questions />
      <ApplyBanner />
      <Footer />
    </div>
  );
}

export default FAQ;
