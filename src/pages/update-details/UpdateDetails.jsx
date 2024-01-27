import "./_update-details.scss";

//Image file
import regimg from "../../assets/reg-image/reg-img.avif";

//React-icons
import { BsTelephoneFill, BsPerson } from "react-icons/bs";
import { AiFillCamera } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";

//Reusable Component
import FormInput from "../../components/FormInput";

//Router
import { Link } from "react-router-dom";

export const UpdateDetails = () => {
  return (
    <main className="UpdateDetails d-flex flex-column">
      <img className="reg-img" src={regimg} alt="Reg-img not found" />

      {/*outer card*/}
      <section className="outer-card  bg-primary">
        <h3 className="text-center fs-5 my-4 text-white">
          Update your details
        </h3>
        {/*inner card*/}
        <section className="inner-card d-flex flex-column py-4 align-items-center bg-white">
          <section className="d-flex justify-content-center my-3 align-items-center">
            <article className="identify bg-primary  position-relative rounded-circle">
              <IoPersonOutline className="icon fs-1 text-center position-absolute text-white m-0 fw-bold" />
              <section className="position-absolute fs-1 camera rounded-circle d-flex align-items-center">
                <AiFillCamera className="icon position-absolute text-primary" />
              </section>
            </article>
          </section>

          {/*Form input */}
          <article className="form d-flex align-items-center justify-content-center">
            <FormInput
              type="text"
              placeholder="Mentor name"
              name="mentor name"
            />
            <BsPerson className="mx-2 fs-1 text-secondary icon" />
          </article>
          <article className="form d-flex align-items-center justify-content-center">
            <FormInput
              type="tel"
              placeholder="Phone number"
              name="phone number"
            />
            <BsTelephoneFill className="mx-2 fs-2 text-secondary icon" />
          </article>

          {/*inner card btn*/}
          <Link
            to="/home"
            className="btn bg-primary text-white w-75 p-3 my-4 fw-bold text-center"
          >
            SAVE & CONTINUE
          </Link>
        </section>
      </section>
    </main>
  );
};
