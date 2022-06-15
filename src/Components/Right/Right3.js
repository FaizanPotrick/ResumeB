import React, { useContext } from "react";
import Context from "../../Context";
import { useParams } from "react-router-dom";

function Right3() {
  const params = useParams();
  const context = useContext(Context);
  const {
    fname,
    lname,
    profession,
    profession_description,
    email,
    phone,
    city,
    country,
    linkedIn,
    github,
    skill1,
    skill2,
    skill3,
    skill4,
    skill5,
    skill6,
    skill7,
    skill8,
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
    datefrom3,
    dateto1,
    dateto2,
    dateto3,
    degree,
    university,
    description11,
    description12,
    description13,
    description14,
    description21,
    description22,
    description23,
    description24,
    description31,
    description32,
    description33,
    description34,
    color,
    wcounts,
  } = context[0];
  return (
    <div className="bg-white mx-2 my-4 text-dark d-flex justify-content-center align-items-center">
      <div className="shadow-lg" id="template" style={{ width: "800px" }}>
        <section className="p-5 pb-2 m-0">
          <h1 className={`d-flex text-${color} mb-4 m-0 p-0 fw-bolder`}>
            {fname === "" ? "John" : fname} {lname === "" ? "Doe" : lname}
          </h1>
          <h5 className="m-0 my-1 fw-bold ">
            {profession === "" ? "Business Develpment Manager" : profession}
          </h5>
          <div className="m-0 mb-1">
            {profession_description === ""
              ? " Professional Lorem ipsum dolor sit amet, consectetur adipisicingelit Nesciunt porro consectetur libero"
              : profession_description}
          </div>
        </section>
        <hr className={`m-0 text-${color}`} />
        <hr className={`m-0 text-${color}`} />
        <div className="px-5 d-flex">
          <div className="p-0 mt-3">
            <section className="d-flex justify-content-start align-items-start flex-column">
              <div className=" my-2 p-0 d-flex  fw-lighter">
                <div className={`text-${color} mx-1`}>
                  <ion-icon name="mail-outline"></ion-icon>
                </div>
                <div>{email === "" ? "jhon.doe@gmail.com" : email}</div>
              </div>
              <div className=" my-2  p-0 d-flex fw-lighter">
                <div className={`text-${color} mx-1`}>
                  <ion-icon name="call-outline"></ion-icon>
                </div>
                <div>{phone === "" ? "202-555-0166" : phone}</div>
              </div>
              <div className=" d-flex my-2  p-0 fw-lighter">
                <div className={`text-${color} mx-1`}>
                  <ion-icon name="location-outline"></ion-icon>
                </div>
                <div>
                  {city === "" ? "New York" : city},
                  {country === "" ? "USA" : country}
                </div>
              </div>
              <div className=" my-2 p-0 d-flex fw-lighter">
                <div className={`text-${color} mx-1`}>
                  <ion-icon name="logo-linkedIn"></ion-icon>
                </div>
                <div>{linkedIn === "" ? "linkedin.com" : linkedIn}</div>
              </div>
              <div className=" my-2  p-0 d-flex fw-lighter">
                <div className={`text-${color} mx-1`}>
                  <ion-icon name="logo-github"></ion-icon>
                </div>
                <div> {github === "" ? "github.com" : github}</div>
              </div>
            </section>

            <div className="my-3 ">
              <h5 className={`text-${color} fst-italic text-center fw-bold`}>
                SKILLS
              </h5>
              <hr className={`m-0 text-${color}`} />
              <hr className={`m-0 text-${color}`} />
              <div className="d-flex flex-column justify-content-start align-items-start my-3 ">
                <button className={`btn btn-${color} text-white m-1 btn-sm`}>
                  {skill1 === "" ? "SEO" : skill1}
                </button>
                <button className={`btn btn-${color} text-white m-1 btn-sm`}>
                  {skill2 === "" ? "Public Speaking" : skill2}
                </button>
                <button className={`btn btn-${color} text-white m-1 btn-sm`}>
                  {skill3 === "" ? "Negotiation" : skill3}
                </button>
                <button className={`btn btn-${color} text-white m-1 btn-sm`}>
                  {skill4 === "" ? "Decision Making" : skill4}
                </button>
                <button className={`btn btn-${color} text-white m-1 btn-sm`}>
                  {skill5 === "" ? "Research & Strategy" : skill5}
                </button>
                <button className={`btn btn-${color} text-white m-1 btn-sm`}>
                  {skill6 === "" ? "Emotional Intelligence" : skill6}
                </button>
                <button className={`btn btn-${color} text-white m-1 btn-sm`}>
                  {skill7 === "" ? "Outbound Marketing" : skill7}
                </button>
                <button className={`btn btn-${color} text-white m-1 btn-sm`}>
                  {skill8 === "" ? "Email Marketing" : skill8}
                </button>
              </div>
            </div>
          </div>
          <div className="ps-5">
            <div className="my-3 ">
              <h5 className={`text-${color} fst-italic  fw-bold`}>
                {params.id[0] === "S" ? "PROJECTS" : "WORK EXPERINCE"}
              </h5>
              <div className="my-1">
                <h5 className="m-0 mb-1 p-0 fw-bold">
                  {company1 === "" ? "Business Development Manager" : company1}
                </h5>
                {params.id[0] === "S" ? (
                  ""
                ) : (
                  <h6 className="m-0 p-0">
                    {title1 === "" ? "AirState Solutions" : title1}
                  </h6>
                )}
                <div className="d-flex justify-content-between m-0 p-0">
                  <div className="fw-lighter d-flex">
                    {datefrom1 === "" ? "2014-09" : datefrom1} /{" "}
                    {dateto1 === "" ? "2017-06" : dateto1}
                  </div>
                  {params.id[0] === "S" ? (
                    ""
                  ) : (
                    <div className="fw-lighter d-flex">
                      {city1 === "" ? "New York" : city1},
                      {country1 === "" ? "USA" : country1}
                    </div>
                  )}
                </div>
                <div className="m-0 p-0">
                  <div className="m-0 p-0 d-flex">
                    <code className="fs-5 m-0 p-0">&#x2015;</code>
                    &#xa0;&#xa0;
                    <div>
                      {description11 === ""
                        ? "Successfully Managed."
                        : description11}
                    </div>
                  </div>
                  <div className="m-0 p-0 d-flex">
                    <code className="fs-5 m-0 p-0">&#x2015;</code>
                    &#xa0;&#xa0;
                    <div>
                      {description12 === ""
                        ? "Developed and Implemented new Marketing."
                        : description12}
                    </div>
                  </div>
                  <div className="m-0 p-0 d-flex">
                    <code className="fs-5 m-0 p-0">&#x2015;</code>
                    &#xa0;&#xa0;
                    <div>
                      {description13 === ""
                        ? "Improve the processes and customer service."
                        : description13}
                    </div>
                  </div>
                  <div className="m-0 p-0 d-flex">
                    <code className="fs-5 m-0 p-0">&#x2015;</code>
                    &#xa0;&#xa0;
                    <div>
                      {description14 === ""
                        ? "Implementing a new Loyalty program."
                        : description14}
                    </div>
                  </div>
                </div>
              </div>
              {wcounts === 1 && (
                <div className="my-3">
                  <h5 className="m-0 mb-1 p-0 fw-bold">
                    {company2 === ""
                      ? "Business Development Manager"
                      : company2}
                  </h5>
                  {params.id[0] === "S" ? (
                    ""
                  ) : (
                    <h6 className="m-0 p-0">
                      {title2 === "" ? "AirState Solutions" : title2}
                    </h6>
                  )}
                  <div className="d-flex justify-content-between m-0 p-0">
                    <div className="fw-lighter d-flex">
                      {datefrom2 === "" ? "2014-09" : datefrom2},
                      {dateto2 === "" ? "2017-06" : dateto2}
                    </div>
                    {params.id[0] === "S" ? (
                      ""
                    ) : (
                      <div className="fw-lighter d-flex">
                        <div>{city2 === "" ? "Chicago" : city2}</div>,
                        <div>{country2 === "" ? "USA" : country2}</div>
                      </div>
                    )}
                  </div>
                  <div className="m-0 p-0">
                    <div className="m-0 p-0 d-flex">
                      <code className="fs-5 m-0 p-0">&#x2015;</code>
                      &#xa0;&#xa0;
                      <div>
                        {description21 === ""
                          ? "Successfully Managed."
                          : description21}
                      </div>
                    </div>
                    <div className="m-0 p-0 d-flex">
                      <code className="fs-5 m-0 p-0">&#x2015;</code>
                      &#xa0;&#xa0;
                      <div>
                        {description22 === ""
                          ? "Developed and Implemented new Marketing."
                          : description22}
                      </div>
                    </div>
                    <div className="m-0 p-0 d-flex">
                      <code className="fs-5 m-0 p-0">&#x2015;</code>
                      &#xa0;&#xa0;
                      <div>
                        {description23 === ""
                          ? "Improve the processes and customer service."
                          : description23}
                      </div>
                    </div>
                    <div className="m-0 p-0 d-flex">
                      <code className="fs-5 m-0 p-0">&#x2015;</code>
                      &#xa0;&#xa0;
                      <div>
                        {description24 === ""
                          ? "Implementing a new Loyalty program."
                          : description24}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="my-3">
              <h5 className={`text-${color} fst-italic fw-bold`}>EDUCATION</h5>
              <div>
                <h5 className="m-0 mb-1 p-0 fw-bold">
                  {degree === ""
                    ? "MSc in Economics and Business Administration"
                    : degree}
                </h5>
                <h6 className="m-0 p-0">
                  {university === "" ? "The University of Chicago" : university}
                </h6>
                <div className="fw-lighter m-0 p-0 d-flex">
                  {datefrom3 === "" ? "2008-09" : datefrom3} /{" "}
                  {dateto3 === "" ? "2010-06" : dateto3}
                </div>
              </div>
            </div>
            <div className="my-3 pb-4">
              <h5 className={`text-${color} fst-italic fw-bold`}>
                ORGANIZATION
              </h5>
              <div className="m-0 p-0">
                <div className="m-0 p-0 d-flex">
                  <code className="fs-5 m-0 p-0">&#x2015;</code>
                  &#xa0;&#xa0;
                  <div>
                    {description31 === ""
                      ? "Successfully Managed."
                      : description31}
                  </div>
                </div>
                <div className="m-0 p-0 d-flex">
                  <code className="fs-5 m-0 p-0">&#x2015;</code>
                  &#xa0;&#xa0;
                  <div>
                    {description32 === ""
                      ? "Developed and Implemented new Marketing."
                      : description32}
                  </div>
                </div>
                <div className="m-0 p-0 d-flex">
                  <code className="fs-5 m-0 p-0">&#x2015;</code>
                  &#xa0;&#xa0;
                  <div>
                    {description33 === ""
                      ? "Improve the processes and customer service."
                      : description33}
                  </div>
                </div>
                <div className="m-0 p-0 d-flex">
                  <code className="fs-5 m-0 p-0">&#x2015;</code>
                  &#xa0;&#xa0;
                  <div>
                    {description34 === ""
                      ? "Implementing a new Loyalty program."
                      : description34}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Right3;
