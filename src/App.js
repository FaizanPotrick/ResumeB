import React from "react";
import Template from "./Components/Template";
import Features from "./Features";
import About from "./About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./LandingPage";
import Navbar from "./Navbar";
import Cards from "./Cards";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <LandingPage />
          <About />
          <Features />
        </Route>
        <Route exact path="/template">
          <Cards />
        </Route>
        <Route exact path="/template/:id">
          <Template />
        </Route>
      </Switch>
      <footer
        className="text-center py-3 text-light"
        style={{ backgroundColor: "#6d4fc4" }}
      >
        © 2022 Copyright ResumeB
      </footer>
    </Router>
  );
}

export default App;
