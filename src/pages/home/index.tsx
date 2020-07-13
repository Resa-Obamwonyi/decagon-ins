import React from 'react';
import { Link } from 'react-router-dom';
import placement from "../../images/placement-logos.jpg";
import girl from "../../images/girls-girls.jpg";
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
							{/* Not enough <span>women in tech</span> & we want to change that. */}
							Applications for the women-only cycle have  <span>closed</span> .
						</h2>
						<p>
							{/* Decagon is offering a women only training cycle. Our goal is
							to create more opportunities for women in tech */}
							Kindly check our main website for updates on our new recruiting cycle.
						</p>
						<span className="horizontal"></span>
					</div>
				</div>
				<div className="girls-illustration">
					<div className="content">
						<img src={girl} alt="girls-illustration" />
					</div>
				</div>
				<div className="statistics">
					<div className="content">
						<div className="stats">
							<h2>01</h2>
							<p>year since Decagon launched</p>
						</div>
						<div className="stats">
							<h2>13</h2>
							<p>females became expert engineers</p>
						</div>
						<div className="stats">
							<h2>30</h2>
							<p>slots for aspiring female software engineers</p>
						</div>
					</div>
				</div>
				<div className="works">
					<div className="content">
						<h3 className="title">How it works</h3>
						<div className="work-steps">
							<div className="step">
								<div className="step-img">
									<img src={recruitGirl} alt="recruitment" />
								</div>
								<div className="step-info">
									<h3 className="title">RECRUITMENT</h3>
									<p>
									Decagon, an elite software engineering and leadership training  institute is committed to promoting gender inclusivity in the tech industry. The search for female talents who are extremely smart, possess a track record of personal, academic and professional excellence and interested in building a career in tech is on-going.
									</p>
									<a className="btn light" href="//decagonhq.com" target="_blank">Application closed</a>
									{/* <Link className="btn light" to="/apply">Apply now</Link> */}
								</div>
							</div>
							<div className="step">
								<div className="step-img">
									<img src={trainGirl} alt="training" />
								</div>
								<div className="step-info">
									<h3 className="title">TRAINING</h3>
									<p>
										We deliver an intensive 6 months program (full-stack
										software development + soft skills) which includes
										accommodation, and everything you need
									</p>
									<Link className="btn light" to="/faq">Read our FAQ</Link>
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
			</main>
		</Layout>
	);
}

export default index




