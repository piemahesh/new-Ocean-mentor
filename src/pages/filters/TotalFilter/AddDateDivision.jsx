import { RiCloseCircleFill } from "react-icons/ri";
import { useNavigate, Link } from "react-router-dom";
import { BsCalendarEventFill } from "react-icons/bs";

export const AddDateDivision = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <main className="add-date-division d-flex flex-column justify-content-center shadow position-fixed shadow position-fixed h-100">
      <section className="add-date-division-down border-top position-absolute bg-white">
        <div className="border-bottom my-4 px-4 py-2 d-flex justify-content-between align-items-center">
          <h5 className=" text-secondary m-0 fw-bold">Add DATE</h5>
          <Link className="text-decoration-none" onClick={goBack}>
            <RiCloseCircleFill className="text-primary fs-3" />
          </Link>
        </div>
        <section className="d-flex flex-column align-items-center gap-5">
          <div className="add-date-division-inner border-bottom d-flex gap-3 align-items-center text-primary fs-4 p-2 mt-2">
            <BsCalendarEventFill />
            <span className="text-secondary">Add Date</span>
          </div>

          <Link className="btn btn-primary fw-bold my-3" onClick={goBack}>
            Apply Changes
          </Link>
        </section>
      </section>
    </main>
  );
};
