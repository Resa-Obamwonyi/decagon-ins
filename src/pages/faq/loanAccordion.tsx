import React from "react";
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
          A Learn-Then-Earn payment credit is a financial instrument through our
          financial partners that allows talented but cash-strapped students to
          learn on credit. After completion of the program, students will repay
          the cost of the program at no more than 20% annual premium. Our
          students are expected to start repaying the credit once they finish
          the program. It is governed by a legally binding contract.
        </div>
      </div>
      <div className="tab">
        <input type="checkbox" id="chck2" />
        <label className="tab-label" htmlFor="chck2">
          What are the terms of the Learn-Then-Earn (LTE) credit
        </label>
        <div className="tab-content">
          The LTE credit costs no more than 20% at a reducing balance. Students
          have up to (but no more than) three years to repay it. Students will
          start paying back once they secure a job after graduation.
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
          <ul className="loan-accordion-ul">
            <li>
              Submit their HND or Degree Certificate/Statement of Results.
            </li>
            <li>Submit their NYSC certificate or Exemption Letter.</li>
            <li>
              Have a credible guarantor who is financially capable of
              guaranteeing the full cost of the Decagon tuition and interest
              accrual. This individual must provide an undated cheque of
              N3,600,000 addressed to the bank providing the loan. The guarantor
              will be the signatory to a bank student loan application and will
              require the disclosure of assets worth N3,600,000.
            </li>
          </ul>
        </div>
      </div>
      <div className="tab">
        <input type="checkbox" id="chck4" />
        <label className="tab-label" htmlFor="chck4">
          Which student will be eligible to apply for the learn earn-Then-Earn
          (LTE) credit
        </label>
        <div className="tab-content">
          The Learn-then-Earn is available to everyone who qualifies for
          admission into Decagon.
        </div>
      </div>
      <div className="tab">
        <input type="checkbox" id="chck5" />
        <label className="tab-label" htmlFor="chck5">
        what happens if I fail to repay the credit?
        </label>
        <div className="tab-content">
        As the credit funding is governed by a legally binding contract,
          breaching any clause therein is considered a crime and will be treated
          accordingly.
        </div>
      </div>
      
      <div className="tab">
        <input type="checkbox" id="chck6" />
        <label className="tab-label" htmlFor="chck6">
          When should all requirements for Learn-Then-Earn (LTE) credit be
          provided?
        </label>
        <div className="tab-content">During the In-Person Assessment</div>
      </div>
    </div>
  );
};
