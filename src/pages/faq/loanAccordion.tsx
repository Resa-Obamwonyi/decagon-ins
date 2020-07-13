import React from 'react'
import "./index.scss";

export default () => {
  return (
    <div className="tabs">
      <div className="tab">
        <input type="checkbox" id="chck1" />
        <label className="tab-label" htmlFor="chck1">
          What is the Learn-Then-Earn payment credit
				</label>
        <div className="tab-content">
          A Learn-then-Earn payment credit is a financial instrument through our financial partners that allows talented but cash-strapped students to learn on credit and then repay the cost of the program at no more than 20% annual premium after completion of the educational program, for a period of 1- 3 years.
				</div>
      </div>
      <div className="tab">
        <input type="checkbox" id="chck2" />
        <label className="tab-label" htmlFor="chck2">
          What are the terms of the Learn-Then-Earn (LTE) credit
				</label>
        <div className="tab-content">
          The LTE credit costs no more than 20% at a reducing balance. Students have up to but no more than three (3) years to repay it
				</div>
      </div>
      <div className="tab">
        <input type="checkbox" id="chck3" />
        <label className="tab-label" htmlFor="chck3">
          What are the requirements of the Learn-Then-Earn (LTE) credit
				</label>
        <div className="tab-content">
          <h6>
            <b>Students are required to: </b>
          </h6>
          <ul>
            <li>Submit their HND or Degree Certificate/ Statement of result.</li>
            <li>
              Submit their  NYSC certificate or Exemption Letter.
						</li>
          </ul>
        </div>
      </div>
      <div className="tab">
        <input type="checkbox" id="chck4" />
        <label className="tab-label" htmlFor="chck4">
          Will the student be aided in getting a job once the program is completed?
				</label>
        <div className="tab-content">
          Yes, however, the student must make a conscious effort towards getting a job
				</div>
      </div>
      <div className="tab">
        <input type="checkbox" id="chck5" />
        <label className="tab-label" htmlFor="chck5">
          Which student will be eligible to apply for the learn earn-Then-Earn (LTE) credit
				</label>
        <div className="tab-content">
          The Learn-then-Earn is available to everyone who qualifies for admission into Decagon.
				</div>
      </div>
      <div className="tab">
        <input type="checkbox" id="chck6" />
        <label className="tab-label" htmlFor="chck6">
          When should all requirements for Learn-Then-Earn (LTE) credit be provided?
				</label>
        <div className="tab-content">
          During the In-Person Interview
				</div>
      </div>
    </div>
  );
}



