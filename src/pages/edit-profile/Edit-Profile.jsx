import { Link } from "react-router-dom";
import "./_edit-profile.scss";

//icon
import { RiGraduationCapFill } from "react-icons/ri";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt";
import { AiFillCamera } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
//reusable component
import FormInput from "../../components/FormInput";
import { CommonNavBar } from "../mentor/Mentor";

export const Edit = () => {
  return (
    <main className="edit d-flex flex-column">
      <CommonNavBar to="/profile" name="Edit Profile" />
      <section className="d-flex justify-content-center my-3 align-items-center">
        <article className="identify bg-primary  position-relative rounded-circle">
          <h1 className="text-center position-absolute text-white m-0 fw-bold">
            I
          </h1>
          <section className="position-absolute fs-1 camera rounded-circle d-flex align-items-center">
            <AiFillCamera className="icon position-absolute text-primary" />
          </section>
        </article>
      </section>
      <section className="inner-card d-flex flex-column align-items-center">
        <article className="form d-flex align-items-center justify-content-center">
          <RiGraduationCapFill className="mx-2 fs-2 text-secondary icon" />
          <FormInput type="text" placeholder="Mentor Name" />
          <BiEdit className="mx-2 fs-4 text-secondary icon" />
        </article>
        <article className="form d-flex align-items-center justify-content-center">
          <MdEmail className="mx-2 fs-2 text-secondary icon" />
          <FormInput type="email" placeholder="Email Address" />
          <BiEdit className="mx-2 fs-4 text-secondary icon" />
        </article>
        <article className="form d-flex align-items-center justify-content-center">
          <RiLockPasswordFill className="mx-2 fs-2 text-secondary icon" />
          <FormInput type="password" placeholder="Password" />
          <BiEdit className="mx-2 fs-4 text-secondary icon" />
        </article>
        <article className="form d-flex align-items-center justify-content-center">
          <FaPhoneAlt className="mx-2 fs-2 text-secondary icon" />
          <FormInput type="text" placeholder="Phone" />
          <BiEdit className="mx-2 fs-4 text-secondary icon" />
        </article>
        <Link
          to="/profile"
          className="text-decoration-none btn bg-primary text-white w-100 fs-5 p-3 my-5 fw-bold text-center"
        >
          SAVE
        </Link>
      </section>
    </main>
  );
};
