import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Apply from "../src/pages/apply"
import FAQ from "../src/pages/faq"
import Home from "../src/pages/home"
import "../node_modules/jquery"
import "./css/styles.scss"

function App() {
	return (
		<Router>
			<Route exact path="/" component={Home} />
			<Route exact path="/apply" component={Apply} />
			<Route exact path="/faq" component={FAQ} />
		</Router>
	);
}

export default App;
