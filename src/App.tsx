import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Apply from "../src/pages/apply"
import Apply from "../src/pages/new-apply"
import Update from "../src/pages/update"
import NotFound from "../src/pages/PageNotFound"
import FAQ from "../src/pages/faq"
import Home from "../src/pages/home"
import STEM from "./pages/science-maths"
import Decabelle from "./pages/decabelle"
import Program from "./pages/program"
import Decadev from "./pages/decadev"
import SuccessPage from "./pages/success"
import Testimonials from "./pages/testimonials"
import "../node_modules/jquery"
import "./css/styles.scss"

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/stem" component={STEM} />
				<Route exact path="/decabelle" component={Decabelle} />
				<Route exact path="/apply" component={Apply} />
				<Route exact path="/update" component={Update} />
				<Route exact path="/faq" component={FAQ} />
				<Route exact path="/program" component={Program} />
				<Route exact path="/decadev" component={Decadev} />
				<Route exact path="/testimonials" component={Testimonials} />
				<Route exact path="/success" component={SuccessPage} />
				<Route path="*" component={NotFound} />
			</Switch>
		</Router>
	);
}

export default App;
