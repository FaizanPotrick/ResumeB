import React from "react";
import { Link } from "react-router-dom";
import logo from "./Components/logo.jpeg";

function Navbar() {
  return (
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
  );
}

export default Navbar;
