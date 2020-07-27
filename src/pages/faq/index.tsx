import React from "react";
import Layout from "../../layout";

import "./index.scss";
import Tab from './tab';

export default function Faq() {

	return (
		<Layout name="FAQ">
			<main className="inner-main">
				<div className="hero"></div>

				<div className="content application-form">
					<div className="apply-header">
						<h2 className="apply-text">
							Find <span style={{ color: "#58A75D" }}>answers</span>
						</h2>
					</div>
					<div className="wrapper">
						<Tab />
					</div>
				</div>
			</main>
		</Layout>
	);
}
