import React from "react";
import Header from '../components/Header';
import StudentMain from "../components/StudentMain";
import ProgramBar from "../components/ProgramBar";
import Index from "../components/footer";

function Program() {
  return (
    <div>
      <Header />
      <StudentMain heading={"Learn. Explore. Discover."} />
      <ProgramBar />
      <Index />
    </div>
  );
}

export default Program;
