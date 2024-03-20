import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { RiCloseCircleFill } from "react-icons/ri";
import { BsFillClockFill } from "react-icons/bs";
import { useState } from "react";

export const TimeDivision = () => {
  const navigate = useNavigate();
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const handleSubmit = () => {
    console.log(startTime);
    console.log(endTime);
    navigate(-1);
  };

  const goBack = () => {
    navigate(-1);
  };
  return (
    <main className="time-division border-top d-flex flex-column justify-content-center shadow position-fixed shadow position-fixed h-100">
      <section className="time-division-down w-100 border-top position-absolute d-flex flex-column gap-3 bg-white">
        <div className="border-bottom my-2 p-3 d-flex justify-content-between align-items-center">
          <h5 className=" text-secondary m-0 fw-bold">TIME</h5>
          <Link className="text-decoration-none" onClick={goBack}>
            <RiCloseCircleFill className="text-primary fs-3" />
          </Link>
        </div>
        <div className="time-division-inner flex-column  mt-3 d-flex gap-2  justify-content-between align-items-center text-primary fs-4 mx-auto p-2 ">
          <span className="text-secondary d-flex gap-2 fs-5">
            <div className="text-primary">
              <BsFillClockFill />
            </div>
            Add Time
          </span>
          <div className="d-flex align-items-center justify-content-center flex-column gap-2">
            <div className="d-flex gap-2 justify-content-between w-100 ">
              <label htmlFor="startTime">From:</label>
              <input
                type="time"
                className="border-primary text-primary fs-5 rounded-2"
                id="timing"
                onChange={(e) => {
                  setStartTime(e.target.value);
                }}
                style={{ paddingInlineStart: "10px" }}
              />
            </div>
            <div className="d-flex gap-2  justify-content-between w-100">
              <label htmlFor="startTime">To:</label>
              <input
                type="time"
                id="timing"
                className="border-primary fs-5 text-primary rounded-2"
                onChange={(e) => {
                  setEndTime(e.target.value);
                }}
                style={{ paddingInlineStart: "10px" }}
              />
            </div>
          </div>
        </div>
        <article className="d-flex justify-content-center mt-1">
          <Link
            className="btn btn-primary fw-bold w-50 mx-auto mb-4"
            onClick={handleSubmit}
          >
            Apply Changes
          </Link>
        </article>
      </section>
    </main>
  );
};
