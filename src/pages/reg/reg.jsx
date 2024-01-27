import "./_reg.scss";

//Image file
import regimg from "../../assets/reg-image/reg-img.avif";

//React-icons
import { BsFillEyeFill, BsPerson } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BiSolidHide } from "react-icons/bi";

//Reusable Component
import FormInput from "../../components/FormInput";

//Router
import { Link } from "react-router-dom";
import { useState } from "react";

export const Register = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  return (
    <main className="register d-flex flex-column">
      <img className="reg-img" src={regimg} alt="Reg-img not found" />

      {/*outer card*/}
      <section className="outer-card  bg-primary">
        <h3 className="text-center fs-5 my-4 text-white">Create New Account</h3>

        {/*inner card*/}
        <section className="inner-card d-flex flex-column py-4 align-items-center bg-white">
          {/*Form input */}
          <article className="form d-flex align-items-center justify-content-center">
            <FormInput
              type="text"
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={(e) => {
                setFormData({ ...formData, [e.target.name]: e.target.value });
              }}
            />
            <BsPerson className="mx-2 fs-1 text-secondary icon" />
          </article>
          <article className="form d-flex align-items-center justify-content-center">
            <FormInput
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, [e.target.name]: e.target.value });
              }}
            />
            <MdEmail className="mx-2 fs-2 text-secondary icon" />
          </article>
          <article className="form d-flex align-items-center justify-content-center">
            <FormInput
              type={isVisible ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={(e) => {
                setFormData({ ...formData, [e.target.name]: e.target.value });
              }}
            />
            {isVisible && (
              <BsFillEyeFill
                onClick={() => {
                  setIsVisible(!isVisible);
                }}
                className="mx-2 fs-2 text-secondary icon"
              />
            )}
            {!isVisible && (
              <BiSolidHide
                onClick={() => {
                  setIsVisible(!isVisible);
                }}
                className="mx-2 fs-2 text-secondary icon"
              />
            )}
          </article>

          {/*inner card btn*/}
          <Link
            to="/updatedetails"
            onClick={() => console.log(formData)}
            className="btn bg-primary text-white w-75 p-3 my-4 fw-bold text-center"
          >
            REGISTER
          </Link>
          <p className="text-secondary my-3">
            Dont have an account?&nbsp;
            <Link to="/" className="text-decoration-none">
              Login Here
            </Link>
          </p>
        </section>
      </section>
    </main>
  );
};
