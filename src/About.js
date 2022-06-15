import React from "react";
import "./App.css";

function About() {
  return (
    <section
      className=" d-flex justify-content-center align-items-center"
      style={{ width: "100%", height: "60vh", background: "#6D4Fc4" }}
    >
      <div className=" text-white" style={{ padding: "4rem 4rem" }}>
        <h1 className="bold fs-1">Professional templates</h1>
        <p className="fs-5">
          Pick one from our many attractive templates, fill in your skills and
          experiences
          <p>
            and you are all set to go. Our completely customizable designs allow
            you to
            <p>
              change font, colors, layout and images, making it a reflection of
              you, with great ease.
            </p>
          </p>
        </p>
        <h1 className="bold fs-1 pt-5">Completely secure</h1>
        <p className="fs-5">
          Create your resume without any of the usual hassle of signing up and
          creating an account.
          <p>
            We do not save your data and your privacy is absolutely guaranteed.
          </p>
        </p>
      </div>
      <div className="pe-5">
        <img
          src="about.jpeg"
          width="550px"
          height="400px"
          alt="home img"
          style={{ borderRadius: "500px" }}
        />
      </div>
    </section>
  );
}

export default About;
