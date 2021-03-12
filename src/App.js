import logo from './logo.svg';
import Footer from './components/Footer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Contact from './components/Contact'
import Material from './components/Material'
import AboutUs from './components/AboutUs'
import Projects from './components/Projects'
import Services from './components/Services'
import classes from './App.module.css'
import LandingImage from './components/LandingImage/LandingImage'
function App() {
  return (
    <div className={classes.App}>
      <Router>
        <Header/>
        <LandingImage/>
        <AboutUs/>
        <Services/>
        <Projects/>
        <Material/>
        <Contact/>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
