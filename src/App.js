import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import Contact from  './pages/contact/contact'
import Portfolio from './pages/portfolio/portfolio'
import Home from './pages/home/home'
import FooterSpace from './components/FooterSpace/FooterSpace'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <Router>
      <Nav />
      <main className="container my-4">
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
        <FooterSpace />
        <Footer />
      </main>
    </Router>
  );
}

export default App;
