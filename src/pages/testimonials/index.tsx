import React from "react";
import Layout from "../../layout";
import { Link } from "react-router-dom";
import HomeAccordion from "../faq/homeAccordion";
import "./index.scss";

const index = (props: any) => {
  return (
    <Layout name="Home">
      <main>
        <div className="banner">
          <div className="content">
            <h2 className="belle-title">Students Testimonials</h2>
            <span className="horizontal"></span>
          </div>
        </div>

        {/* Students Testimonials */}

        <div className="testimonial-wrapper">
          <div className="testimonial-container">
            <div className="testimonial-item">
              <div className="testimonial-name">
                <h2>Itunu Raimi</h2>
                <p> iOS stack</p>
              </div>
              <div className="testimonial-text">
                <span>"</span>
                <p>
                  Before I joined Decagon, I was learning frontend development
                  on my own. I was also taking freelance wordpress jobs. My
                  experience in Decagon has been rigorous but educational. I
                  Have learnt iOS technical skills, agile skills and
                  communication skills. To anyone interested in joining the
                  program, be determined, make sure software development is
                  really what you want to do. Be willing to try out new things
                  even if they seem difficult.
                </p>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-name">
                <h2> Timring Timkwali</h2>
                <p>Android stack</p>
              </div>
              <div className="testimonial-text">
                <span>"</span>
                <p>
                  I was unemployed before coming to Decagon so I considered the
                  program a great opportunity to start my career. Presently, I
                  have been exposed to different concepts and ways of looking at
                  problems. I have learnt how to collaborate with different
                  people to produce a product. I have learnt about the
                  technicalities involved in producing apps. Decagon was not
                  joking when they said the program will be intense. You will
                  feel like you don't know anything at times, or you just want
                  to give up but just persevere and things will be alright at
                  the end.
                </p>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-name">
                <h2>Rafiat Daniju</h2>
                <p> Python Stack</p>
              </div>
              <div className="testimonial-text">
                <span>"</span>
                <p>
                  I was into teaching before Decagon so basically I joined
                  Decagon as a beginner. It hasn't been easy though, so many
                  concepts to learn within a short period of time. My typical
                  day is eat and code lol! . The good side is that I have lots
                  of people helping me out within the facility, mentoring and
                  motivating me to be the best I can. Asides from programming
                  skills in Python and its framework Django, Postgresql, Celery
                  and Redis, my communication skill has greatly improved, I
                  understand better what it means to work as a team and within
                  an Agile framework. Decagon Institute is the place to be, they
                  don't only cater for your programming needs, they also hone
                  your soft-skills , providing you with a huge network of people
                  with like minds(Developers) .
                </p>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-name">
                <h2> Kabiru Haruna </h2>
                <p>Node Stack</p>
              </div>
              <div className="testimonial-text">
                <span>"</span>
                <p>
                  I've always had a keen interest in coding but never dedicated
                  enough time to practise. So after completing my NYSC in
                  October 2019 with nothing much going on ,I took the
                  opportunity to start coding seriously. My time at Decagon has
                  been fantastic. The content is excellent, the staff and
                  students are friendly, and the course is structured in such a
                  way that you get a good idea of what it is really like to work
                  in a dev job. The general principles of programming are
                  covered, so you won't have to fear learning other programming
                  languages to increase your skills.
                </p>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-name">
                <h2> Michael Chidi Okobia</h2>
                <p>C# stack</p>
              </div>
              <div className="testimonial-text">
                <span>"</span>
                <p>
                  Before Decagon, I tried my hand at various means to earn money
                  from freelancing as I was coding on the side. My experience at
                  Decagon has been truly amazing. I learned so much in such a
                  little time. My team, Stack members, and my roomies have been
                  a huge addition to my life. I can't even begin to express the
                  joy I feel knowing i’m a step closer to where I want to be. I
                  have also improved my ability to work in a team, build team
                  spirit, Self-development, Time management, Problem solving. My
                  advice to aspiring decadevs would be, If you believe it, work
                  towards it, you will achieve it.
                </p>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-name">
                <h2> Odira Eze</h2>
                <p>Java Stack</p>
              </div>
              <div className="testimonial-text">
                <span>"</span>
                <p>
                  I worked in the accounts department of a hotel before starting
                  at Decagon. My experience at Decagon has been really
                  challenging and the same time refreshing because I get to
                  learn new problem-solving concepts and techniques everyday.
                  It's a six months of dedication and sacrifice which will
                  definitely be rewarding, you can do it.
                </p>
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
              Apply Now!
            </Link>
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
