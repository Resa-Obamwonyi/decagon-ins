import React from "react";
import { CurriculumStyle } from "./style";
import currImage from "../../images/curr-main.png";
import StackCard from "../StackCard";
import { divOne, divTwo } from "./data";
import Schedule from "../Schedule";

function Curriculum() {
  return (
    <CurriculumStyle>
      <h1>Our Best-in-Class Curriculum</h1>
      <div className="main-div">
        <p>
          Gain fluency with the core software engineering techniques needed to
          tap into a fast-growing field. Our curriculum is curates following
          best practices and innovative teaching approaches for our decadevs to
          meet evolving employer demands
        </p>
      </div>
      <div className="flex-content">
        <div className="half-content">
          <p>
            At Decagon Institute, our curriculum is broken down into 6 units of
            4 weeks each (6months): There will be content for each of the 6
            units.
          </p>
          <p>
            We have 6 stacks that our decadevs learn and become proficient in
            using upon graduation from the program. These include: Java, Node,
            .NET, Python, Android and iOS
          </p>
        </div>
        <div className="photo">
          <img src={currImage} alt="decadev-curriculum" />
        </div>
      </div>
      <div className="stackdiv">
        {divOne.map((divOne) => (
          <StackCard
            key={divOne.stack}
            stack={divOne.stack}
            img={divOne.image}
            cardkey={divOne.key}
          />
        ))}
      </div>
      <div className="stackdiv">
        {divTwo.map((divTwo) => (
          <StackCard
            key={divTwo.stack}
            stack={divTwo.stack}
            img={divTwo.image}
            cardkey={divOne.key}
          />
        ))}
      </div>
      <div>
        <p>
          Every week we follow a specific agenda designed for you to pick up new
          skills quickly. Individual progress assessment is built into every
          corner of our digital program allowing students to repeat content
          until mastery has been demonstrated.
        </p>
        <p>
          A typical day/week in the life of a decadev is reflected in our weekly
          schedule below:
        </p>
        <Schedule />
      </div>
    </CurriculumStyle>
  );
}

export default Curriculum;
