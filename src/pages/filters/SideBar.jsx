import { useNavigate, Link } from "react-router-dom";
import {
  BsPersonCircle,
  BsPersonFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { GiTrophy } from "react-icons/gi";
import { BiSolidLogOut } from "react-icons/bi";
import { useEffect, useState } from "react";
import { GET_PROFILE } from "../../constant/ApiEndpoint";
import api from "../../ApiService";

export const SideBar = (props) => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({});
  const removeToken = () => {
    localStorage.removeItem("tokenId");
    navigate("/");
  };
  const trainerId = localStorage.getItem("tokenId");

  const fetchMentor = async () => {
    const response = await api.get(`${GET_PROFILE}${trainerId}`)
    if (response.data) {
      setDetails(response.data);
    }
  }

  useEffect(() => {
    fetchMentor()
  }, [])




  return (
    <main
      className="bg-white position-absolute asided d-flex flex-column px-4 py-2"
      style={props.style}
    >
      <div className="content">
        <article className=" d-flex align-items-center text-primary my-3">
          <BsPersonCircle className=" icons mx-2" />
          <h4 className=" mx-4">{details?.name || "ocean mentor"}</h4>
        </article>
        <hr />
        <section>
          <Link
            to="/mentor"
            className="d-flex align-items-center my-4 text-decoration-none"
          >
            <BsPersonFill className="fs-4 mx-1 " />
            <span className="list mx-1">Mentors</span>
          </Link>
          <Link
            to="/student"
            className="d-flex align-items-center my-4 text-decoration-none"
          >
            <BsPersonFill className="fs-4 mx-1 text-primary" />
            <span className="list mx-1">Students</span>
          </Link>
          <Link
            to="/leader"
            className="d-flex align-items-center my-4 text-decoration-none"
          >
            <GiTrophy className="fs-4 mx-1 text-primary" />
            <span className="list mx-1">Leaderboard</span>
          </Link>
          <article className="d-flex align-items-center my-4">
            <BiSolidLogOut className="fs-4 mx-1 text-primary" />
            <span className=" mx-1" onClick={removeToken} id="logout">
              Logout
            </span>
          </article>
        </section>
      </div>
      <div className="close-btn d-flex justify-content-center align-items-center display-1 text-primary">
        <BsFillArrowLeftCircleFill onClick={props.onclose} />
      </div>
    </main>
  );
};
