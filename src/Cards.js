import React from "react";
import { Link } from "react-router-dom";

function Cards() {
  const data = [
    {
      title: "Student Section",
      Description: "No experience? No problem!",
      link1: ["S1", "S2", "S3", "S4"],
      link2: ["S5", "S6", "S7", "S8"],
    },
    {
      title: "Experience Section",
      Description: "Experienced one!",
      link1: ["E1", "E2", "E3", "E4"],
      link2: ["E5", "E6", "E7", "E8"],
    },
  ];
  return (
    <div className="rect1">
      {data.map((e) => {
        return (
          <div className="pt-5" key={e.title}>
            <div className="container font">
              <h2>{e.title}</h2>
              <p>{e.Description}</p>
            </div>
            <div className="pb-3 d-flex container justify-content-around align-items-start">
              {e.link1.map((i) => {
                return (
                  <Link
                    to={`/template/${i}`}
                    type="button"
                    className="btn shadow mx-2 p-0 rounded zoom"
                    style={{ width: "15vw" }}
                    key={i}
                  >
                    <img
                      src={`${i}.jpg`}
                      className="card-img rounded"
                      alt="..."
                    />
                  </Link>
                );
              })}
            </div>
            <div className="pb-3 d-flex container justify-content-around align-items-start">
              {e.link2.map((i) => {
                return (
                  <Link
                    to={`/template/${i}`}
                    type="button"
                    className="btn shadow mx-2 p-0 rounded zoom"
                    style={{ width: "15vw" }}
                    key={i}
                  >
                    <img
                      src={`${i}.jpg`}
                      className="card-img rounded"
                      alt="..."
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
