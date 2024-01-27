import { Link } from "react-router-dom";
import "./_addgroup.scss";

//icon

import { MdDateRange } from "@react-icons/all-files/md/MdDateRange";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoCaretDownSharp, IoDocumentsSharp } from "react-icons/io5";
import { BsFillPersonPlusFill } from "react-icons/bs";
//reusable component
import FormInput from "../../components/FormInput";

export const AddGroup = () => {
  return (
    <main className="add-group d-flex flex-column">
      <nav className="d-flex justify-content-between align-items-center px-2 bg-primary text-white ">
        <Link to="/home" className="text-decoration-none">
          <IoIosArrowDropleftCircle className="left-arrow text-white" />
        </Link>
        <h5 className="my-0 text-center ">Add Groups</h5>
        <p className="invisible">empty</p>
      </nav>
      <div className="add d-flex mt-4 mx-2 justify-content-end">
        <section className="add bg-primary text-white d-flex px-3 py-2 justify-content-center gap-2 my-3 align-items-center">
          <BsFillPersonPlusFill />
          <Link className="text-decoration-none text-white">Add Contact</Link>
        </section>
      </div>
      <section className="inner-card d-flex flex-column align-items-center">
        <article className="form d-flex align-items-center justify-content-center">
          <IoDocumentsSharp className="mx-2 fs-2 text-secondary icon" />
          <FormInput type="text" placeholder="Course Name" />
          <IoCaretDownSharp className="mx-2 fs-4 text-secondary icon" />
        </article>
        <article className="form d-flex align-items-center justify-content-center">
          <MdDateRange className="mx-2 fs-2 text-secondary icon" />
          <FormInput type="email" placeholder="Starting date" />
          <IoCaretDownSharp className="mx-2 fs-4 text-secondary icon" />
        </article>
        <article className="form d-flex align-items-center justify-content-center">
          <AiFillGithub className="mx-2 fs-2 text-secondary icon" />
          <FormInput type="text" placeholder="Github Link" />
          <p className="invisible">empty</p>
        </article>
        <Link
          to="/group"
          className="btn text-decoration-none bg-primary text-white w-75 fs-5 p-3 my-5 fw-bold text-center"
        >
          CREATE GROUP
        </Link>
      </section>
    </main>
  );
};
