import "./_credit.scss";

// Images
import logo from "../../assets/log-image/oa-a.svg";
import mentor from "../../assets/profile-image/boy.avif";

import { BsFillCircleFill } from "react-icons/bs";
import { CommonNavBar } from "../mentor/Mentor";

import GaugeComponent from "react-gauge-component";

export const CreditPercentange = () => {
  return (
    <main className="credit">
      <CommonNavBar name="Credit Percentage" to="/profile" />
      <div className="credit-inner mx-3">
        <section className="credit-details d-flex mt-3 gap-3">
          <img className="rounded-circle" src={mentor} alt="not found" />
          <article>
            <h4>Hello, Arjun</h4>
            <p className="m-0">Good Morning, Here is your Credit Precentage</p>
          </article>
        </section>
        <section className="credit-graph d-flex flex-column justify-content-center align-items-center position-relative">
          <GaugeComponent
            type="semicircle"
            arc={{
              colorArray: ["red", "orange", "green"],
              padding: 0.02,
              subArcs: [{ limit: 30 }, { limit: 70 }, { limit: 100 }],
            }}
            pointer={{ type: "blob", animationDelay: 0 }}
            value={60}
          />
          <span className="m-2 text-secondary">Last Update on August 25</span>
          <div className="credit-graph-logo position-absolute gap-1 d-flex flex-column align-items-center justify-content-center">
            <p className="m-0 text-secondary">Powered By</p>
            <div className="logo rounded-circle bg-primary d-flex align-items-center justify-content-center">
              <img src={logo} alt="not found" />
            </div>
          </div>
        </section>
        <section className="credit-card shadow d-flex flex-column justify-content-center align-items-center p-2">
          <h4 className="m-2 mt-4">Understand Credit Precentage Score</h4>
          <p className="m-0 text-center">
            Your Credit Precentage Score is a 2 digit number that appears on
            your credit percentage report.The usual range is between 0 and 100.
          </p>
          <div className="credit-card-inner p-2 my-3">
            <section className="d-flex align-items-center gap-2 m-2">
              <BsFillCircleFill className="fs-1 text-danger" />
              <article className="d-flex justify-content-between w-100">
                <p className="m-0">Below 30</p>
                <p className="m-0">Needs help</p>
              </article>
            </section>
            <section className="d-flex align-items-center gap-2 m-2">
              <BsFillCircleFill className="fs-1 text-warning" />
              <article className="d-flex justify-content-between w-100">
                <p className="m-0">30% - 70%</p>
                <p className="m-0">Average</p>
              </article>
            </section>
            <section className="d-flex align-items-center gap-2 m-2">
              <BsFillCircleFill className="fs-1 text-success" />
              <article className="d-flex justify-content-between w-100">
                <p className="m-0">70% - 100%</p>
                <p className="m-0">Excellent</p>
              </article>
            </section>
          </div>
          <div className="d-flex justify-content-end p-3 w-100">
            <button className="btn border-primary bg-transparent text-primary fs-4 fw-bold">
              Got it
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};
