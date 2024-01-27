import { BsClockFill } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import { TbLoader } from "react-icons/tb";
import { Link } from "react-router-dom";
import SetImg from "../../assets/course-byBatches/SetImg";

export const Courses = (props) => {
  // console.log(props)
  return (
    <main>
      <Link
        to={`/groupinfo/${props.id}`}
        className="group py-3 d-flex justify-content-between align-items-center text-decoration-none"
      >
        <div className="d-flex gap-2 align-items-center">
          <article>
            {/* <img src={setImg(`${courseName}`)} alt="figma not found" /> */}
            <SetImg course={props.courseName} />
            {/* {console.log(props.courseName)} */}
          </article>
          <article className="d-flex flex-column">
            <h5 className="text-primary fs-6 mb-0">{props.courseName}</h5>
            <span className=" texts text-secondary mb-0 d-flex gap-1 align-items-center">
              <BsClockFill className="text-primary fs-6 " /> {props.batchTime}
            </span>
          </article>
        </div>
        <article className="d-flex flex-column">
          <p className=" text-secondary texts mb-0 d-flex ">
            <AiOutlineCalendar className="text-primary fs-6" /> {props.date}
          </p>

          <p className=" text-secondary texts mb-0 mt-2 d-flex">
            <TbLoader className="text-primary fs-6" />
            {props.status}
          </p>
        </article>
      </Link>
    </main>
  );
};
