import { Link } from "react-router-dom";

export const AddCourse = (props) => {
  return (
    <Link to="/syllabus" className="col-6 text-decoration-none">
      <img src={props.src} alt="not found" width="100%" />
      <h5
        className="text-center pt-3 pb-2 shadow my-3"
        style={{ borderRadius: "10px" }}
      >
        {props.topic}
      </h5>
    </Link>
  );
};
