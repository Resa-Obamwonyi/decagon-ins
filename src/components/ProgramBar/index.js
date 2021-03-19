import React, { useState } from "react";
import { ProgramBarStyle } from "./style";
import Overview from "../Overview";
import Curriculum from "../Curriculum";

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
  return <div className="transition-content">Hey</div>;
};

const dis4 = () => {
  return <div className="transition-content">Hiya</div>;
};

const dis5 = () => {
  return <div className="transition-content">Hiye</div>;
};

function ProgramBar() {
  const [show, setShow] = useState({ key: 0 });
  const handleClick = (key) => {
    setShow((prev) => ({ ...prev, key: key }));
  };

  return (
    <ProgramBarStyle>
      <div className="transition-bar">
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
            Hiring Partner
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
