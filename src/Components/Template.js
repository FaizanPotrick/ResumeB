import React, { useState, useEffect } from "react";
import Header from "./Left/Header";
import Skills from "./Left/Skills";
import WorkExperience from "./Left/WorkExperience";
import Education from "./Left/Education";
import Organization from "./Left/Organization";
import Style from "./Left/Style";
import { useParams } from "react-router-dom";
import * as Right from "./Right/Right";
import Context from "../Context";

function Template() {
  const params = useParams();
  const [target, setTarget] = useState(() => {
    let savedTemplate = localStorage.getItem("template");
    if (savedTemplate) {
      return JSON.parse(savedTemplate);
    } else {
      return {
        fname: "",
        lname: "",
        profession: "",
        profession_description: "",
        email: "",
        phone: "",
        city: "",
        country: "",
        linkedIn: "",
        github: "",
        skill1: "",
        skill2: "",
        skill3: "",
        skill4: "",
        skill5: "",
        skill6: "",
        skill7: "",
        skill8: "",
        company1: "",
        company2: "",
        title1: "",
        title2: "",
        city1: "",
        city2: "",
        country1: "",
        country2: "",
        datefrom1: "",
        datefrom2: "",
        datefrom3: "",
        dateto1: "",
        dateto2: "",
        dateto3: "",
        degree: "",
        university: "",
        description11: "",
        description12: "",
        description13: "",
        description14: "",
        description21: "",
        description22: "",
        description23: "",
        description24: "",
        description31: "",
        description32: "",
        description33: "",
        description34: "",
        color: "primary",
        npcounts: 0,
        wcounts: 0,
      };
    }
  });
  const onChange = (e) => {
    const { value, name } = e.target;
    setTarget(() => {
      return {
        ...target,
        [name]: value,
      };
    });
  };
  if (target.npcounts !== 0 || target.wcounts !== 0) {
    if (target.fname === "") {
      localStorage.removeItem("template");
    }
  }
  useEffect(() => {
    localStorage.setItem("template", JSON.stringify(target));
  }, [target]);
  const buttonColor = (e) => {
    setTarget(() => {
      return { ...target, color: e };
    });
  };
  const Next = () => {
    setTarget(() => {
      return { ...target, npcounts: target.npcounts + 1 };
    });
  };
  const Previous = () => {
    setTarget(() => {
      return { ...target, npcounts: target.npcounts - 1 };
    });
  };
  const Wadd = () => {
    setTarget(() => {
      return { ...target, wcounts: 1 };
    });
  };
  const Wremove = () => {
    setTarget(() => {
      return { ...target, wcounts: 0 };
    });
  };
  const template = (e) => {
    const Card = Right[`Right${e}`];
    return <Card />;
  };
  const Print = () => {
    var printContents = document.getElementById("template").innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  };
  return (
    <Context.Provider
      value={[target, onChange, buttonColor, { Wadd, Wremove }]}
    >
      <div className="d-flex text-dark justify-content-around align-items-start">
        <div
          className="d-flex flex-column justify-content-center p-5 m-0 position-relative"
          style={{ width: "600px", height: "100%" }}
        >
          <button
            className="btn position-absolute border shadow rounded p-2 py-1 zoom ms-2"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Delete the Data"
            style={{ left: "0px", top: "20px" }}
            onClick={() => {
              if (
                window.confirm(
                  "Do want to Delete Data.\nIf yes, Please Click Ok"
                ) === true
              ) {
                localStorage.removeItem("template");
                window.location.reload();
              }
            }}
          >
            <i className="bi bi-trash fs-3"></i>
          </button>
          {target.npcounts === 0 && <Header />}
          {target.npcounts === 1 && <Skills />}
          {target.npcounts === 2 && <WorkExperience />}
          {target.npcounts === 3 && <Education />}
          {target.npcounts === 4 && <Organization />}
          {target.npcounts === 5 && <Style />}
          <div className="d-flex justify-content-between align-items-center pt-5">
            <button
              className="btn bg-dark text-white fs-5 btn-lg shadow"
              disabled={target.npcounts === 0}
              onClick={Previous}
            >
              Back
            </button>
            {target.npcounts !== 5 && (
              <button
                className="btn bg-dark text-white fs-5 btn-lg shadow "
                onClick={Next}
              >
                Next
              </button>
            )}
            {target.npcounts === 5 && (
              <button
                className="btn bg-dark text-white fs-5 btn-lg shadow"
                onClick={Print}
              >
                Print
              </button>
            )}
          </div>
        </div>
        {template(params.id[1])}
      </div>
    </Context.Provider>
  );
}

export default Template;
