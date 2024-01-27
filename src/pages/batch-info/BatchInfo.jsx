import "./_batch-info.scss";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { FaAward } from "react-icons/fa";

export const BatchInfo = () => {
  return (
    <main className="batchinfo">
      <nav className="sticky-top d-flex align-items-center text-primary p-2">
        <Link to="/batch" className="text-decoration-none">
          <MdOutlineKeyboardArrowLeft className="left-arrow" />
        </Link>
        <h5 className="my-0 fs-4">
          {" "}
          <span className="award">
            <FaAward className="fs-5 text-primary" />
          </span>
          BatchBoard
        </h5>
      </nav>
      <div className="batchinfo-inner position-relative">
        <div className="p-4">
          <p>
            Batchboard is based on the Students task. It is calculated weekly
            based on their tasks.
          </p>
        </div>

        <section className="batchinfo-got position-absolute  d-flex justify-content-center align-items-center text-primary fw-bold border border-primary">
          <Link to="/batch" className="text-decoration-none">
            Got it
          </Link>
        </section>
      </div>
    </main>
  );
};
