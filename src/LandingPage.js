import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <section
      className="font d-flex align-items-center justify-content-center"
      style={{ height: "90vh", width: "100%" }}
    >
      <div
        className="container-fluid d-flex justify-content-center align-items-center shadow-lg position-relative"
        style={{
          width: "95%",
          height: "90%",
          borderRadius: "30px",
          overflow: "hidden",
        }}
      >
        <div
          className="position-absolute"
          style={{
            bottom: "0px",
            left: "0px",
            transform: "rotate(90deg)",
            zIndex: -1,
          }}
        >
          <svg height="500" width="500">
            <circle cx="400" cy="400" r="400" fill="#6D4Fc4" />
          </svg>
        </div>
        <div
          className="position-absolute"
          style={{
            bottom: "0px",
            left: "-20px",
            zIndex: -1,
          }}
        >
          <img src="landingleft.svg" alt="" width={"500px"} />
        </div>
        <div className="mb-5 pb-5">
          <h1 className="bold">Online Resume Builder</h1>
          <p className="fs-3 fw-light" style={{ maxWidth: "550px" }}>
            Effortlessly make a job-worthy resume and get hired faster
          </p>
          <Link
            to="/template"
            className="btn btn-lg fw-bold text-white my-3 shadow-lg start-now"
          >
            Start Now
          </Link>
        </div>

        <div
          className="position-absolute"
          style={{
            top: "0px",
            right: "0px",
            transform: "rotate(270deg)",
            zIndex: -1,
          }}
        >
          <svg height="150" width="150">
            <circle cx="100" cy="100" r="100" fill="#6D4Fc4" />
          </svg>
        </div>
        <div
          className="position-absolute"
          style={{ bottom: "0px", right: "0px", zIndex: -1 }}
        >
          <svg height="400" width="400">
            <circle cx="300" cy="300" r="300" fill="#6D4Fc4" />
          </svg>
        </div>
        <div
          className="position-absolute"
          style={{
            bottom: "-30px",
            right: "-30px",
            zIndex: -1,
          }}
        >
          <img src="landingright.svg" alt="" width={"350px"} />
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
