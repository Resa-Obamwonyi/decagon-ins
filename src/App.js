import "./App.css";
import Apply from "./pages/Apply";
import Testimonials from "./pages/Testimonials";
import Home from "./pages/Home";
import Faq from "./pages/Faq";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Program from "./pages/Program";



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/apply" component={Apply} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/faq" component={Faq} />
          <Route path="/program" component={Program} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
