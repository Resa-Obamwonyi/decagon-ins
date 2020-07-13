import React from 'react'
import logo from "../../images/logo-decabelle.png"
const Footer = () => {
  return (
		<footer>
			<div className="content">
				<div className="footer-img">
					<img src={logo} alt="logo" />
				</div>
				<p>copyright &copy; 2020. All rights reserved</p>
			</div>
		</footer>
	);
}

export default Footer
