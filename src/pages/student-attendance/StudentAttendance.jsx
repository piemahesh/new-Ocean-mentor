import "./_student-attendance.scss";
import { Link, useNavigate, useParams } from "react-router-dom";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { FaShareSquare } from "react-icons/fa";
import { BiMessageRoundedDots } from "react-icons/bi";
import { FiPhoneCall, FiGithub } from "react-icons/fi";

// Present/Absence Chart
import { Bar } from "react-chartjs-2";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import UseQueryRe from "../../customHooks/UseQueryRe";
import { SPECIFIC_STUDENT, ABSENT } from "../../constant/ApiEndpoint";
import { OALoaders } from "../loaders/Loader";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

import api from "../../ApiService";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const option = {
  responsive: true,
  plugins: {
    legend: { position: "chartArea" },
    title: {
      display: true,
    },
  },
};
const labels = ["January", "February", "March", "April", "May", "June", "July"];

const labelDatas = {
  labels,
  datasets: [
    {
      label: "",
      data: [40, 30, 40, 50, 60, 70],
      backgroundColor: "green",
    },
    {
      label: "",
      data: [30, 20, 25, 10, 45, 60],
      backgroundColor: "blue",
    },
  ],
};

export const StudentAttendance = () => {
  const navigate = useNavigate();
  const { studentId } = useParams();
  const [loading, setLoding] = useState(false);
  const [error, setError] = useState(false);
  const { data, isLoading } = UseQueryRe(
    "one_Student",
    SPECIFIC_STUDENT,
    studentId
  );
  if (isLoading) {
    return <OALoaders />;
  }
  const handleAbsent = (studentId) => {
    setLoding(true);
    try {
      api
        .post(`${ABSENT}${studentId}`)
        .then((res) => {
          toast.success("notification send successfully", {
            position: "top-center",
          });
        })
        .catch((err) => {
          toast.error("notification not send", {
            position: "top-center",
            autoClose: 2000,
          });
          console.log("error happen while sending notification");
          setError(true);
        })
        .finally(() => {
          setTimeout(() => {
            setLoding(false);
            setError(false);
          }, 2000);
        });
    } catch (error) {
      console.log("user not have token");
    }
  };
  const datas = data || [];
  const goBack = () => {
    navigate(-1);
  };
  return datas.map((e) => {
    return (
      <main key={e._id} className="student-attendance">
        <ToastContainer style={{ padding: "30px" }} />
        {/* {console.log(e.address)}
        {console.log(e)} */}
        <div className="student-attendance-top position-relative">
          <div className="left-circle position-absolute rounded-circle"></div>
          <div className="right-circle position-absolute rounded-circle"></div>
          <nav className="sticky-top d-flex justify-content-between align-items-center text-white p-2">
            <article className="d-flex align-items-center">
              <Link
                onClick={goBack}
                className="text-decoration-none text-white"
              >
                <MdOutlineKeyboardArrowLeft className="left-arrow " />
              </Link>
              <h5 className="my-0 fs-4">Back</h5>
            </article>
            <Link
              to="/share"
              className="share text-decoration-none bg-white d-flex align-items-center gap-2 text-primary"
            >
              <span>Share</span>
              <FaShareSquare className="fs-5" />
            </Link>
          </nav>
          <div className="student-attendance-inner d-flex flex-column justify-content-center align-items-center">
            <div className="center-circle rounded-circle d-flex justify-content-center align-items-center">
              <img className=" rounded-circle h-100 w-100" src={e.photo} />
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center text-white">
              <h4>{e.name}</h4>
              <span>{e.email}</span>
            </div>
            <div className="d-flex gap-3 text-white mt-4  py-3">
              <a
                href={`tel:${e.mobileNumber}`}
                className="icons fs-4 d-flex align-items-center text-decoration-none text-white justify-content-center"
              >
                <FiPhoneCall />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://wa.me/${e.whatsappnumber}`}
                className="icons fs-4 d-flex align-items-center text-decoration-none text-white justify-content-center"
              >
                <BiMessageRoundedDots />
              </a>
              <article className="icons fs-4 d-flex align-items-center justify-content-center">
                <FiGithub />
              </article>
            </div>
          </div>
        </div>

        <div className="w-100 d-flex align-items-center justify-content-center mt-3 ">
          <button
            onClick={() => handleAbsent(e._id)}
            className="btn btn-primary"
          >
            notify
          </button>
        </div>
        {/* <button
          className="btn border-2 border"
          type="button"
          onClick={() => handleAbsent(id)}
          style={{
            height: "50px",
            paddingLeft: "20px",
            paddingRight: "20px",
            position: "relative",
          }}
        >
          absent
        </button> */}

        {/* Chart component import */}
        <div className="mt-5 mx-2">
          <div className="d-flex justify-content-between align-items-center text-primary fs-4 fw-bold">
            <span>Attendance</span>
            <span>50%</span>
          </div>
          <Bar
            options={option}
            data={labelDatas}
            className="bar-attendance p-2"
          />
        </div>
      </main>
    );
  });
};
