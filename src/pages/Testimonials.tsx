import React from "react";
import Header from "../components/Header";
import StudentMain from "../components/StudentMain";
import TestimonyWrap from "../components/TestimonyWrap";
import ApplyBanner from "../components/ApplyBanner";
import Footer from "../components/Footer";

function Testimonials() {
  return (
    <div>
      <Header />
      <StudentMain heading={"Student Testimonials"} />
      <TestimonyWrap />
      <ApplyBanner />
      <Footer />
    </div>
  );
}

export default Testimonials;
