import React from 'react'
import "./index.scss";

export default () => {
	return (
		<div className="tabs">
			<div className="tab">
				<input type="checkbox" id="chck1" />
				<label className="tab-label" htmlFor="chck1">
					What is Decagon ?
				</label>
				<div className="tab-content">
					Decagon is an elite software engineering and leadership training
					Institute that equips high potential talents with world-class software
					engineering and leadership skills combined with practical exposure
					through apprenticeship and corporate placements thereby ensuring the
					launch of successful tech careers.
				</div>
			</div>
			<div className="tab">
				<input type="checkbox" id="chck2" />
				<label className="tab-label" htmlFor="chck2">
					What is the Software Engineering Program about?
				</label>
				<div className="tab-content">
					It is a 6-month intensive course that launches your career as a
					software engineer. At the end of the Program, you become a competitive
					industry-ready entry-level software engineer.
				</div>
			</div>
			<div className="tab">
				<input type="checkbox" id="chck3" />
				<label className="tab-label" htmlFor="chck3">
					How do I apply?
				</label>
				<div className="tab-content">
					Fill in your details in the application form and click submit. Follow
					the instructions.
				</div>
			</div>
			<div className="tab">
				<input type="checkbox" id="chck4" />
				<label className="tab-label" htmlFor="chck4">
					Who can apply?
				</label>
				<div className="tab-content">
					<h6>
						<b>To be considered, Applicants Must</b>
					</h6><br/>
					<ul>
						<li>
							Be a Female
						</li><br/>
						<li>
							Must possess track record of personal, professional and academic excellence </li><br />
						<li>is a fast learner with Great learning and cognitive ability.
						</li><br/>
						<li>must possess the determination to work hard and excel as a software developer. 
						</li><br/>
						<li>
							Have either a Higher National Diploma(HND), Bachelor's degree, or
							Masters.
						</li><br/>
						<li>
							Have completed NYSC or Have an Exemption Letter.
						</li>
					</ul>
				</div>
			</div>
			<div className="tab">
				<input type="checkbox" id="chck5" />
				<label className="tab-label" htmlFor="chck5">
					What happens after I apply?
				</label>
				<div className="tab-content">
					Get a Home study Pack and start learning immediately. Afterwards, take our free  Assessment and Cognitive tests online. Based on the outcome of your aptitude tests, If you are selected,  you will be invited for an in-person interview in Lagos. You will be interviewed by the faculty, and successful candidates will be admitted into the Decagon Software Engineering Fellowship program.
				</div>
			</div>
			<div className="tab">
				<input type="checkbox" id="chck6" />
				<label className="tab-label" htmlFor="chck6">
					How long will the Entire recruitment process last?
				</label>
				<div className="tab-content">
					The entire process from Application to Admission will happen in 2 weeks
				</div>
			</div>
			<div className="tab">
				<input type="checkbox" id="chck7" />
				<label className="tab-label" htmlFor="chck7">
					Who do I interact with?
				</label>
				<div className="tab-content">
					Send all enquiries via mail to <a href="mailto:recruit@decagonhq.com">recruit@decagonhq.com</a>.
				</div>
			</div>
		</div>
	);
}



