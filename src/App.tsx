import React, {Suspense} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Apply from "./pages/Apply";
import Update from "./pages/Update";
import Testimonials from "./pages/Testimonials";
import Home from "./pages/Home";
import Faq from "./pages/Faq";
import Program from "./pages/Program";
import "./App.css";

function App() {
    return (
        <Router>
            <div className="App">
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/apply" component={Apply}/>
                        <Route path="/update" component={Update}/>
                        <Route path="/testimonials" component={Testimonials}/>
                        <Route path="/faq" component={Faq}/>
                        <Route path="/program" component={Program}/>
                    </Switch>
                </Suspense>
            </div>
        </Router>
    );
}

export default App;
