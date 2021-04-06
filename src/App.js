import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/home'
import Contact from  './pages/contact'
import Portfolio from './pages/portfolio'
import Nav from './components/Nav'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/contact">
          <Header title="Contact" />
          <Contact />
        </Route>
        <Route exact path="/portfolio">
          <Header title="Portfolio" />
          <Portfolio />
        </Route>
        <Route path="/">
          <Header title="About Me" />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
