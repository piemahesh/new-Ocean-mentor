import "./_create-group.scss";
import student from "../../assets/student-images/girl.avif";

// import Datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Link } from "react-router-dom";

import { FaRegCalendarAlt, FaCamera } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { useState } from "react";
import { CommonNavBar } from "../mentor/Mentor";

export const CreateGroup = () => {
  const [startdate, setStartDate] = useState(new Date());
  return (
    <main className="create-group">
      <CommonNavBar to="/home" name="Create Group" />
      <div className="create-group-inner m-4 d-flex flex-column gap-3 position-relative">
        <article className="create-group-content d-flex align-items-center gap-4 text-primary p-3">
          <div className="camera rounded-circle d-flex justify-content-center align-items-center ">
            <FaCamera className="fs-3" />
          </div>
          <select className=" w-75">
            <option value="html">Html</option>
            <option value="css">Css</option>
            <option value="javascript">Javascript</option>
            <option value="react.js">React.js</option>
          </select>
        </article>
        <article className="create-group-content d-flex align-items-center gap-4 text-primary p-3">
          <FaRegCalendarAlt
            className="fs-4"
            onClick={() => setStartDate(startdate)}
          />
          <DatePicker
            selected={startdate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            dateFormat="Pp"
          />
        </article>
        <article className="create-group-content d-flex align-items-center gap-4 text-primary p-3 fs-4">
          <AiFillGithub className="fs-3" />
          <input type="text" placeholder="Github Link" />
        </article>
        <section className="my-4 text-secondary">
          <h4>Students : 2</h4>
          <article className="d-flex gap-2">
            <AddStudent />
            <AddStudent />
            <AddStudent />

            <Link className="fab2 d-flex justify-content-center align-items-center bg-primary text-white text-decoration-none rounded-circle mt-2">
              +
            </Link>
          </article>
        </section>
        <section className="groupadd">
          <Link
            to="/home"
            className="fab1 shadow bg-primary d-flex justify-content-center align-items-center text-white text-decoration-none"
          >
            <TiTick />
          </Link>
        </section>
      </div>
    </main>
  );
};

export const AddStudent = () => {
  return (
    <main className="AddStudent-inner d-flex flex-column align-items-center gap-2 mt-2">
      <img className="rounded-circle" src={student} alt="not found" />
      <span>Arthi</span>
    </main>
  );
};
