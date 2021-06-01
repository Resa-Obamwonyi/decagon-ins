import React from "react";
import Header from '../components/Header';
import StudentMain from "../components/StudentMain";
import ProgramBar from "../components/ProgramBar";
import Index from "../components/footer";
import {IndexStyle} from "./style"

function Program() {
  return (
    <IndexStyle>
      <Header />
      <StudentMain heading={"Learn. Explore. Discover."} />
      <ProgramBar />
      <Index />
    </IndexStyle>
  );
}

export default Program;
