import "./_mentor.scss";
import figma from "../../assets/addcourse-image/figma.png";
import UseQueryRe from "../../customHooks/UseQueryRe";
import { Link } from "react-router-dom";
import { ALL_MENTORS } from "../../constant/ApiEndpoint";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export const Mentor = () => {
  const { data, isError } = UseQueryRe("MentorDetails", ALL_MENTORS, "");
  const datas = data || [];
  if (isError) {
    return <p>error............</p>;
  }
  return (
    <main className="mentor ">
      <CommonNavBar names="Mentors" to="/home" />
      <div className="members m-4 d-flex flex-column gap-3">
        {datas.map((e) => {
          return (
            <div key={e._id}>
              <AddMentor id={e._id} names={e.name} />
            </div>
          );
        })}
      </div>
      {/* <footer className="footer position-fixed d-flex align-items-center mx-4">
        <Link>See All Mentors</Link>
      </footer> */}
    </main>
  );
};

export const CommonNavBar = (props) => {
  return (
    <nav className="common-navbar sticky-top shadow d-flex justify-content-between align-items-center text-white px-2 bg-primary">
      <Link to={props.to} className="text-decoration-none">
        <MdOutlineKeyboardArrowLeft className="left-arrow text-white" />
      </Link>
      <h5 className="my-0 text-center ">{props.names}</h5>
      <p className="invisible">empty</p>
    </nav>
  );
};

export const AddMentor = (props) => {
  return (
    <div
      key={props.id}
      className="d-flex gap-2 align-items-center border-bottom py-3"
    >
      <img
        className="rounded-circle"
        src={figma}
        alt="not found"
        width="100%"
      />
      <Link
        to={`/another-mentor-page/${props.id}`}
        className="w-100 text-decoration-none"
        style={{ color: "black" }}
      >
        {props.names}
      </Link>
    </div>
  );
};
