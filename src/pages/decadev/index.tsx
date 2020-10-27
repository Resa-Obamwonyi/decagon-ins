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
            <h2 className="belle-title">Become a Decadev</h2>
            <span className="horizontal"></span>
          </div>
        </div>

        {/* Program Section */}

        <div className="program-wrapper">
          <div className="program-container">
            <div className="program-item">
              <h2>Apply</h2>
              <p>
                Complete the application form correctly to get a sign-up link
                for access to home study resources. There is also an interactive
                group platform for applicants to keep up with updates about the
                process, as well as get help with the home study from other
                applicants and the Decagon Recruiting Team.{" "}
                <a href="/apply" className="apply-link">
                  APPLY HERE
                </a>
              </p>
            </div>
            <div className="program-item">
              <h2>Home Study</h2>
              <p>
                The comprehensive home study materials have been designed to
                enable applicants who are new to software engineering understand
                the fundamentals of programming. Applicants are advised to
                thoroughly study these materials to enable them to excel in the
                next stage of the process.
              </p>
            </div>
            <div className="program-item">
              <h2>Online Assessment</h2>
              <p>
                If your application meets the basic criteria, you will be sent
                an assessment test after the study period. This first assessment
                will be a timed and monitored online test based on the study
                guide that has been provided. Your performance in this
                assessment will determine whether or not you are invited to the
                next round.
              </p>
            </div>
            <div className="program-item">
              <h2>In-Person Assessment </h2>
              <p>
                If you are successful in the online assessment, you will be
                invited for an in-person interview at our Campus for a series of
                technical and behavioural assessments to determine if the
                program is a fit for your needs.
              </p>
            </div>
            <div className="program-item">
              <h2>Admission and On-boarding</h2>
              <p>
                If you perform exceptionally well during the in-person
                interview, you will be offered provisional admission into our
                program at Decagon.
              </p>
            </div>
            <div className="program-item">
              <p className="note-text">
              Note that our recruiting process has changed to include a Home
              Study Guide, but no bootcamps. Please carefully review the new
              recruitment process checklist that will be part of the
              communication sent to you upon the completion of this application.
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
            <Link to="/apply" className="btn big-btn">Apply Now!</Link>
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
