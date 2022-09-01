import React from "react";
import Template from "./Components/Template";
import Features from "./Features";
import About from "./About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import LandingPage from "./LandingPage";
import Cards from "./Cards";
import logo from "./Components/logo.jpeg";

function App() {
  return (
    <Router>
      <nav
        className="nav d-flex ps-5 align-items-center"
        style={{ height: "10vh", background: "#6D4Fc4" }}
      >
        <div className="d-flex ">
          <img src={logo} alt="" width="60px" />
          <div className="fs-1 text-white fw-bold">ResumeB</div>
        </div>
        <Link
          className="nav-link fs-4 fw-bold text-white p-0 ms-5 px-2 rounded"
          to="/"
        >
          Home
        </Link>
        <Link
          className="nav-link fs-4 fw-bold text-white p-0 ms-4 px-2 rounded"
          to="/template"
        >
          Templates
        </Link>
      </nav>
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
