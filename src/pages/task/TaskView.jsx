import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./_taskView.scss";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import {
  BsSearch,
  BsThreeDotsVertical,
  BsFillCameraFill,
} from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import { Link } from "react-router-dom";
import UseQueryRe from "../../customHooks/UseQueryRe";
import { TASK_ROOM } from "../../constant/ApiEndpoint";
import SetImg from "../../assets/course-byBatches/SetImg";

export const TaskView = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const { data } = UseQueryRe("task", TASK_ROOM, taskId);
  // console.log(data || null);

  const { courseName = "course name" } = data?.batch_details[0] || {};
  const { studentAnswer = "" } = data?.studentAnswers || {};

  return (
    <>
      <section className="taskView task">
        <nav className="sticky-top shadow d-flex justify-content-between align-items-center text-white px-2 bg-primary">
          <article className="d-flex align-items-center">
            <span
              onClick={() => navigate(-1)}
              className="text-decoration-none text-white"
            >
              <MdOutlineKeyboardArrowLeft className="left-arrow " />
            </span>
            <h5 className="my-0 fs-4">Task Room</h5>
          </article>
        </nav>

        <main className="taskInfo">
          <div className=" d-flex align-items-center justify-content-center flex-column">
            <div className="text-secondary fs-3 d-flex align-items-center justify-content-center ">
              <div
                style={{
                  height: "75px",
                  width: "75px",
                  // border: "2px solid grey",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SetImg course={courseName.toLowerCase()} />
              </div>
              <p>{courseName}</p>
            </div>
            <h3 className="text-danger " style={{ alignSelf: "flex-start" }}>
              Question
            </h3>
            <p className=" fs-5 text-primary" style={{ textIndent: "20px" }}>
              {data?.question}
            </p>
            <div className="text-success fs-5">
              deadLine: {`${data?.deadLine || "not found"}`}
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
