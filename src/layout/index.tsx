import React, {useEffect} from "react";

import fbPixelConfig from '../utils/fbPixelConfig';

import NavBar from "../components/navbar";
import Footer from "../components/footer";

export default (props: any) => {
	useEffect(() => {
		fbPixelConfig(`$props.name`)
}, [])
	return (
		<>
			<NavBar class={props.class} />
			{props.children}
			<Footer />
		</>
	);
};





