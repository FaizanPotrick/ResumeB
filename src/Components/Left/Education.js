import React, { useContext } from "react";
import Context from "../../Context";

function Education() {
  const context = useContext(Context);
  const { datefrom3, dateto3, degree, university } = context[0];
  const onChange = context[1];
  return (
    <section className="flex-column">
      <h1 className="text-center pb-5">Education</h1>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="degree" className="form-label">
            Degree
          </label>
          <input
            type="text"
            className="form-control my-2"
            name="degree"
            value={degree}
            id="degree"
            placeholder="e.g. MSc in Economics and Business Administration"
            onChange={onChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="university" className="form-label">
            University
          </label>
          <input
            type="text"
            className="form-control my-2"
            name="university"
            value={university}
            id="university"
            placeholder="e.g. The University of Chicago"
            onChange={onChange}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Date</label>
          <input
            type="month"
            className="form-control my-2"
            name="datefrom3"
            value={datefrom3}
            onChange={onChange}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">&#xa0;</label>
          <input
            type="month"
            className="form-control my-2"
            name="dateto3"
            value={dateto3}
            placeholder="Date to"
            onChange={onChange}
          />
        </div>
      </form>
    </section>
  );
}

export default Education;
