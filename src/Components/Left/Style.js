import React, { useContext } from "react";
import Context from "../../Context";

function Style() {
  const context = useContext(Context);
  const buttonColor = context[2];
  return (
    <section className="flex-column">
      <h1 className="text-center pb-5">Style</h1>
      <div className="d-flex  justify-content-between">
        <button
          className="btn btn-info btn-lg shadow"
          onClick={() =>{buttonColor('info')}}
          style={{ width: "50px", height: "50px" }}
        ></button>
        <button
          className="btn btn-dark btn-lg shadow"
          onClick={() =>{buttonColor('dark')}}
          style={{ width: "50px", height: "50px" }}
        ></button>
        <button
          className="btn btn-danger btn-lg shadow"
          onClick={() =>{buttonColor('danger')}}
          style={{ width: "50px", height: "50px" }}
        ></button>
        <button
          className="btn btn-success btn-lg shadow"
          onClick={() =>{buttonColor('success')}}
          style={{ width: "50px", height: "50px" }}
        ></button>
        <button
          className="btn btn-secondary btn-lg shadow"
          onClick={() =>{buttonColor('secondary')}}
          style={{ width: "50px", height: "50px" }}
        ></button>
        <button
          className="btn btn-primary btn-lg shadow"
          onClick={() =>{buttonColor('primary')}}
          style={{ width: "50px", height: "50px" }}
        ></button>
      </div>
    </section>
  );
}

export default Style;
