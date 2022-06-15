import React, { useContext } from "react";
import Context from "../../Context";
import { useParams } from "react-router-dom";

function WorkExperience() {
  const params = useParams();
  const context = useContext(Context);
  const {
    company1,
    company2,
    title1,
    title2,
    city1,
    city2,
    country1,
    country2,
    datefrom1,
    datefrom2,
    dateto1,
    dateto2,
    description11,
    description12,
    description13,
    description14,
    description21,
    description22,
    description23,
    description24,
    wcounts,
  } = context[0];
  const onChange = context[1];
  const { Wadd, Wremove } = context[3];
  return (
    <section className="flex-column">
      <h1 className="text-center pb-5">
        {params.id[0] === "S" ? "Projects" : "Work Expeience"}
      </h1>
      <div>
        <h3>{params.id[0] === "S" ? "Project 1" : "Company 1"}</h3>
        <form className="row g-3 py-4">
          <div className={`col-md-${params.id[0] === "S" ? "12" : "6"}`}>
            <label htmlFor="company1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control my-2"
              name="company1"
              value={company1}
              id="company1"
              placeholder="e.g. Business Development Manager"
              onChange={onChange}
            />
          </div>
          {params.id[0] === "S" ? (
            ""
          ) : (
            <div className="col-md-6">
              <label htmlFor="title1" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control my-2"
                name="title1"
                value={title1}
                id="title1"
                placeholder="e.g. AirState Solutions"
                onChange={onChange}
              />
            </div>
          )}
          <div className="col-md-6">
            <label className="form-label">Date</label>
            <input
              type="month"
              className="form-control my-2"
              name="datefrom1"
              value={datefrom1}
              onChange={onChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">&#xa0;</label>
            <input
              type="month"
              className="form-control my-2"
              name="dateto1"
              value={dateto1}
              onChange={onChange}
            />
          </div>
          {params.id[0] === "S" ? (
            ""
          ) : (
            <div className="col-md-6">
              <label htmlFor="city1" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control my-2"
                name="city1"
                value={city1}
                id="city1"
                placeholder="e.g. New York"
                onChange={onChange}
              />
            </div>
          )}
          {params.id[0] === "S" ? (
            ""
          ) : (
            <div className="col-md-6">
              <label htmlFor="country1" className="form-label">
                Country
              </label>
              <input
                type="text"
                className="form-control my-2"
                name="country1"
                value={country1}
                id="country1"
                placeholder="e.g. USA"
                onChange={onChange}
              />
            </div>
          )}
          <div className="col-md-12">Description</div>
          <div className="col-md-12">
            <textarea
              type="text"
              className="form-control my-2"
              name="description11"
              value={description11}
              placeholder="e.g. Successfully Managed."
              onChange={onChange}
            />
          </div>
          <div className="col-md-12">
            <textarea
              type="text"
              className="form-control my-2"
              name="description12"
              value={description12}
              placeholder="e.g. Developed and Implemented new Marketing."
              onChange={onChange}
            />
          </div>
          <div className="col-md-12">
            <textarea
              type="text"
              className="form-control my-2"
              name="description13"
              value={description13}
              placeholder="e.g. Improve the processes and customer service."
              onChange={onChange}
            />
          </div>
          <div className="col-md-12">
            <textarea
              type="text"
              className="form-control my-2"
              name="description14"
              value={description14}
              placeholder="e.g. Implementing a new Loyalty program.
              "
              onChange={onChange}
            />
          </div>
        </form>
      </div>
      {wcounts === 1 && (
        <div>
          <h3>{params.id[0] === "S" ? "Project 2" : "Company 2"}</h3>
          <form className="row g-3 py-4">
            <div className={`col-md-${params.id[0] === "S" ? "12" : "6"}`}>
              <label htmlFor="company2" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control my-2"
                name="company2"
                value={company2}
                id="company2"
                placeholder="e.g. Business Development Manager"
                onChange={onChange}
              />
            </div>
            {params.id[0] === "S" ? (
              ""
            ) : (
              <div className="col-md-6">
                <label htmlFor="title2" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control my-2"
                  name="title2"
                  value={title2}
                  id="title2"
                  placeholder="e.g. AirState Solutions"
                  onChange={onChange}
                />
              </div>
            )}
            <div className="col-md-6">
              <label className="form-label">Date</label>
              <input
                type="month"
                className="form-control my-2"
                name="datefrom2"
                value={datefrom2}
                onChange={onChange}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">&#xa0;</label>
              <input
                type="month"
                className="form-control my-2"
                name="dateto2"
                value={dateto2}
                onChange={onChange}
              />
            </div>
            {params.id[0] === "S" ? (
              ""
            ) : (
              <div className="col-md-6">
                <label htmlFor="city2" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control my-2"
                  name="city2"
                  value={city2}
                  id="city2"
                  placeholder="e.g. Chicago"
                  onChange={onChange}
                />
              </div>
            )}
            {params.id[0] === "S" ? (
              ""
            ) : (
              <div className="col-md-6">
                <label htmlFor="country2" className="form-label">
                  Country
                </label>
                <input
                  type="text"
                  className="form-control my-2"
                  name="country2"
                  value={country2}
                  id="country2"
                  placeholder="e.g. USA"
                  onChange={onChange}
                />
              </div>
            )}
            <div className="col-md-12">Description</div>
            <div className="col-md-12">
              <textarea
                type="text"
                className="form-control my-2"
                name="description21"
                value={description21}
                placeholder="e.g. Successfully Managed."
                onChange={onChange}
              />
            </div>
            <div className="col-md-12">
              <textarea
                type="text"
                className="form-control my-2"
                name="description22"
                value={description22}
                placeholder="e.g. Developed and Implemented new Marketing."
                onChange={onChange}
              />
            </div>
            <div className="col-md-12">
              <textarea
                type="text"
                className="form-control my-2"
                name="description23"
                value={description23}
                placeholder="e.g. Improve the processes and customer service."
                onChange={onChange}
              />
            </div>
            <div className="col-md-12">
              <textarea
                type="text"
                className="form-control my-2"
                name="description24"
                value={description24}
                placeholder="e.g. Implementing a new Loyalty program.
                "
                onChange={onChange}
              />
            </div>
          </form>
        </div>
      )}
      <div className="d-flex justify-content-center align-items-center">
        {wcounts === 0 && (
          <button
            className="btn text-white bg-dark justify-content-center fs-4 align-items-center btn-sm  px-2 py-0 shadow"
            onClick={Wadd}
          >
            <ion-icon name="add-outline"></ion-icon>
          </button>
        )}
        {wcounts === 1 && (
          <button
            className="btn text-white bg-dark justify-content-center fs-4 align-items-center btn-sm  px-2 py-0 shadow"
            onClick={Wremove}
          >
            <ion-icon name="remove-outline"></ion-icon>
          </button>
        )}
      </div>
    </section>
  );
}

export default WorkExperience;
