import React, { useContext } from "react";
import Context from "../../Context";

function Skills() {
  const context = useContext(Context);
  const { skill1, skill2, skill3, skill4, skill5, skill6, skill7, skill8 } =
    context[0];
  const onChange = context[1];
  return (
    <section className="flex-column">
      <h1 className="text-center pb-5">Skills</h1>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="1" className="form-label">
            Skill-1
          </label>
          <input
            type="text"
            className="form-control my-2"
            name="skill1"
            value={skill1}
            id="1"
            placeholder="e.g. SEO"
            onChange={onChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="2" className="form-label">
            Skill-2
          </label>
          <input
            type="text"
            className="form-control my-2"
            name="skill2"
            value={skill2}
            id="2"
            placeholder="e.g.Public Speaking"
            onChange={onChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="3" className="form-label">
            Skill-3
          </label>
          <input
            type="text"
            className="form-control my-2"
            name="skill3"
            value={skill3}
            id="3"
            placeholder="e.g. Negotiation"
            onChange={onChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="4" className="form-label">
            Skill-4
          </label>
          <input
            type="text"
            className="form-control my-2"
            name="skill4"
            value={skill4}
            id="4"
            placeholder="e.g. Decision Making"
            onChange={onChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="5" className="form-label">
            Skill-5
          </label>
          <input
            type="text"
            className="form-control my-2"
            name="skill5"
            value={skill5}
            id="5"
            placeholder="e.g. Research & Stategy"
            onChange={onChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="6" className="form-label">
            Skill-6
          </label>
          <input
            type="text"
            className="form-control my-2"
            name="skill6"
            value={skill6}
            id="6"
            placeholder="e.g. Emotional Intelligence"
            onChange={onChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="7" className="form-label">
            Skill-7
          </label>
          <input
            type="text"
            className="form-control my-2"
            name="skill7"
            value={skill7}
            id="7"
            placeholder="e.g. Outbound Marketing"
            onChange={onChange}
          />
        </div>
        <div className=" col-md-6">
          <label htmlFor="8" className="form-label">
            Skill-8
          </label>
          <input
            type="text"
            className="form-control my-2"
            name="skill8"
            value={skill8}
            id="8"
            placeholder="e.g. Email Marketing"
            onChange={onChange}
          />
        </div>
      </form>
    </section>
  );
}

export default Skills;
