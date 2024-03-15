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
import { Link, useNavigate, useParams } from "react-router-dom";

// import task from "../../assets/task-image/task.png";
import { useState } from "react";
import UseQueryRe from "../../customHooks/UseQueryRe";
import { ADD_TASK, GET_TASK } from "../../constant/ApiEndpoint";
import api from "../../ApiService";

export const Task = () => {
  const [filter, setFilter] = useState(false);
  const [upload, setUploadTask] = useState(false);
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();

  const { batchId } = useParams();
  const { data } = UseQueryRe("get_task", `${GET_TASK}/${batchId}`, "");
  const datas = data || [];

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
          <span
            onClick={() => navigate(-1)}
            className="text-decoration-none text-white"
          >
            <MdOutlineKeyboardArrowLeft className="left-arrow " />
          </span>
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
        <section className=" taskadd">
          <article
            className="fab shadow bg-primary d-flex justify-content-center align-items-center text-white rounded-circle"
            onClick={uploadcompleted}
          >
            +
          </article>
        </section>

        {/* Filter */}
        {/* {filter && <FilterTask onclose={filterDate} />} */}

        {/* Upload Task */}
        {upload && <UploadTask onclose={uploadcompleted} batchId={batchId} />}
      </div>
      {/* // get all tasks by batch */}

      <section>
        {datas.map((e, i) => {
          return (
            <div key={i} className="card">
              <div className="card-body">
                <h5 className="card-title">{e.question}</h5>
                <div className="card-text  d-flex gap-3">
                  deadline: {e.deadLine.split("T")[0]}
                  <p>Time:{e.deadLine.split("T")[1]}</p>
                </div>
                <div className="d-flex w-100 align-items-center justify-content-between">
                  <a href="#" className="btn btn-primary">
                    view room
                  </a>
                  <button
                    onClick={() => setEdit(true)}
                    className="btn btn-primary"
                  >
                    edit task
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {/* {edit && <Edit />} */}
      </section>
    </main>
  );
};

export const TaskAdd = (props) => {
  return (
    <section className="content d-flex flex-column justify-content-center align-items-center">
      <p className="m-0 my-2 p-2 text-primary">{props.days}</p>
      <article className="className-content border w-100 p-3 text-white bg-primary">
        <img src={props.image} alt="not found" width="100%" />
        <p className="m-0 my-3">{props.text}</p>
        <span className="d-flex justify-content-end">{props.time}</span>
      </article>
    </section>
  );
};

// export const FilterTask = (props) => {
//   const [startDate, setStartDate] = useState(new Date());
//   return (
//     <main className="filtertask border-top d-flex flex-column justify-content-center p-4 shadow position-fixed bg-white">
//       <div className="tab-line mx-auto"></div>
//       <div className="filtertask-inner m-2 d-flex flex-column gap-3 text-primary mx-auto">
//         <article className="d-flex justify-content-between py-2 ">
//           {" "}
//           <span>Start Date</span>{" "}
//           <DatePicker
//             selected={startDate}
//             onChange={(date) => setStartDate(date)}
//           />
//           <IoCalendarOutline className="fs-4" />
//         </article>
//         <article className="d-flex justify-content-between py-2">
//           <span>End Date</span>
//           <IoCalendarOutline className="fs-4" />
//         </article>
//         <button
//           className="btn bg-primary text-white px-3 mt-2 fw-bold w-75 mx-auto"
//           onClick={props.onclose}
//         >
//           Save Changes
//         </button>
//       </div>
//     </main>
//   );
// };

export const UploadTask = (props) => {
  const [question, setQuestion] = useState("");
  const [deadLine, setDeadLine] = useState(null);

  const navigate = useNavigate();
  const handleSubmit = async () => {
    props.onclose;
    const resp = await api.post(ADD_TASK, {
      question,
      deadLine,
      batchId: props.batchId,
    });
    console.log(resp);
    navigate(0);
  };

  return (
    <main className="uploadtask border-top d-flex flex-column justify-content-center  shadow position-fixed bg-white">
      <div className="d-flex justify-content-between border-bottom px-4 pt-4">
        <h4>Upload Task</h4>
        <span className="text-primary" onClick={props.onclose}>
          Clear All
        </span>
      </div>
      <section className="uploadtask-inner w-100 m-2 d-flex flex-column gap-3 text-primary mx-auto">
        <section className="d-flex align-items-center my-4 gap-2 w-100">
          <div className="uploadtask-inner-input border px-2 py-3 d-flex justify-content-between align-items-center">
            <input
              className="border-0 px-2"
              type="text"
              placeholder="Upload your task here..."
              onChange={(e) => {
                setQuestion(e.target.value);
              }}
            />
            <IoDocuments className="fs-4" />
          </div>
          {/* <BsFillCameraFill className="fs-1" /> */}
        </section>
        <section className="taskAdd">
          <label htmlFor="deadLine">Set deadLine</label>
          <input
            type="datetime-local"
            name="deadLine"
            className="border-2 rounded-2 btn"
            id="deadLine"
            onChange={(e) => {
              setDeadLine(e.target.value);
            }}
          />
        </section>
        <button
          className="btn bg-primary text-white px-3 my-2 fw-bold w-75 mx-auto"
          onClick={handleSubmit}
        >
          create room
        </button>
      </section>
    </main>
  );
};

// question,batchId,deadline
