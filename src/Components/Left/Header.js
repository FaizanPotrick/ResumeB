import React, { useContext } from "react";
import Context from "../../Context";

function Header() {
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
  } = context[0];
  const onChange = context[1];
  return (
    <section className="flex-column">
      <h1 className="text-center pb-5">Header</h1>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="heading_name" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control my-2"
            name="fname"
            value={fname}
            id="heading_name"
            placeholder="e.g. John"
            onChange={onChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="heading_name" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control my-2"
            name="lname"
            value={lname}
            id="heading_name"
            placeholder="e.g. Doe"
            onChange={onChange}
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="heading_profession" className="form-label">
            Profession
          </label>
          <input
            type="text"
            className="form-control my-2"
            name="profession"
            value={profession}
            id="heading_profession"
            placeholder="e.g. Business Develpment Manager"
            onChange={onChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="heading_description" className="form-label">
            Description
          </label>
          <textarea
            type="text"
            className="form-control my-2"
            name="profession_description"
            value={profession_description}
            id="heading_description"
            placeholder="e.g. Professional Lorem ipsum dolor sit"
            onChange={onChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="heading_email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control my-2"
            name="email"
            value={email}
            id="heading_email"
            placeholder="e.g. john.doe@gmail.com"
            onChange={onChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="heading_phone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control my-2"
            name="phone"
            value={phone}
            id="heading_phone"
            placeholder="e.g. 202-555-0166"
            onChange={onChange}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="heading_city" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control my-2"
            name="city"
            value={city}
            id="heading_city"
            placeholder="e.g. New York"
            onChange={onChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="heading_country" className="form-label">
            Country
          </label>
          <input
            type="text"
            className="form-control my-2"
            name="country"
            value={country}
            id="heading_country"
            placeholder="e.g. USA"
            onChange={onChange}
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="heading_linkedIn" className="form-label">
            LinkedIn
          </label>
          <input
            type="text"
            className="form-control my-2"
            name="linkedIn"
            value={linkedIn}
            id="heading_linkedIn"
            placeholder="e.g. linkedin.com"
            onChange={onChange}
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="heading_github" className="form-label">
            Github
          </label>
          <input
            type="text"
            className="form-control my-2"
            name="github"
            value={github}
            id="heading_github"
            placeholder="e.g. github.com"
            onChange={onChange}
          />
        </div>
      </form>
    </section>
  );
}

export default Header;
