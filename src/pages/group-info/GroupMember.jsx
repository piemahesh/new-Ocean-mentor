// import figma from "../../assets/addcourse-image/figma.png";

import { Link } from "react-router-dom";
import api from "../../ApiService";
import { ABSENT } from "../../constant/ApiEndpoint";

export const GroupMember = (props) => {
  const { id, name, photo, courseName } = props;

  const handleAbsent = async (studentId) => {
    console.log("clicked");
    try {
      const resp = await api.post(`${ABSENT}${studentId}`);
      console.log(resp);
    } catch (error) {
      console.log("user not have token");
    }
  };

  return (
    <>
      <main >
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
          </section>
          <Link to={`/studentattendance/${id}`} className="text-decoration-none">view</Link>
          <button className="border-2 bg-gradient  border-primary rounded-2 markAbsent" onClick={() => handleAbsent(id)}>absent</button>
        </section>
      </main>

    </>
  );
};
