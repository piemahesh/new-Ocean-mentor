import "./_task.scss";

import figma from "../../assets/addcourse-image/figma.png";

// import Datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
  BsSearch,
  BsThreeDotsVertical,
  BsFillCameraFill,
} from "react-icons/bs";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { IoCalendarOutline, IoDocuments } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import { Link } from "react-router-dom";

// import task from "../../assets/task-image/task.png";
import { useState } from "react";

export const Task = () => {
  const [filter, setFilter] = useState(false);
  const [upload, setUploadTask] = useState(false);
  function filterDate() {
    return setFilter(!filter);
  }
  function uploadcompleted() {
    return setUploadTask(!upload);
  }

  return (
    <main className="task position-relative">
      <nav className="sticky-top shadow d-flex justify-content-between align-items-center text-white px-2 bg-primary">
        <article className="d-flex align-items-center">
          <Link to="/groupinfo" className="text-decoration-none text-white">
            <MdOutlineKeyboardArrowLeft className="left-arrow " />
          </Link>
          <h5 className="my-0 fs-4">Task</h5>
        </article>
        <article className="d-flex gap-3">
          <Link to="" className="text-decoration-none text-white">
            <BsSearch className="fs-2 " />
          </Link>

          <label className="dropdown">
            <BsThreeDotsVertical className="fs-2" />
            <input type="checkbox" className="dd-input" id="test" />
            <div
              className="dd-menu mx-auto text-primary"
              onClick={() => setFilter(!filter)}
            >
              <span>
                <FaFilter />
              </span>
              <span>Filter</span>
            </div>
          </label>
        </article>
      </nav>

      <div className="position-relative">
        {/* <div className="add-content d-none d-flex flex-column justify-content-center align-items-center">
          <section className="d-flex flex-column justify-content-center align-items-center">
            <img className="w-50" src={task} alt="task-img not found" />
            <h5 className="text-secondary">No Notes exist here</h5>
          </section>
        </div> */}
        <div className="d-flex flex-column px-4 py-2 mx-3">
          <TaskAdd
            days="Today"
            text="Design prototype of your own in figma"
            time="12:11 PM"
          />
          <TaskAdd
            days="Yesterday"
            text="Introduction prototype Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque excepturi assumenda minus voluptatibus in rerum ut? Veritatis saepe voluptates cumque consectetur ducimus illo, numquam ipsa autem, illum voluptatibus cupiditate quas!"
            time="3:04 PM"
          />
          <TaskAdd
            days="Jul 26,2023"
            text="Introduction prototype Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque excepturi assumenda minus voluptatibus in rerum ut? Veritatis saepe voluptates cumque consectetur ducimus illo, numquam ipsa autem, illum voluptatibus cupiditate quas!"
            time="3:04 PM"
          />
          <TaskAdd
            days="Jul 26,2023"
            image={figma}
            text="Introduction prototype Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque excepturi assumenda minus voluptatibus in rerum ut? Veritatis saepe voluptates cumque consectetur ducimus illo, numquam ipsa autem, illum voluptatibus cupiditate quas!"
            time="3:04 PM"
          />
        </div>
        <section className=" taskadd">
          <article
            className="fab shadow bg-primary d-flex justify-content-center align-items-center text-white rounded-circle"
            onClick={uploadcompleted}
          >
            +
          </article>
        </section>

        {/* Filter */}
        {filter && <FilterTask onclose={filterDate} />}

        {/* Upload Task */}
        {upload && <UploadTask onclose={uploadcompleted} />}
      </div>
    </main>
  );
};

export const TaskAdd = (props) => {
  return (
    <section className="content d-flex flex-column justify-content-center align-items-center">
      <p className="m-0 my-2 p-2 text-primary">{props.days}</p>
      <article className="class-content border w-100 p-3 text-white bg-primary">
        <img src={props.image} alt="not found" width="100%" />
        <p className="m-0 my-3">{props.text}</p>
        <span className="d-flex justify-content-end">{props.time}</span>
      </article>
    </section>
  );
};

export const FilterTask = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <main className="filtertask border-top d-flex flex-column justify-content-center p-4 shadow position-fixed bg-white">
      <div className="tab-line mx-auto"></div>
      <div className="filtertask-inner m-2 d-flex flex-column gap-3 text-primary mx-auto">
        <article className="d-flex justify-content-between py-2 ">
          {" "}
          <span>Start Date</span>{" "}
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <IoCalendarOutline className="fs-4" />
        </article>
        <article className="d-flex justify-content-between py-2">
          <span>End Date</span>
          <IoCalendarOutline className="fs-4" />
        </article>
        <button
          className="btn bg-primary text-white px-3 mt-2 fw-bold w-75 mx-auto"
          onClick={props.onclose}
        >
          Save Changes
        </button>
      </div>
    </main>
  );
};

export const UploadTask = (props) => {
  return (
    <main className="uploadtask border-top d-flex flex-column justify-content-center  shadow position-fixed bg-white">
      <div className="d-flex justify-content-between border-bottom px-4 pt-4">
        <h4>Upload Task</h4>
        <span className="text-primary" onClick={props.onclose}>
          Clear All
        </span>
      </div>
      <section className="uploadtask-inner m-2 d-flex flex-column gap-3 text-primary mx-auto">
        <section className="d-flex align-items-center my-4 gap-2 w-100">
          <div className="uploadtask-inner-input border px-2 py-3 d-flex justify-content-between align-items-center">
            <input
              className="border-0 px-2"
              type="text"
              placeholder="Upload your task here..."
            />
            <IoDocuments className="fs-4" />
          </div>
          <BsFillCameraFill className="fs-1" />
        </section>
        <button
          className="btn bg-primary text-white px-3 my-2 fw-bold w-75 mx-auto"
          onClick={props.onclose}
        >
          Upload
        </button>
      </section>
    </main>
  );
};
