import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { RiCloseCircleFill } from "react-icons/ri";
import { BsFillClockFill } from "react-icons/bs";

export const TimeDivision = () => {
  const navigate = useNavigate();
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
        <div className="time-division-inner border-bottom mt-3 d-flex gap-3 justify-content-between align-items-center text-primary fs-4 mx-auto p-2 ">
          <BsFillClockFill />
          <input type="time" />
          <span className="text-secondary position-absolute">Add Time</span>
        </div>

        <article className="d-flex justify-content-center mt-5">
          <Link
            className="btn btn-primary fw-bold w-50 mx-auto mb-3"
            onClick={goBack}
          >
            Apply Changes
          </Link>
        </article>
      </section>
    </main>
  );
};
