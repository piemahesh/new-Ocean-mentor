import { useNavigate, useParams } from "react-router-dom";
import "./_taskView.scss";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import UseQueryRe from "../../customHooks/UseQueryRe";
import { PUT_MARKS, TASK_ROOM } from "../../constant/ApiEndpoint";
import SetImg from "../../assets/course-byBatches/SetImg";
import dummyImg from "../../assets/profile-image/boy.avif"
import { useState } from "react";
import api from "../../ApiService";
import { ToastContainer, toast } from "react-toastify";

export const TaskView = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const { data, refetch } = UseQueryRe("task", TASK_ROOM, taskId);
  // console.log(data || null);

  const { courseName = "course name" } = data?.task || {};
  const studentAnswer = data?.studentSubmittedAnswer || null;
  const [mark, setMark] = useState(0)
  function conv(data) {
    const date = new Date(data);
    return date;
  }
  const marks = [0, 1, 2, 3, 4, 5];

  const handleMarks = async (answerId, option) => {
    const resp = await api.put(`${PUT_MARKS}/${answerId}`, { mark: option });
    if (resp.status == 200) {

      toast.success("mark successfully submitted", {
        position: "top-center",
      });
    } else {

      toast.error(resp.data, {
        position: "top-center",
      });
    }
    refetch()
  }

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
              <p>{courseName}</p>
            </div>
            {/* <h3 className="text-danger" style={{ alignSelf: "flex-start" }}>
              Question
            </h3> */}
            <div className="completion">
              <div className="progress bg-primary" style={{ width: `${data?.percentage || 0}%` }}></div>
            </div>
            <div className="align-self-end"> progress: {data?.percentage || 0}%</div>
            <p className=" taskQuestion rounded-2 " style={{ textIndent: "10px" }}>
              Q: {data?.task?.question}
            </p>
          </div>
        </main>

        <main className="d-flex flex-column gap-3 p-4">
          {studentAnswer?.map((e, i) => {
            return (
              <main key={i} className="studentAnswer rounded-3">
                <article className="d-flex align-items-center gap-3 p-2">
                  <div className="studImg">
                    <img src={e?.photo} alt="" />
                  </div>
                  <h4 className="text-white text-uppercase text-wrap">{e?.name}</h4>
                </article>
                <div className="answer p-2 text-centert">
                  <p className="fs-5"> answer: {e?.answer}</p>
                </div>
                <div className="d-flex gap-4 p-2">
                  {
                    marks.map((option, i) => {
                      return (
                        <div key={i} className="d-flex align-items-center">
                          <label className={`d-flex align-items-center justify-content-center ${option == e?.mark ? "bg-success text-white" : "bg-white"}`}
                            htmlFor={`marks${i}`} onClick={() => { handleMarks(e?._id, option) }} id="star">
                            <p className={`mt-3 ${option == e?.mark ? "text-white" : "text-secondary "}`}>{option}</p>
                          </label>
                          <input style={{ display: "none" }} type="radio" name="mark" id={`marks${i}`} value={option} />

                        </div>
                      )
                    })
                  }
                </div>
              </main>
            )
          })}
        </main>

      </section>
    </>
  );
};
