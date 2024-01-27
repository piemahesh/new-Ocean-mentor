import "./_leader-board.scss";

import { Link } from "react-router-dom";

import circle from "../../assets/background-image/Ellipse 347.svg";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { GiChessKing } from "react-icons/gi";
import student from "../../assets/profile-image/boy.avif";
export const LeaderBoard = () => {
  return (
    <main className="leader">
      <div className="leader-header position-relative">
        {/* navbar */}
        <nav className="sticky-top d-flex justify-content-between align-items-center text-white px-2">
          <article className="d-flex align-items-center">
            <Link to="/home" className="text-decoration-none text-white">
              <MdOutlineKeyboardArrowLeft className="left-arrow " />
            </Link>
            <h5 className="my-0 fs-4">LeaderBoard</h5>
          </article>
        </nav>
        <div className="d-flex justify-content-center align-items-center">
          <section className="leader-filter d-flex py-2 px-3 gap-3">
            <article className="time bg-white px-3">
              <span>All Time</span>
            </article>
            <span className="text-white">This Week</span>
            <span className="text-white">This Month</span>
          </section>
        </div>
        <section className="leader-smallcircle">
          <img
            className="circle1 position-absolute"
            src={circle}
            alt="not found"
          />
          <img
            className="circle2 position-absolute"
            src={circle}
            alt="not found"
          />
          <img
            className="circle3 position-absolute"
            src={circle}
            alt="not found"
          />
          <img
            className="circle4 position-absolute"
            src={circle}
            alt="not found"
          />
        </section>
        <div className="leader-place position-relative d-flex gap-5 justify-content-center align-items-center ">
          <section className="leader-place-inner1 d-flex flex-column gap-2">
            <article className="position-relative d-flex flex-column align-items-center justify-content-center">
              <img
                className="rounded-circle leader-place-image1"
                src={student}
                alt="not found"
              />
              <div className="degree1 d-flex justify-content-center align-items-center">
                <span className="fw-bold">2</span>
              </div>
            </article>
            <article className="leader-place-name1 py-2 d-flex flex-column align-items-center justify-content-center">
              <h5 className="text-white">Kalai</h5>
              <span>92%</span>
              <span>Attendance</span>
            </article>
          </section>
          <section className="leader-place-inner2 d-flex flex-column gap-3">
            <article className="position-relative d-flex flex-column position-relative align-items-center">
              <GiChessKing className="chess position-absolute text-warning" />
              <img
                className="rounded-circle leader-place-image2"
                src={student}
                alt="not found"
              />
              <div className="degree2 d-flex justify-content-center align-items-center">
                <span className="fw-bold">1</span>
              </div>
            </article>
            <article className="leader-place-name2 d-flex flex-column align-items-center justify-content-center py-2">
              <h4 className="text-white">Kalai</h4>
              <span>98%</span>
              <span>Attendance</span>
            </article>
          </section>
          <section className="leader-place-inner3 d-flex flex-column gap-2">
            <article className="position-relative d-flex flex-column align-items-center justify-content-center">
              <img
                className="rounded-circle leader-place-image3"
                src={student}
                alt="not found"
              />
              <div className="degree3 d-flex justify-content-center align-items-center">
                <span className="fw-bold">3</span>
              </div>
            </article>
            <article className="leader-place-name3 py-2 d-flex flex-column align-items-center justify-content-center">
              <h5 className="text-white">Kalai</h5>
              <span>80%</span>
              <span>Attendance</span>
            </article>
          </section>
        </div>
      </div>
      <StudentAttendanceInfo />
      <StudentAttendanceInfo />
      <StudentAttendanceInfo />
    </main>
  );
};

export const StudentAttendanceInfo = () => {
  return (
    <main className="student-attendance-details border gap-4 mt-4">
      <section className="student-attendance-inner d-flex gap-3">
        <article className="position-relative d-flex flex-column align-items-center justify-content-center">
          <img className="rounded-circle" src={student} alt="not found" />
          <div className="degree d-flex justify-content-center align-items-center">
            <span className="text-white">4</span>
          </div>
        </article>
        <article className="student-attendance-box w-100 d-flex align-items-center justify-content-between">
          <h4 className="m-0">Maran</h4>
          <article className="d-flex flex-column align-items-end">
            <span className="text-secondary">Attendance</span>
            <span className="percentage">85%</span>
          </article>
        </article>
      </section>
    </main>
  );
};
