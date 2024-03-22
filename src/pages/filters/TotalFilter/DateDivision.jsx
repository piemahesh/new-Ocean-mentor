import { useNavigate, Link } from "react-router-dom";
import { RiCloseCircleFill } from "react-icons/ri";
import { AiTwotoneCalendar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { filterByDate } from "../../../features/DateSlice";
import { useState } from "react";

export const DateDivision = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goBack = () => {
    dispatch(filterByDate({ from: from, to: to }));
    navigate(-1);
  };
  return (
    <main className="date-division d-flex flex-column justify-content-center shadow position-fixed shadow position-fixed h-100">
      <section className="date-division-down border-top gap-2 position-absolute d-flex flex-column justify-content-center  bg-white">
        <div className="border-bottom px-4 py-2 d-flex justify-content-between align-items-center">
          <h5 className=" text-secondary m-0 fw-bold">DATE</h5>
          <Link className="text-decoration-none" onClick={goBack}>
            <RiCloseCircleFill className="text-primary fs-3" />
          </Link>
        </div>
        <div className="date-division-inner  d-flex flex-column gap-3 align-items-center text-primary fs-4 mx-auto p-2 ">
          <article className="border-bottom w-100 d-flex gap-3 justify-content-center align-items-center p-2">
            <AiTwotoneCalendar />
            <input
              type="date"
              id="inputDate"
              onChange={(e) => {
                setFrom(e.target.value);
              }}
            />
          </article>
          <article className="border-bottom w-100 d-flex gap-3 justify-content-center align-items-center p-2">
            <AiTwotoneCalendar />
            <input
              type="date"
              id="inputDate"
              onChange={(e) => {
                setTo(e.target.value);
              }}
            />
          </article>
        </div>

        <Link
          className="btn btn-primary mt-3 fw-bold w-50 mx-auto mb-3"
          onClick={goBack}
        >
          Apply Changes
        </Link>
      </section>
    </main>
  );
};
