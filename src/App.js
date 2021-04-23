import React from 'react';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import Nav from './components/Nav';
import About from './components/About/About'
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import CreatePlan from './components/CreatePlan/CreatePlan';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Router>
        <Switch>
          <Route exact path="/">{Home}</Route>
          <Route exact path="/about">{About}</Route>
          <Route exact path="/createplan">{CreatePlan}</Route>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
