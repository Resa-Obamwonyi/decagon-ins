import React, { useState, useRef, useEffect } from "react";
import { ProgramBarStyle } from "./style";
import Overview from "../Overview";
import Curriculum from "../Curriculum";
import AdmissionsProcess from "../AdmissionsProcess";
import HiringPartner from "../HiringPartner";
import Finance from "../Finance";



const getDimensions = (ele) => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const scrollTo = (ele) => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};


function ProgramBar() {
  const [visibleSection, setVisibleSection] = useState();
  const overviewRef = useRef(null);
  const curriculumRef = useRef(null);
  const admissionRef = useRef(null);
  const financeRef = useRef(null);
  const hiringRef = useRef(null);
  const headerRef = useRef(null);

  const sectionRefs = [
    { section: "Overview", ref: overviewRef },
    { section: "Curriculum", ref: curriculumRef },
    { section: "Admission", ref: admissionRef },
    { section: "Finance", ref: financeRef },
    { section: "Hiring", ref: hiringRef },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);

  const [scrolled, setScrolled] = useState(false);
    const handleBarScroll = () => {
      const offset = window.scrollY;
      if (offset > 220) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    useEffect(() => {
      window.addEventListener("scroll", handleBarScroll);
    });
  
  return (
    <ProgramBarStyle>
      <div
        className={scrolled ? "transition-bar sticky" : "transition-bar"}
        ref={headerRef}
      >
        <div className="transition-items">
          <span
            className={` ${visibleSection === "Overview" ? "active" : ""}`}
            onClick={() => {
              scrollTo(overviewRef.current);
            }}
          >
            Program Overview
          </span>
          <span
            className={` ${visibleSection === "Curriculum" ? "active" : ""}`}
            onClick={() => {
              scrollTo(curriculumRef.current);
            }}
          >
            Program Curriculum
          </span>
          <span
            className={` ${visibleSection === "Admission" ? "active" : ""}`}
            onClick={() => {
              scrollTo(admissionRef.current);
            }}
          >
            Admissions
          </span>
          <span
            className={` ${visibleSection === "Finance" ? "active" : ""}`}
            onClick={() => {
              scrollTo(financeRef.current);
            }}
          >
            Financing
          </span>
          <span
            className={` ${visibleSection === "Hiring" ? "active" : ""}`}
            onClick={() => {
              scrollTo(hiringRef.current);
            }}
          >
            Hiring Partners
          </span>
        </div>
      </div>
      <div className="transition-content" id="Overview" ref={overviewRef}>
        <Overview />
      </div>

      <div className="transition-content" id="Curriculum" ref={curriculumRef}>
        <Curriculum />
      </div>

      <div className="transition-content" id="Admission" ref={admissionRef}>
        <AdmissionsProcess />
      </div>

      <div className="transition-content" id="Finance" ref={financeRef}>
        <Finance />
      </div>

      <div className="transition-content" id="Hiring" ref={hiringRef}>
        <HiringPartner />
      </div>
    </ProgramBarStyle>
  );
}
export default ProgramBar;
