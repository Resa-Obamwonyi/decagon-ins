import "./App.css";
import Apply from "./pages/Apply";
import Testimonials from "./pages/Testimonials";
import Faq from "./pages/Faq";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* <Route path="/" component={Home} exact/> */}
          <Route path="/apply" component={Apply} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/faq" component={Faq} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
