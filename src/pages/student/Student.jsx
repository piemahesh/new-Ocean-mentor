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
import { useState } from "react";
// import { BatchDivision } from "../filters/BatchDivision";
export const Student = () => {
  const mentorId = localStorage.getItem("tokenId");

  const [searching, setSearching] = useState("");
  const [view, setView] = useState("on-going");
  const { data, isError } = UseQueryRe(
    "triner_students",
    TRAINERS_STUDENT,
    mentorId
  );
  if (isError) {
    return <p>error.........</p>;
  }
  const datas = data || [];

  const filtered = datas
    .filter((student) =>
      student.name.toLowerCase().includes(searching.toLowerCase())
    )
    .filter((student) => {
      if (view.toLowerCase() === "completed") {
        return student.coursestatus === "completed";
      } else if (view === "on-going") {
        return student.coursestatus.toLowerCase() === "learning";
      } else {
        return student;
      }
    });

  return (
    <main className="student">
      {/* navbar */}
      <CommonNavBar to="/home" names="Students" />

      {/* List Filter */}
      <div className="add-list d-flex flex-column my-0">
        <BatchDivision setSearching={setSearching} setView={setView} />
      </div>

      {/* Student Details */}
      <section className="mx-3 h-100 pb-5 scroll ">
        {filtered.map((e) => {
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
