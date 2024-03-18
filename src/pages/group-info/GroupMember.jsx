// import figma from "../../assets/addcourse-image/figma.png";

import { Link } from "react-router-dom";

import logo from "../../assets/log-image/oa-a.svg";

import "react-toastify/dist/ReactToastify.css";

export const GroupMember = (props) => {
  const { id, name, photo, courseName } = props;

  return (
    <>
      <main>
        <Link
          to={`/studentattendance/${id}`}
          key={id}
          className="group-member text-decoration-none border-bottom rounded-1 p-1 d-flex gap-3 align-items-center m-2"
        >
          <div className="imgContainer">
            <img className="rounded-circle  " alt="figma" src={photo} />
          </div>
          <section className="d-flex align-items-center justify-content-between w-100">
            <article className="d-flex flex-column w-100">
              <h6>{name}</h6>
              <p>{courseName}</p>
              {/* <Link className="">view</Link> */}
            </article>
            <div
              className="bg-primary p-1 d-flex align-items-center justify-content-center rounded-circle"
              style={{ height: "35px", width: "35px" }}
            >
              <img
                src={logo}
                alt="logo"
                className="h-100 w-100"
                style={{ objectFit: "contain" }}
              />
            </div>
          </section>
        </Link>
      </main>
    </>
  );
};
