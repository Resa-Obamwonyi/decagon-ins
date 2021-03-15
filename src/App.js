import "./App.css";
import Apply from "./pages/Apply";
import Testimonials from "./pages/Testimonials";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* <Route path="/" component={Home} exact/> */}
          <Route path="/apply" component={Apply} />
          <Route path="/testimonials" component={Testimonials} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
