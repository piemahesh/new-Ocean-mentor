import "./_student.scss";

// import student from "../../assets/student-images/girl.avif";

import { MdOutlineAddBox } from "react-icons/md";
import { IoCaretDownSharp } from "react-icons/io5";
import { TRAINERS_STUDENT } from "../../constant/ApiEndpoint";
import { Link, Outlet } from "react-router-dom";
import UseQueryRe from "../../customHooks/UseQueryRe";

import { AddDateDivision } from "../filters/TotalFilter/AddDateDivision";
import { BatchDivision } from "../filters/BatchDivision";
import { CourseDivision } from "../filters/TotalFilter/CourseDivision";
import { DateDivision } from "../filters/TotalFilter/DateDivision";
import { FilterDivision } from "../filters/TotalFilter/FilterDivision";
import { SortDivision } from "../filters/TotalFilter/SortDivision";
import { TimeDivision } from "../filters/TotalFilter/TimeDivision";

import { CommonNavBar } from "../mentor/Mentor";
import { studentAction } from "../../features/StudentSlice";
import { useDispatch } from "react-redux";
// import { BatchDivision } from "../filters/BatchDivision";
export const Student = () => {
  const mentorId = localStorage.getItem("tokenId");
  const { data, isError } = UseQueryRe(
    "triner_students",
    TRAINERS_STUDENT,
    mentorId
  );
  if (isError) {
    return <p>error.........</p>;
  }
  const datas = data || [];

  return (
    <main className="student">
      {/* navbar */}
      <CommonNavBar to="/home" name="Students" />

      {/* List Filter */}
      <div className="add-list d-flex flex-column my-0">
        <section className="filters position-sticky my-2 d-flex justify-content-between gap-2 py-2 align-items-center bg-white">
          <Link
            to="/student/filter"
            className="filters-inner border text-decoration-none d-flex align-items-center gap-2 px-4 py-2"
          >
            <span>Filter</span>
            <IoCaretDownSharp />
          </Link>
          <Link
            to="/student/sort"
            className="filters-inner text-decoration-none border d-flex align-items-center gap-2 px-4 py-2"
          >
            <span>Sort By</span>
            <IoCaretDownSharp />
          </Link>
          <Link
            to="/student/course"
            className="filters-inner text-decoration-none border d-flex align-items-center gap-2 px-4 py-2"
          >
            <span>Course</span>
            <IoCaretDownSharp />
          </Link>
          <Link
            to="/student/time"
            className="filters-inner border text-decoration-none d-flex align-items-center gap-2 px-4 py-2"
          >
            <span>Time</span>
          </Link>
          <Link
            to="/student/date"
            className="filters-inner border text-decoration-none d-flex align-items-center gap-2 px-4 py-2"
          >
            <span>Date</span>
          </Link>
          <Link
            to="/student/add-date"
            className="filters-inner border text-decoration-none bg-success text-white fw-bold d-flex align-items-center py-2 px-4"
          >
            <MdOutlineAddBox className="mx-1" />
            <span>Add Date</span>
          </Link>
          <div className="line py-2 "></div>
          <div className="filters-inner border bg-danger d-flex align-items-center gap-2 px-4 py-2 text-white">
            <span>Clear All</span>
          </div>
        </section>

        {/* middle add-list */}
        <BatchDivision />
      </div>

      {/* Student Details */}
      <section className="mx-3 scroll ">
        {datas.map((e) => {
          return (
            <div key={e._id}>
              <StudentDetails
                course={e.courseName}
                studName={e.name}
                studImg={e.photo}
                altt={e.name}
                email={e.email}
                mobileNumber={e.mobileNumber}
                id={e._id}
              />
            </div>
          );
        })}
      </section>
      <Outlet />
    </main>
  );
};

export const StudentDetails = (props) => {
  const dispatch = useDispatch();
  return (
    <Link
      to={`/studentattendance/${props.id}`}
      onClick={() => {
        dispatch(studentAction({ studentVal: props }));
      }}
      className="StudentDetails d-flex gap-2 m-2 py-2 text-decoration-none align-items-center"
    >
      <div id="imgContainer">
        <img src={props.studImg} alt={props.altt} />
      </div>
      <div className="title w-100 px-2 text-secondary">
        <h5 className="m-0">{props.studName}</h5>
        <span>{props.course}</span>
      </div>
    </Link>
  );
};

export const Sample = () => {
  return (
    <>
      <FilterDivision />
      <SortDivision />
      <CourseDivision />
      <TimeDivision />
      <DateDivision />
      <AddDateDivision />
    </>
  );
};
