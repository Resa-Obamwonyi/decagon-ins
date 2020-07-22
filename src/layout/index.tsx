import React from "react";

import NavBar from "../components/navbar";
import Footer from "../components/footer";

const index = (props: any) => {
	return (
		<>
			<NavBar class={props.class} />
			{props.children}
			<Footer />
		</>
	);
};

export default index;




