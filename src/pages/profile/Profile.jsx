import "./_profile.scss";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { TbSquareRoundedCheckFilled } from "react-icons/tb";
import { LuGraduationCap } from "react-icons/lu";
import { AiFillInfoCircle } from "react-icons/ai";

import mentor from "../../assets/profile-image/boy.avif";
import figma from "../../assets/addcourse-image/figma.png";
import { Link } from "react-router-dom";
import api from "../../ApiService";
import { GET_BATCH_COUNT } from "../../constant/ApiEndpoint";
import { useEffect, useState } from "react";
import { Group } from "../../components/group/Group";
export const Profile = () => {
  const [datas, setDatas] = useState({});
  const [search, setSearch] = useState("");
  const [c_batch, setbatches] = useState("on-going");
  const trainerId = localStorage.getItem("tokenId");
  const fetchBatchDetails = async () => {
    const response = await api.get(`${GET_BATCH_COUNT}/${trainerId}`);
    if (response.data) {
      setDatas(response.data);
    }
  };
  useEffect(() => {
    fetchBatchDetails();
  }, []);

  console.log(datas);

  return (
    <main className="profile">
      <div className="profile-top position-relative">
        <div className="left-circle position-absolute rounded-circle"></div>
        <div className="right-circle position-absolute rounded-circle"></div>
        <nav className="sticky-top d-flex align-items-center text-white p-2">
          <Link to="/home" className="text-decoration-none text-white">
            <MdOutlineKeyboardArrowLeft className="left-arrow" />
          </Link>
          <h5 className="my-0 fs-4">Profile</h5>
        </nav>
        <Link
          to="/edit"
          className="profile-inner text-decoration-none d-flex flex-column justify-content-center align-items-center"
        >
          <div className="center-circle rounded-circle d-flex flex-column justify-content-center align-items-center">
            <img className=" rounded-circle" src={mentor} alt="not found" />
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center text-white">
            <h4>{datas?.mentorName}</h4>
            <span>OA</span>
          </div>
        </Link>
      </div>
      <div className="card-view border d-flex flex-column m-3 p-3 gap-3 bg-primary">
        <section className="d-flex align-items-center w-100 gap-2 ">
          <article className="border d-flex align-items-center flex-column gap-3 py-3 w-100 bg-white">
            <div className="icons1 d-flex align-items-center justify-content-center rounded-circle bg-primary">
              <LuGraduationCap className=" fs-2 my-2 text-white" />
            </div>
            <h5>In Progress</h5>
            <p className="my-0 fs-5">{datas?.ongoing}</p>
          </article>
          <article className="border d-flex align-items-center flex-column gap-3 py-3 text-white w-100">
            <div className="icons2 d-flex align-items-center justify-content-center rounded-circle">
              <TbSquareRoundedCheckFilled className=" fs-2 my-2" />
            </div>
            <h5>Completed</h5>
            <p className="my-0 fs-5">{datas?.completed}</p>
          </article>
        </section>
        <Link
          to="/credit"
          className="my-0 text-decoration-none border d-flex align-items-center justify-content-center gap-2 p-3 shadow text-center text-white"
        >
          <p className="m-0">Credit Percentage(CP): 60%</p>{" "}
          <span>
            <AiFillInfoCircle className="fs-4" />
          </span>
        </Link>
      </div>
      <section className="d-flex justify-content-between m-3">
        <h4>Ongoing Course</h4>
        {/* <span className="text-secondary">View all</span> */}
      </section>
      {/* <OngoingCourses /> */}
      <div className=" p-2">
        <Group searchVal={search} view={c_batch} />
      </div>
    </main>
  );
};

export const OngoingCourses = () => {
  return (
    <section className="ongoing-process shadow m-3 d-flex bg-white align-items-center p-2 gap-3">
      <article>
        <img src={figma} alt="profile-img not found" />
      </article>
      <article className="p-1 w-100">
        <h5>Prototype Design UI</h5>
        <progress className="w-100" value="75" min="0" max="100" />
        <article className="d-flex justify-content-between">
          <span>Ongoing syllabus</span> <span>75%</span>
        </article>
      </article>
    </section>
  );
};
