import React from "react";

import NavBar from "../components/navbar";
import Footer from "../components/footer";

const index = (props: any) => {
	return (
		<>
			<NavBar />
			{props.children}
			<Footer />
		</>
	);
};

export default index;




