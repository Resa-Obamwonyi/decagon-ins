import React from 'react';
import { Link } from 'react-router-dom';
import placement from "../../images/placement-logos.jpg";
import tuition from "../../images/tuition-free.svg";
import guarantee from "../../images/guaranteed-success.svg";
import recruitment from "../../images/recruitment.svg";
import training from "../../images/training.svg";
import residence from "../../images/full-residency.svg";
import recruitGirl from "../../images/recruit-girls.jpg";
import trainGirl from "../../images/train-girls.jpg";
import Layout from "../../layout";
import HomeAccordion from '../faq/homeAccordion';

const index = () => {
	return (
		<Layout>
			<main>
				<div className="banner">
					<div className="content">
						<h2 className="belle-title">
							Launch your career in software development
							{/* Applications for the women-only cycle have  <span>closed</span> . */}
						</h2>
						<p>
							Decagon is ushering in a new phase of tech-powered growth and
							prosperity in Nigeria by training and deploying an army of
							leader-Engineers.
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
							<h2>TUITION FREE</h2>
							<p>
								If you can’t afford it, we will cover all the cost and provide you
								with a MacBook if you need one.
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
								apartments and play PS5
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
										Thousands of people apply and through series of tests, we
										select most talented learners to become Decagon Software
										Engineers
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
										accommodation, and everything you need
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
								Get clarity on everything about the program and join us to
								increase the number of women in tech
							</p>
						</div>
						<div className="faq-accordion">
							<HomeAccordion />
						</div>
					</div>
				</div>
				<div className="cta">
					<div className="content">
						<h2 className="title">Ready to become a Decadev & get thrashed in Soccer?</h2>
						<Link to="#" className="btn big-btn">Apply Now!</Link>
					</div>
				</div>
			</main>
		</Layout>
	);
}

export default index




