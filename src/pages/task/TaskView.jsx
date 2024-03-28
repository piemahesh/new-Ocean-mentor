import React from "react";
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

export const TaskView = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  console.log(taskId);
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
          {/* <article className="d-flex gap-3">
            <Link to="" className="text-decoration-none text-white">
              <BsSearch className="fs-2 " />
            </Link>

            <label className="dropdown">
              <BsThreeDotsVertical className="fs-2" />
              <input type="checkbox" className="dd-input" id="test" />
              <div
                className="dd-menu mx-auto text-primary"
                onClick={() => setFilter(!filter)}
              >
                <span>
                  <FaFilter />
                </span>
                <span>Filter</span>
              </div>
            </label>
          </article> */}
        </nav>
      </section>
    </>
  );
};
