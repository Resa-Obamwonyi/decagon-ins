import React from 'react';
import { Link } from 'react-router-dom';
import placement from "../../images/placement-logos.jpg";
import tuition from "../../images/tuition-free.svg";
import guarantee from "../../images/guaranteed-success.svg";
import recruitment from "../../images/recruitment.svg";
import training from "../../images/training.svg";
import residence from "../../images/full-residency.svg";
import Layout from "../../layout";
import HomeAccordion from '../faq/homeAccordion';

const index = () => {
	return (
		<Layout>
			<main>
				<div className="banner">
					<div className="content">
						<h2 className="belle-title">
							Launch your career in software engineering
							{/* Applications for the women-only cycle have  <span>closed</span> . */}
						</h2>
						<p>
							With dedication to the advancement of knowledge in areas that contribute to technological development, Decagon is ushering in an era of tech-powered growth and prosperity in Nigeria by training and deploying an army of problem solvers, drivers of innovation and pioneers in tech.
							{/* Kindly check our main website for updates on our new recruiting cycle. */}
						</p>
						<span className="horizontal"></span>
					</div>
				</div>
				<div className="why-decagon">
					<div className="content">
						<div className="stats">
							<div className="icon">
								<img src={tuition} alt="tuition free" />
							</div>
							<h2>FLEXIBLE PAYMENT PLAN</h2>
							<p>
							Our Learn-then-Earn payment option allows you to learn on credit and repay the cost of the program after the commencement of a job placement for a period of 1-3 years.
            </p>
						</div>
						<div className="stats">
							<div className="icon">
								<img
									src={guarantee}
									alt="guaranteed success"
								/>
							</div>
							<h2>GUARANTEED SUCCESS</h2>
							<p>
								The need for software engineers will continue to grow and so, jobs
								will always be available.
            </p>
						</div>
						<div className="stats">
							<div className="icon">
								<img src={residence} alt="full residency" />
							</div>
							<h2>FULL RESIDENCY</h2>
							<p>
								For all 6months of the program, you stay in our well furnished
								apartments and with extra amenities 
            </p>
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
										We identify the most talented learners from across Nigeria and select the top 0.02% to become Decagon Software Engineers through a series of technical and non-technical assessments.
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
										software development + soft skills) which includes
										accommodation, a laptop, feeding and a monthly stipend.
									</p>
								</div>
							</div>
							<div className="step diff-step">
								<div className="step-info">
									<h3 className="title">PLACEMENT</h3>
									<p>
										We match Decagon developers with our hiring organizations to
										join their engineering teams full-time
									</p>
								</div>
								<div className="step-img">
									<img src={placement} alt="placement" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="faq-section">
					<div className="content">
						<div className="faq-title">
							<h3 className="title">Find answers</h3>
							<p>
								Get clarity on everything about the program
							</p>
							<a href="/faq" className="btn">more FAQ</a>
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
					</div>
				</div>
			</main>
		</Layout>
	);
}

export default index




