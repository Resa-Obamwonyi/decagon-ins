import "./App.css";
import Testimonials from "./pages/Testimonials";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/testimonials" component={Testimonials} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
