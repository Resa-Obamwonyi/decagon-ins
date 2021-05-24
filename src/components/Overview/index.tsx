import React from "react";
import { OverviewStyle } from "./style";
import overview from "../../images/overview.png";


function Overview() {
  return (
    <OverviewStyle>
      <h1>About the Program</h1>
      <div className="flex-content">
        <div className="half-content">
          <p>
            At Decagon Institute, we believe that the student’s well-being is
            crucial to their success in our training program.
          </p>
          <p>
            As a result, we provide our decadevs with laptops, accommodation,
            meal allowance and a stipend to ensure they are focused and in the
            best position to thrive.
          </p>
          <h2>Training</h2>
          <p>
            We deliver an intensive 6-month program where our software
            developers learn both full-stack software development and additional
            soft skills in an immersive environment. Through an agile delivery
            methodology, mentor matching and leadership modules, our elite
            engineers are equipped with techniques and a
            leadership mindset that enables them to work competitively in any
            team globally.
          </p>
        </div>
        <div className="photo">
          <img src={overview} alt="decadev-studying" />
        </div>
      </div>

      <div className="full-content">
        <h2>Projects</h2>
        <p>
          As part of our curriculum, we expose our engineers to real-life
          applications and projects. During these projects, we ensure they are
          well-equipped to design programs both individually and in teams. This
          aspect of our program provides our engineers with verifiable work
          experience and the confidence to excel in their jobs after graduation.
        </p>

        <h2>Internships</h2>
        <p>
          We offer a select number of organizations a free non-committal 2
          months internship with our outstanding developers prior to graduation.
        </p>

        <h2>Placement</h2>
        <p>
          At the end of the program, most Decagon developers are matched with
          our hiring partners to join their engineering teams full-time, either
          remotely or in person.
        </p>
      </div>
    </OverviewStyle>
  );
}

export default Overview;
