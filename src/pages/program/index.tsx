import React from "react";
import Layout from "../../layout";
import {Link} from "react-router-dom"
import HomeAccordion from "../faq/homeAccordion";
import "./index.scss";

const index = (props: any) => {
  return (
    <Layout name="Home">
      <main>
        <div className="banner">
          <div className="content">
            <h2 className="belle-title">Our Program</h2>
            <span className="horizontal"></span>
          </div>
        </div>

        {/* Program Section */}

        <div className="program-wrapper">
          <div className="program-container">
            <div className="program-item">
              <h2>Sourcing </h2>
              <p>
                We find the most talented learners in Nigeria, and we select the
                top .005% to become Decagon Software Engineers
              </p>
            </div>
            <div className="program-item">
              <h2>Training</h2>
              <p>
                We deliver an intensive 6-months program which includes
                accommodation, feeding, laptop and a stipend. Our software
                developers learn both full-stack software development and soft
                skills in an immersive environment. Through an agile delivery
                methodology, mentor matching, leadership modules, our elite
                engineers are equipped with techniques and a leadership mindset
                that enables them to work competitively in any team globally.
              </p>
            </div>
            <div className="program-item">
              <h2>Projects</h2>
              <p>
                As part of our curriculum, we expose our engineers to real-life
                applications and projects. This gives them verifiable work
                experience and the confidence to excel in their jobs after
                graduation.
              </p>
            </div>
            <div className="program-item">
              <h2>Internship </h2>
              <p>
                We offer a select number of organizations a free non-committal 2
                months internship with our developers prior to graduation.
              </p>
            </div>
            <div className="program-item">
              <h2>Placement</h2>
              <p>
                We match Decagon developers with our hiring organizations to
                join their engineering teams full-time, either remotely or in
                person.
              </p>
            </div>
            <div className="program-item">
              <h2>Learn first, Pay later </h2>
              <p>
                The Learn-Then-Earn payment credit is a financial instrument
                through our financial partners that allows talented but
                cash-strapped students to learn on credit. After completion of
                the program, students will repay the cost of the program at no
                more than 20% annual premium.
              </p>
            </div>
          </div>
        </div>

        <div className="faq-section">
          <div className="content">
            <div className="faq-title">
              <h3 className="title">Find answers</h3>
              <p>Get clarity on everything about the program</p>
              <a href="/faq" className="btn btn-link">
                more FAQ
              </a>
            </div>
            <div className="faq-accordion">
              <HomeAccordion />
            </div>
          </div>
        </div>
        <div className="cta">
          <div className="content">
            <h2 className="title">Ready to become a Decadev ?</h2>
            <Link to="/" className="btn big-btn">Application Closed</Link>
            {/* <a
              href="https://decagonhq.com"
              className="btn big-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Application Closed
            </a> */}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default index;
