import { AiFillCloseCircle } from "react-icons/ai";
import { useNavigate, Link, NavLink, Outlet } from "react-router-dom";

export const FilterDivision = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <main className="filter-division d-flex flex-column justify-content-center shadow position-fixed h-100">
      <Link to="/home" className="text-decoration-none">
        <AiFillCloseCircle className="closed fs-1 text-primary bg-white position-absolute rounded-circle" />
      </Link>
      <section className="filter-division-down position-absolute w-100 border-top bg-white">
        <div className="border-bottom mt-3 px-4 py-2 d-flex justify-content-between align-items-center">
          <h5 className=" text-secondary fw-bold">Filter</h5>
          <NavLink className="text-decoration-none" onClick={goBack}>
            Clear All
          </NavLink>
        </div>
        <div className="filter-division-list d-flex">
          <aside className="d-flex flex-column">
            <NavLink
              to="sort"
              className="border-bottom p-2 text-center text-decoration-none"
            >
              Sort By
            </NavLink>
            <NavLink
              to="course"
              className="border-bottom p-2 text-center text-decoration-none"
            >
              Course
            </NavLink>
            <NavLink
              to="time"
              className="border-bottom p-2 text-center text-decoration-none"
            >
              Time
            </NavLink>
            <NavLink
              to="date"
              className="border-bottom p-2 text-center text-decoration-none"
            >
              Date
            </NavLink>
            <NavLink
              to="add-date"
              className=" p-2 text-center text-decoration-none"
            >
              Add Date
            </NavLink>
          </aside>
          <section className="filter-division-selection  border w-100 position-relative">
            <Outlet />

            <article className="button position-sticky d-flex w-100 mt-3">
              <Link
                className="btn btn-primary fw-bold mx-auto mb-3"
                onClick={goBack}
              >
                Apply Changes
              </Link>
            </article>
          </section>
        </div>
      </section>
    </main>
  );
};
