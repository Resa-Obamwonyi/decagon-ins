import React from 'react'
import "./index.scss";

export default () => {
	return (
		<div className="tabs">
			<div className="tab">
				<input type="checkbox" id="chck1" />
				<label className="tab-label" htmlFor="chck1">
					What are my training location options?
				</label>
				<div className="tab-content">
					Lagos
				</div>
			</div>
			<div className="tab">
				<input type="checkbox" id="chck2" />
				<label className="tab-label" htmlFor="chck2">
					What will I be taught during the training period?
				</label>
				<div className="tab-content">
					Our Program is an intense, full-time training on software engineering taught by industry professionals to make you indispensable in your job. Within 6 months we will teach you the skills that you need to begin your career as an entry-level software engineer.
				</div>
			</div>
			<div className="tab">
				<input type="checkbox" id="chck3" />
				<label className="tab-label" htmlFor="chck3">
					Tuition fee
				</label>
				<div className="tab-content">
					The tuition fee is N2,000,000.
				</div>
			</div>
			<div className="tab">
				<input type="checkbox" id="chck4" />
				<label className="tab-label" htmlFor="chck4">
					Optional fee
				</label>
				<div className="tab-content">
					We also offer support in the form of a new laptop, accommodation, and a monthly stipend for an additional N1,000,000.
				</div>
			</div>
			<div className="tab">
				<input type="checkbox" id="chck5" />
				<label className="tab-label" htmlFor="chck5">
					Is there Financial Aid?
				</label>
				<div className="tab-content">
					Yes
				</div>
			</div>
			<div className="tab">
				<input type="checkbox" id="chck6" />
				<label className="tab-label" htmlFor="chck6">
					What can I do to get financial aid  (Loan) via Learn-Then-Earn payment credit funding
				</label>
				<div className="tab-content">
					Applicants are to choose or specify their preferred payment plan during application.
				</div>
			</div>
		</div>
	);
}



