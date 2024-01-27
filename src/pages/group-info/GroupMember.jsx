// import figma from "../../assets/addcourse-image/figma.png";

import { Link } from "react-router-dom";

export const GroupMember = (props) => {
  const { id, name, photo, courseName } = props;
  return (
    <Link to={`/studentattendance/${id}`} className="text-decoration-none">
      <section
        key={id}
        className="group-member d-flex gap-3 align-items-center m-2"
      >
        <div className="imgContainer">
          <img className="rounded-circle  " alt="figma" src={photo} />
        </div>
        <section className="d-flex justify-content-between w-100">
          <article className="d-flex flex-column w-100">
            <h5>{name}</h5>
            <span>{courseName}</span>
          </article>
          <span>Present</span>
        </section>
      </section>
    </Link>
  );
};
