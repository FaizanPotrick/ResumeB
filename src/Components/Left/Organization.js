import React, { useContext } from "react";
import Context from "../../Context";

function Organization() {
  const context = useContext(Context);
  const { description31, description32, description33, description34 } =
    context[0];
  const onChange = context[1];
  return (
    <section className="flex-column">
      <h1 className="text-center pb-5">Organization</h1>
      <form className="form-row m-2">
        <div className="col-md-12">
          <textarea
            type="text"
            className="form-control my-2"
            name="description31"
            value={description31}
            placeholder="e.g. Successfully Managed."
            onChange={onChange}
          />
        </div>
        <div className="col-md-12">
          <textarea
            type="text"
            className="form-control my-2"
            name="description32"
            value={description32}
            placeholder="e.g. Developed and Implemented new Marketing."
            onChange={onChange}
          />
        </div>
        <div className="col-md-12">
          <textarea
            type="text"
            className="form-control my-2"
            name="description33"
            value={description33}
            placeholder="e.g. Improve the processes and customer service."
            onChange={onChange}
          />
        </div>
        <div className="col-md-12">
          <textarea
            type="text"
            className="form-control my-2"
            name="description34"
            value={description34}
            placeholder="e.g. Implementing a new Loyalty program."
            onChange={onChange}
          />
        </div>
      </form>
    </section>
  );
}

export default Organization;
