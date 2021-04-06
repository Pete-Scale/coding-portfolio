import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/home'
import Contact from  './pages/contact'
import Portfolio from './pages/portfolio'
import Nav from './components/Nav'

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
