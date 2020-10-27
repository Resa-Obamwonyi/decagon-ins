import React from "react";
import "./index.scss";

export default () => {
  return (
    <div className="tabs">
      <div className="tab">
        <input type="checkbox" id="chck1" />
        <label className="tab-label" htmlFor="chck1">
          What are my training location options?
        </label>
        <div className="tab-content">Sangotedo Campus in Lagos</div>
      </div>
      <div className="tab">
        <input type="checkbox" id="chck2" />
        <label className="tab-label" htmlFor="chck2">
          Is Decagon located in all states in NIgeria?
        </label>
        <div className="tab-content">
          Decagon is currently active only in Lagos.
        </div>
      </div>
      <div className="tab">
        <input type="checkbox" id="chck3" />
        <label className="tab-label" htmlFor="chck3">
          What is the Decagon Experience?
        </label>
        <div className="tab-content">
          A holistic learning experience that produces industry-ready software
          engineers, who have received capabilities to thrive in the tech
          ecosystem.
        </div>
      </div>
      <div className="tab">
        <input type="checkbox" id="chck4" />
        <label className="tab-label" htmlFor="chck4">
          What will I be taught during the training period?
        </label>
        <div className="tab-content">
          Our Program is an intense, full-time training on software engineering,
          taught by industry professionals to make you indispensable in your
          job. Within 6 months, you will be equipped with the skills needed to
          begin your career as an entry-level software engineer.
        </div>
      </div>
      <div className="tab">
        <input type="checkbox" id="chck5" />
        <label className="tab-label" htmlFor="chck5">
          What programming languages are taught during the program?
        </label>
        <div className="tab-content">Javascript, C#, Node, Android.</div>
      </div>
      <div className="tab">
        <input type="checkbox" id="chck6" />
        <label className="tab-label" htmlFor="chck6">
		What is the tuition fee?
        </label>
        <div className="tab-content">The tuition fee is N2,000,000.</div>
      </div>
      <div className="tab">
        <input type="checkbox" id="chck7" />
        <label className="tab-label" htmlFor="chck7">
		Are there any additional fees?
        </label>
        <div className="tab-content">
          We also offer support in the form of a laptop, accommodation, and a
          monthly stipend for an additional N1,000,000.
        </div>
      </div>
      <div className="tab">
        <input type="checkbox" id="chck8" />
        <label className="tab-label" htmlFor="chck8">
          What can I do to get financial aid (Loan) via Learn-Then-Earn payment
          credit funding
        </label>
        <div className="tab-content">
          To access the loan, potential candidates for the program are required
          to have a credible guarantor. A credible guarantor is an individual
          who possesses assets that are equal or over the amount of the student
          loan.
        </div>
      </div>
      {/* <div className="tab">
				<input type="checkbox" id="chck9" />
				<label className="tab-label" htmlFor="chck9">
					What can I do to get financial aid  (Loan) via Learn-Then-Earn payment credit funding
				</label>
				<div className="tab-content">
					Applicants are to choose or specify their preferred payment plan during application.
				</div>
			</div> */}
    </div>
  );
};
