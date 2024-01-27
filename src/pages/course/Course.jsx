import "./_course.scss";

import { Link } from "react-router-dom";
import { IoIosArrowDropleftCircle } from "@react-icons/all-files/io/IoIosArrowDropleftCircle";
import { AddCourse } from "../../components/AddCourse";

import figma from "../../assets/addcourse-image/figma.png";
import react from "../../assets/addcourse-image/react.png";
import node from "../../assets/addcourse-image/node.png";
import sass from "../../assets/addcourse-image/sass.png";
import javascript from "../../assets/addcourse-image/javscript.png";

export const Course = () => {
  return (
    <main className="course d-flex flex-column">
      <nav className="d-flex sticky-top justify-content-between align-items-center px-2 text-white ">
        <Link to="/home" className="text-decoration-none">
          <IoIosArrowDropleftCircle className="left-arrow text-white" />
        </Link>
        <h5 className="my-0 text-center ">Course</h5>
        <p className="invisible">empty</p>
      </nav>
      <div className="course-text text-white d-flex bg-primary justify-content-center">
        <h5>Lets Think Right One</h5>
      </div>
      <main className="row my-3 py-3 mx-2">
        <AddCourse topic="Figma" src={figma} />
        <AddCourse topic="React" src={react} />
        <AddCourse topic="Node" src={node} />
        <AddCourse topic="sass" src={sass} />
        <AddCourse topic="sass" src={javascript} />
        <AddCourse topic="sass" src={javascript} />
        <AddCourse topic="sass" src={sass} />
        <AddCourse topic="Node" src={node} />
        <AddCourse topic="sass" src={javascript} />
        <AddCourse topic="sass" src={sass} />
      </main>
    </main>
  );
};
