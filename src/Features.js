import React from "react";
import "./App.css";

function Features() {
  return (
    <section className="d-flex align-items-center justify-content-center my-5">
      <div
        className="row justify-content-center align-items-start my-5"
        style={{ fontFamily: "Nunito, sans-serif" }}
      >
        <div className="col-md-4">
          <div
            className="rounded mx-3 position-relative"
            style={{
              width: "25rem",
              height: "26rem",
              boxShadow:
                "0px 0px 3.9px rgba(0, 0, 0, 0.037),0px 0px 9.8px rgba(0, 0, 0, 0.053),0px 0px 20px rgba(0, 0, 0, 0.067),0px 0px 41.2px rgba(0, 0, 0, 0.083),0px 0px 113px rgba(0, 0, 0, 0.12)",
            }}
          >
            <div className="position-absolute top-0 start-0 translate-middle badge rounded bg-warning fs-5">
              Step 1
            </div>
            <img src="step1.svg" className="card-img-top" alt="..." />
            <div className="">
              <h3
                className="text-center mt-2 fw-bold"
                style={{ color: "#6d4fc4" }}
              >
                Choose the template
              </h3>
              <p className="text-center mt-3" style={{ fontSize: "1.1rem" }}>
                Pick any from our beautiful templates that are designed to
                impress. You can personalize it and give it your own unique
                touch.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="rounded mx-3 position-relative"
            style={{
              width: "25rem",
              height: "26rem",
              boxShadow:
                "0px 0px 3.9px rgba(0, 0, 0, 0.037),0px 0px 9.8px rgba(0, 0, 0, 0.053),0px 0px 20px rgba(0, 0, 0, 0.067),0px 0px 41.2px rgba(0, 0, 0, 0.083),0px 0px 113px rgba(0, 0, 0, 0.12)",
            }}
          >
            <div className="position-absolute top-0 start-0 translate-middle badge rounded bg-warning fs-5">
              Step 2
            </div>
            <img src="step2.svg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h3
                className="text-center mt-3 fw-bold"
                style={{ color: "#6d4fc4" }}
              >
                Fill in your details
              </h3>
              <p className="text-center mt-3" style={{ fontSize: "1.1rem" }}>
                Fill in your skills, previous experiences and educational
                qualifications.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="rounded mx-3 position-relative"
            style={{
              width: "25rem",
              height: "26rem",
              boxShadow:
                "0px 0px 3.9px rgba(0, 0, 0, 0.037),0px 0px 9.8px rgba(0, 0, 0, 0.053),0px 0px 20px rgba(0, 0, 0, 0.067),0px 0px 41.2px rgba(0, 0, 0, 0.083),0px 0px 113px rgba(0, 0, 0, 0.12)",
            }}
          >
            <div className="position-absolute top-0 start-0 translate-middle badge rounded bg-warning fs-5">
              Step 3
            </div>
            <img src="step3.svg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h3
                className="text-center mt-3 fw-bold"
                style={{ color: "#6d4fc4" }}
              >
                Download pdf
              </h3>
              <p className="text-center mt-3" style={{ fontSize: "1.1rem" }}>
                Download the remarkable resume you have created and send it to
                your potential employers with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
