import React from 'react';
import { Link } from 'react-router-dom';
import placement from "../../images/placement-logos.jpg";
import tuition from "../../images/tuition-free.svg";
import training from "../../images/training.svg";
import residence from "../../images/full-residency.svg";
import girl from '../../images/girls-girls.jpg';
import recruitGirls from '../../images/recruit-girls.jpg';
import Layout from "../../layout";
import HomeAccordion from '../faq/homeAccordion';

const index = () => {
	return (
		<Layout class="decabelle" name="decabelle">
			<main className="decabelle">
				<div className="banner">
					<div className="content">
						<h2 className="belle-title">
							Become a <span>Female</span> world class Software Engineer.
						</h2>
						<p>
							You are Smart Exceptional Ambitious and Confident
							You are a Decabelle. 
							<Link to="/apply" className="btn btn-link">Apply Now</Link>
							{/* <a href="https://decagonhq.com" className="btn btn-link" target="_blank" rel="noopener noreferrer">Application Closed</a> */}
						</p>
						<span className="horizontal"></span>
					</div>
				</div>
				<div className="girls-illustration">
					<div className="content">
						<img src={girl} alt="girls-illustration" />
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
							we offer accommodation| Feeding| Laptop| Electricity| Internet| and monthly stipend for the 6 months duration. So you just focus and learn
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
						</div>
					</div>
				</div>
				<div className="works">
					<div className="content">
						<h3 className="title">How it works</h3>
						<div className="work-steps">
							<div className="step">
								<div className="step-img">
									<img src={recruitGirls} alt="recruitment" />
								</div>
								<div className="step-info">
									<h3 className="title">RECRUITMENT</h3>
									<p>
									We screen to  identify fast learners  to become Decagon Software Engineers 
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
									We deliver an intensive 6 months program (full-stack software development + soft skills) 

									</p>
								</div>
							</div>
							<div className="step diff-step">
								<div className="step-info">
									<h3 className="title">PLACEMENT</h3>
									<p>
									We match Decagon engineers with our hiring organizations to join their engineering teams full-time

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
							<a href="/faq" className="btn btn-link">more FAQ</a>
						</div>
						<div className="faq-accordion">
							<HomeAccordion />
						</div>
					</div>
				</div>
				<div className="cta">
					<div className="content">
						<h2 className="title">Ready to become a Decabelle ?</h2>
						<Link to="/apply" className="btn big-btn">Apply Now!</Link>
						{/* <a href="https://decagonhq.com" className="btn big-btn" target="_blank" rel="noopener noreferrer">Application Closed</a> */}
					</div>
				</div>
			</main>
		</Layout>
	);
}

export default index




