import React, { useState, useEffect } from "react";
import { ProgramBarStyle } from "./style";
import Overview from "../Overview";
import Curriculum from "../Curriculum";
import AdmissionsProcess from "../AdmissionsProcess";
import HiringPartner from "../HiringPartner";
import Finance from "../Finance";


const dis1 = () => {
  return (
    <div className="transition-content">
      <Overview />
    </div>
  );
};

const dis2 = () => {
  return (
    <div className="transition-content">
      <Curriculum />
    </div>
  );
};

const dis3 = () => {
  return (
    <div className="transition-content">
      <AdmissionsProcess />
    </div>
  );
};

const dis4 = () => {
  return (
    <div className="transition-content">
      <Finance />
    </div>
  );
};

const dis5 = () => {
  return (
    <div className="transition-content">
      <HiringPartner />
    </div>
  );
};

function ProgramBar() {
  const [show, setShow] = useState({ key: 0 });
  const handleClick = (key) => {
    setShow((prev) => ({ ...prev, key: key }));
  };
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 220) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <ProgramBarStyle>
      <div className={scrolled ? "transition-bar sticky" : "transition-bar"}>
        <div className="transition-items">
          <span
            className={`${show.key === 0 ? "active" : null}`}
            onClick={() => handleClick(0)}
          >
            Program Overview
          </span>
          <span
            className={`${show.key === 1 ? "active" : null}`}
            onClick={() => handleClick(1)}
          >
            Program Curriculum
          </span>
          <span
            className={`${show.key === 2 ? "active" : null}`}
            onClick={() => handleClick(2)}
          >
            Admissions
          </span>
          <span
            className={`${show.key === 3 ? "active" : null}`}
            onClick={() => handleClick(3)}
          >
            Financing
          </span>
          <span
            className={`${show.key === 4 ? "active" : null}`}
            onClick={() => handleClick(4)}
          >
            Hiring Partners
          </span>
        </div>
      </div>
      {show.key === 0
        ? dis1()
        : show.key === 1
        ? dis2()
        : show.key === 2
        ? dis3()
        : show.key === 3
        ? dis4()
        : show.key === 4
        ? dis5()
        : null}
    </ProgramBarStyle>
  );
}

export default ProgramBar;
