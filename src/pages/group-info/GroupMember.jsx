// import figma from "../../assets/addcourse-image/figma.png";

import { Link } from "react-router-dom";
import api from "../../ApiService";
import { ABSENT } from "../../constant/ApiEndpoint";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const GroupMember = (props) => {
  const { id, name, photo, courseName } = props;
  const [loading, setLoding] = useState(false);
  const [error, setError] = useState(false);

  const handleAbsent = (studentId) => {
    setLoding(true);
    try {
      api
        .post(`${ABSENT}${studentId}`)
        .then((res) => {
          console.log(res);
          console.log(res.status);
          toast.success("notification send successfully", {
            position: "top-center",
          });
        })
        .catch((err) => {
          toast.error("notification not send", {
            position: "top-center",
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

  return (
    <>
      <main>
        <ToastContainer />
        <section
          key={id}
          className="group-member d-flex gap-3 align-items-center m-2"
        >
          <div className="imgContainer">
            <img className="rounded-circle  " alt="figma" src={photo} />
          </div>
          <section className="d-flex justify-content-between w-100">
            <article className="d-flex flex-column w-100">
              <h6>{name}</h6>
              <p>{courseName}</p>
            </article>
          </section>
          <Link
            to={`/studentattendance/${id}`}
            className="text-decoration-none"
          >
            view
          </Link>
          <button
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
            {loading && (
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
                style={{ position: "absolute", left: "2px", top: "30%" }}
              ></span>
            )}
            absent
          </button>
        </section>
      </main>
    </>
  );
};
