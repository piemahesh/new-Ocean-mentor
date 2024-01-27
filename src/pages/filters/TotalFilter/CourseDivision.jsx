import { useNavigate, Link } from "react-router-dom";
import { RiCloseCircleFill } from "react-icons/ri";
import { checkBox } from "../../../features/CourseSlice";
import { useDispatch } from "react-redux";

export const CourseDivision = () => {
  const dispatch = useDispatch();
  const selected = [];
  const navigate = useNavigate();
  const goBack = () => {
    // console.log(selected.length);
    if (selected.length !== 0) {
      dispatch(checkBox({ course: selected }));
    }
    // console.log("hi");
    navigate(-1);
  };

  const courseName = [
    "python fullstack",
    "java fullstack",
    "python",
    "java",
    "ui/ux",
    "front-end development",
    "mern stack",
    "mean stack",
    "c",
    "c++",
    "testing",
  ];
  return (
    <main className="course-division border-top d-flex flex-column justify-content-center shadow position-fixed shadow position-fixed h-100">
      <section className="course-division-down position-absolute w-100 border-top bg-white">
        <nav className="border-bottom px-4 py-2 mt-2 d-flex justify-content-between align-items-center">
          <h5 className=" text-secondary m-0 fw-bold">COURSE</h5>
          <Link className="text-decoration-none" onClick={goBack}>
            <RiCloseCircleFill className="text-primary fs-3" />
          </Link>
        </nav>
        <div className="course-division-list">
          {courseName.map((value, index) => {
            return (
              <div
                key={index}
                className="course-division-inner d-flex justify-content-between align-items-center p-1"
              >
                <label className="fs-5" htmlFor={index}>
                  {value}
                </label>
                <input
                  type="checkbox"
                  value={value}
                  id={index}
                  onClick={(e) => {
                    selected.push(e.target.value);
                  }}
                />
              </div>
            );
          })}
        </div>
        <article className="button bg-white position-absolute d-flex justify-content-center w-100">
          <Link
            className="btn btn-primary position-sticky fw-bold mx-auto mb-3"
            onClick={goBack}
          >
            Apply Changes
          </Link>
        </article>
      </section>
    </main>
  );
};
