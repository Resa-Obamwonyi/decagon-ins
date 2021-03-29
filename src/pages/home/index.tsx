import React from "react";
import { Link } from "react-router-dom";
import placement from "../../images/placement-logos.jpg";
import tuition from "../../images/tuition-free.svg";
import recruitment from "../../images/recruitment.svg";
import training from "../../images/training.svg";
import residence from "../../images/full-residency.svg";
import Layout from "../../layout";
import HomeAccordion from "../faq/homeAccordion";

const index = (props: any) => {
  return (
    <Layout name="Home">
      <main>
        <div className="banner">
          <div className="content">
            <h2 className="belle-title">
              Launch your career in software engineering
              {/* Applications for the women-only cycle have  <span>closed</span> . */}
            </h2>
            <p>
              Decagon has trained 100s of people and helped them get their first
              job as software engineers in top companies within 6-9 months
              {/* Decagon is ushering in an era of tech-powered growth and prosperity in Nigeria by training and deploying a squad of problem solvers, drivers of innovation and pioneers in tech.  <br /> */}
              {/* With dedication to the advancement of knowledge in areas that contribute to technological development, */}
              {/* Join our training program with no upfront payment */}.
              {/* Kindly check our main website for updates on our new recruiting cycle. */}
            </p>

            <div className="banner-mobile-buttons">
              <Link to="/apply" className="join-btn">
                Apply Now
              </Link>
              <a href="https://decagonhq.com/?p=fb" className="hire-btn">
                Hire a Dev Team
              </a>
            </div>
            <span className="horizontal"></span>
          </div>
        </div>
        <div className="why-decagon">
          <div className="content">
            <div className="stats">
              <div className="icon">
                <img src={residence} alt="full residency" />
              </div>
              <h2>All you need to excel</h2>
              <p>
                we offer accommodation| Feeding| Laptop| Electricity| Internet|
                and monthly stipend for the 6 months duration. So you just focus
                and learn
              </p>
            </div>
            {/* <div className="stats">
							<div className="icon">
								<img
									src={guarantee}
									alt="guaranteed success"
								/>
							</div>
							<h2>GUARANTEED SUCCESS</h2>
							<p>
								The world is powered by technology.
								There has never been a better time to become a worldclass software engineer.
								Our program prepares you for an excellent tech career takeoff.

            </p>
						</div> */}
            <div className="stats">
              <div className="icon">
                <img src={tuition} alt="tuition free" />
              </div>
              <h2>Pay after you earn</h2>
              <p>
                We can allow you pay us after you graduate and secure a job.
              </p>
              <div className="sterling-container">
                <p>powered by</p>
                <div className="img-container">
                  <img
                    src={process.env.PUBLIC_URL + "/images/sterling_logo.png"}
                    alt="Powered by Sterling Bank"
                    className="sterling-logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="works">
          <div className="content">
            <h3 className="title">How it works</h3>
            <div className="work-steps">
              <div className="step">
                <div className="step-img">
                  <img src={recruitment} alt="recruitment" />
                </div>
                <div className="step-info">
                  <h3 className="title">RECRUITMENT</h3>
                  <p>
                    We screen to identify fast learners to become Decagon
                    Software Engineers
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="step-img">
                  <img src={training} alt="training" />
                </div>
                <div className="step-info">
                  <h3 className="title">TRAINING</h3>
                  <p>
                    We deliver an intensive 6 months program (full-stack
                    software development + soft skills)
                  </p>
                </div>
              </div>
              <div className="step diff-step">
                <div className="step-info">
                  <h3 className="title">PLACEMENT</h3>
                  <p>
                    We match Decagon engineers with our hiring organizations to
                    join their engineering teams full-time
                  </p>
                </div>
                <div className="step-img">
                  {/* <img src={placement} alt="placement" /> */}
                  <div className="img-container">
                    <img
                      src={process.env.PUBLIC_URL + "/images/sterling_logo.png"}
                      alt="Sterling bank's logo"
                      className="sterling-logo"
                    />
                  </div>
                  <div className="img-container">
                    <img
                      src={process.env.PUBLIC_URL + "/images/seamfix_logo.png"}
                      alt="Seamfix's logo"
                      className="seamfix-logo"
                    />
                  </div>
                  <div className="img-container">
                    <img
                      src={process.env.PUBLIC_URL + "/images/access_logo.png"}
                      alt="Access bank's logo"
                      className="access-logo"
                    />
                  </div>
                  <div className="img-container">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/mastercard_logo.png"
                      }
                      alt="Master card's logo"
                      className="mastercard-logo"
                    />
                  </div>
                </div>
              </div>
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
            <Link to="/apply" className="btn big-btn">
              Apply now
            </Link>
            {/* <a href="https://decagonhq.com" className="btn big-btn" target="_blank" rel="noopener noreferrer">Application Closed</a> */}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default index;
