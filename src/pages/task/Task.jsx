import "./_task.scss";
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
import { useEffect, useState } from "react";
import UseQueryRe from "../../customHooks/UseQueryRe";
import { ADD_TASK, EDIT_TASK, GET_TASK } from "../../constant/ApiEndpoint";
import api from "../../ApiService";

export const Task = () => {
  const [filter, setFilter] = useState(false);
  const [upload, setUploadTask] = useState(false);
  const [edit, setEdit] = useState(false);
  const [task, setTask] = useState(null);
  const navigate = useNavigate();

  const { batchId } = useParams();
  const { data, error } = UseQueryRe("get_task", `${GET_TASK}/${batchId}`, "");
  let datas = data || [];
  if (datas.length == 0) {
    datas = [{ question: "task not found" }];
  }

  function filterDate() {
    return setFilter(!filter);
  }
  function uploadcompleted() {
    return setUploadTask(!upload);
  }
  function convertToAMPM(time) {
    const convDate = new Date(time);
    const dateFormat =
      convDate.getDate() +
      "/" +
      convDate.getMonth() +
      "/" +
      convDate.getFullYear();

    const timeFormat = convDate.getHours() + ":" + convDate.getMinutes();

    return { dateFormat, timeFormat };
  }

  const handleUpdate = (task) => {
    setTask(task);
    setEdit(true);
  };

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
      <TaskUpdating edit={edit} setEdit={setEdit} task={task} />
      <div className="position-relative">
        <section className=" taskadd">
          <article
            className="fab shadow bg-primary d-flex justify-content-center align-items-center text-white rounded-circle"
            onClick={uploadcompleted}
          >
            +
          </article>
        </section>
        {upload && <UploadTask onclose={uploadcompleted} batchId={batchId} />}
      </div>

      <section className="mb-4">
        {datas.map((e, i) => {
          return (
            <div key={i} className="card">
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    color: "grey",
                    width: "100%",
                    height: "70px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {e.question}
                </h5>
                <div className="card-text  d-flex gap-3">
                  <p style={{ color: "red" }}>
                    deadLine{" "}
                    {e?.deadLine
                      ? `${convertToAMPM(e?.deadLine || "").dateFormat}`
                      : "Not yet created"}
                  </p>
                  {/* <p>
                    {`${convertToAMPM(e?.deadLine || "02-19-2000").timeFormat}`}
                  </p> */}
                </div>
                <p
                  className=" text-primary p-2 rounded-2"
                  style={{ width: "fit-content", backgroundColor: "lightblue" }}
                >
                  task createdAt: {e?.taskCreatedDate?.split("T")[0] || ""}
                </p>
                <div className="d-flex w-100 align-items-center justify-content-between">
                  <Link to="/taskview/2" className="btn btn-primary">
                    view room
                  </Link>
                  <button
                    onClick={() => handleUpdate(e)}
                    className="btn btn-primary"
                  >
                    edit task
                  </button>
                </div>
              </div>
            </div>
          );
        })}
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

export const UploadTask = (props) => {
  const [question, setQuestion] = useState("");
  const [deadLine, setDeadLine] = useState(null);

  const navigate = useNavigate();
  const handleSubmit = async () => {
    props.onclose;
    try {
      await api.post(ADD_TASK, {
        question,
        deadLine,
        batchId: props.batchId,
      });
    } catch (error) {
      console.log("error");
    } finally {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };

  return (
    <main className="uploadtask border-top d-flex flex-column justify-content-center  shadow position-fixed bg-white">
      <div className="d-flex justify-content-between border-bottom px-4 pt-4">
        <h4>Upload Task</h4>
        <span className="text-primary" onClick={props.onclose}>
          close
        </span>
      </div>
      <section className="uploadtask-inner  w-100 m-2 d-flex flex-column gap-3 text-primary mx-auto">
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

export const TaskUpdating = (props) => {
  const [question, setQuestion] = useState("");
  const [deadLine, setDeadLine] = useState(null);
  const { task } = props;
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      if (question == "" || deadLine == "") {
        console.log("some field is missing");
        throw Error("some field is missing");
      }
      const resp = await api.put(EDIT_TASK, {
        id: task._id,
        question,
        deadLine,
      });
      console.log(resp);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <>
      <section
        className={`${
          props.edit ? "d-flex" : "d-none"
        }  taskUpdating align-items-center p-2 justify-content-center `}
      >
        <main className="h-100 w-100 d-flex align-items-center justify-content-center flex-column">
          <h5 className="text-primary">Edit Task</h5>
          <form
            action="#"
            className="d-flex taskEditForm align-items-center border p-4 rounded-2 gap-5 flex-column w-100"
          >
            <div className="w-100">
              <label className="text-primary fs-5" htmlFor="question">
                Prev Question
              </label>
              <p className="text-info questionpara fs-5">q) {task?.question}</p>
              <input
                type="text"
                id="question"
                className="w-100 p-2 fs-5 text-primary border-2 border-warning rounded-2"
                placeholder="Enter Question"
                style={{ outline: "none" }}
                onChange={(e) => {
                  setQuestion(e.target.value);
                }}
                required
              />
            </div>
            <div className="w-100">
              <label className="text-primary fs-5" htmlFor="deadLine">
                prev deadLine
              </label>
              <p className="text-info fs-5">:) {task?.deadLine}</p>
              <input
                type="datetime-local"
                id="deadLine"
                className="w-100 p-2 fs-5 text-primary border-2 border-warning rounded-2"
                placeholder="Enter Question"
                style={{ outline: "none" }}
                onChange={(e) => {
                  setDeadLine(e.target.value);
                }}
                required
              />
            </div>

            <div className="w-100 d-flex gap-2 align-items-center justify-content-evenly">
              <div
                onClick={() => {
                  props.setEdit(false);
                }}
                className="btn bg-warning w-50"
              >
                exit
              </div>
              <div className=" btn btn-primary w-50" onClick={handleSubmit}>
                Submit
              </div>
            </div>
          </form>
        </main>
      </section>
    </>
  );
};
