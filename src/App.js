import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/home/home'
import Contact from  './pages/contact/contact'
import Portfolio from './pages/portfolio/portfolio'
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import './App.css'

function App() {
  return (
    <Router>
      <Nav />
      <main class="container my-4">
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
      </main>
    </Router>
  );
}

export default App;
