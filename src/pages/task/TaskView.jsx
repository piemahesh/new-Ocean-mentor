import { useNavigate, useParams } from "react-router-dom";
import "./_taskView.scss";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import UseQueryRe from "../../customHooks/UseQueryRe";
import { PUT_MARKS, TASK_ROOM } from "../../constant/ApiEndpoint";
import SetImg from "../../assets/course-byBatches/SetImg";
import dummyImg from "../../assets/profile-image/boy.avif";
import { useState } from "react";
import api from "../../ApiService";
import { ToastContainer, toast } from "react-toastify";
import { Vortex } from "react-loader-spinner";
// task no one is submitted img
import taskNotSubmitted from "../../assets/not-found/noOneis.png";

export const TaskView = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const { data, refetch, isLoading, isFetching } = UseQueryRe(
    "task",
    TASK_ROOM,
    taskId
  );
  // console.log(data || null);
  const datas = data || [];
  // console.log(datas);
  const { courseName = "course name" } = data?.task || {};
  const studentAnswer = data?.studentSubmittedAnswer || null;
  const [mark, setMark] = useState(0);
  function conv(d) {
    const date = new Date(d);
    return date;
  }
  const marks = [0, 1, 2, 3, 4, 5];

  if (isLoading) {
    return (
      <main className="loaders">
        <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={[
            "#0A73BE",
            "lightblue",
            "#0A73BE",
            "lightblue",
            "#0A73BE",
            "lightblue",
          ]}
        />
      </main>
    );
  }
  const handleMarks = async (answerId, option) => {
    const resp = await api.put(`${PUT_MARKS}/${answerId}`, { mark: option });
    if (resp.status == 200) {
      setTimeout(() => {
        toast.success("mark successfully submitted", {
          position: "top-center",
        });
      }, 1000);
    } else {
      setTimeout(() => {
        toast.error("mark not submitted", {
          position: "top-center",
        });
      }, 1000);
    }
    refetch();
  };

  return (
    <>
      <section className="taskView task">
        <ToastContainer style={{ padding: "10px" }} />
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
        <main className="taskInfo p-4">
          <div className=" d-flex taskContent gap-4 align-items-center justify-content-center flex-column">
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
              <p className="fs-4 text-primary">{courseName}</p>
            </div>
            {/* <h3 className="text-danger" style={{ alignSelf: "flex-start" }}>
              Question
            </h3> */}
            <div className="completion">
              <div
                className="progress bg-primary"
                style={{ width: `${data?.percentage || 0}%` }}
              ></div>
            </div>
            <div className="align-self-end">
              {" "}
              progress: {data?.percentage || 0}%
            </div>
            <p
              className=" taskQuestion rounded-2 "
              style={{ textIndent: "10px" }}
            >
              Q: {data?.task?.question}
            </p>
            {data?.task.taskImg ? (
              <a
                href={`${data?.task.taskImg}`}
                className="border rounded-2 overflow-hidden"
                target="_blank"
              >
                <div className="taskImg">
                  <img src={data?.task.taskImg} alt="taskImg" />
                </div>
              </a>
            ) : (
              <></>
            )}
          </div>
        </main>
        <main className="d-flex flex-column  gap-3 p-4">
          {studentAnswer && studentAnswer.length > 0 ? (
            studentAnswer?.map((e, i) => {
              return (
                <main
                  key={i}
                  className="studentAnswer d-flex gap-2 flex-column align-items-center justify-content-center rounded-3"
                >
                  <article className="d-flex align-self-start align-items-center gap-3 p-2">
                    <div className="studImg ">
                      <img src={e?.photo} alt="" />
                    </div>
                    <h4 className="text-secondary text-uppercase text-wrap">
                      {e?.name}
                    </h4>
                  </article>
                  <div className="answer p-2 text-center ">
                    <a
                      href={e?.answer}
                      target="_blank"
                      className="fs-5 text-decoration-none btn btn-secondary border-bottom"
                    >
                      git Link
                    </a>
                  </div>
                  <a href={e?.answerImg} target="_blank">
                    <div className="taskImg">
                      <img src={e?.answerImg} />
                    </div>
                  </a>
                  <div className="d-flex gap-2 align-self-start flex-wrap">
                    {marks.map((option, j) => {
                      return (
                        <div key={i + "" + j} className="d-flex ">
                          <label
                            className={`d-flex align-items-center justify-content-center ${
                              option == e?.mark
                                ? "bg-success text-white"
                                : "bg-white"
                            }`}
                            htmlFor={`marks${i + "" + j}`}
                            onClick={() => {
                              handleMarks(e?._id, option);
                            }}
                            id="star"
                          >
                            <p
                              className={`mt-3 ${
                                option == e?.mark
                                  ? "text-white"
                                  : "text-secondary "
                              }`}
                            >
                              {option}
                            </p>
                          </label>
                          <input
                            style={{ display: "none" }}
                            type="radio"
                            name="mark"
                            id={`marks${i + "" + j}`}
                            value={option}
                          />
                        </div>
                      );
                    })}
                  </div>
                </main>
              );
            })
          ) : (
            <main>
              <picture id="notFound">
                <img src={taskNotSubmitted} alt="no one is submitted" />
              </picture>
            </main>
          )}
        </main>
      </section>
    </>
  );
};
