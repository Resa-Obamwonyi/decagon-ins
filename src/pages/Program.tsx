import "../App.css";
import Header from '../components/Header';
import StudentMain from "../components/StudentMain";
import ProgramBar from "../components/ProgramBar";
import Footer from "../components/Footer";
import React from "react";

function Program() {
  return (
    <div>
      <Header />
      <StudentMain heading={"Learn. Explore. Discover."} />
      <ProgramBar />
      <Footer />
    </div>
  );
}

export default Program;
