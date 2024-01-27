import "./_forgetpassword.scss";

// Router
import { Link, Outlet } from "react-router-dom";

// Images
import login from "../../assets/log-image/login.png";

// States Manage
import { useState } from "react";
// Reusable Component
import FormInput from "../../components/FormInput";

// Otp import
import Otp from "../../components/Otp";

// React Icons
import { MdEmail } from "react-icons/md";
import { BsFillEyeFill } from "react-icons/bs";
import { BiSolidHide } from "react-icons/bi";
import { IoIosArrowDropleftCircle } from "react-icons/io";

export const Forget = () => {
  return (
    <main className="forget d-flex flex-column position-relative">
      <img className="login-img" src={login} alt="login-img not found" />
      <Link to="/" className="text-decoration-none">
        <IoIosArrowDropleftCircle className="left-arrow position-absolute mx-2" />
      </Link>
      <section className="outer-card  bg-primary">
        <h3 className="text-center fs-3 my-4 text-white">Forget Password</h3>
        <section>
          <Outlet />
        </section>
      </section>
    </main>
  );
};

export const ForgetPassword = () => {
  return (
    <main className="forgetpswd">
      <div className="inner-card d-flex flex-column py-4 align-items-center bg-white">
        <p className="mx-4 my-3 text-primary fs-5 text-center">
          Please Enter Your Email Address To Receive a Verification
        </p>
        <article className="form d-flex align-items-center justify-content-center">
          <MdEmail className="mx-4 fs-1 text-primary" />
          <FormInput type="email" name="email" placeholder="Email Address" />
        </article>
        <Link
          to="/forget/verify"
          className="btn bg-primary text-white w-75 p-3 my-5 fs-5 fw-bold text-center"
        >
          SEND
        </Link>
      </div>
    </main>
  );
};

export const VerifyPassword = () => {
  return (
    <main className="verifypswd">
      <section className="inner-card d-flex flex-column py-4 align-items-center bg-white">
        <p className="mx-4 my-3 text-primary text-center">
          Please Enter Your Email Address To Receive a Verification
        </p>
        <article className="code d-flex fs-2 align-items-center justify-content-center">
          <Otp />
        </article>
        <Link className="text-decoration-none my-3">Resend Code</Link>
        <Link
          to="/forget/newpassword"
          className="btn bg-primary text-white w-75 p-3 my-3 fs-5 fw-bold text-center"
        >
          VERIFY
        </Link>
      </section>
    </main>
  );
};

export const NewPassword = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    newpassword: "",
    confirmpassword: "",
  });
  return (
    <main className="newpswd">
      <section className="inner-card d-flex flex-column py-4 align-items-center bg-white">
        <p className="mx-4 my-3 text-primary text-center">
          Your New Password Must Be Different from Previously Used Password
        </p>
        <article className="form d-flex align-items-center justify-content-center">
          <FormInput
            type={isVisible ? "text" : "password"}
            placeholder="New Password"
            name="newpassword"
            value={formData.newpassword}
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
        <article className="form d-flex align-items-center justify-content-center">
          <FormInput
            type={visible ? "text" : "password"}
            name="confirmpassword"
            value={formData.confirmpassword}
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
            placeholder="Confirm Password"
          />
          {visible && (
            <BsFillEyeFill
              onClick={() => {
                setVisible(!visible);
              }}
              className="mx-2 fs-2 text-secondary icon"
            />
          )}
          {!visible && (
            <BiSolidHide
              onClick={() => {
                setVisible(!visible);
              }}
              className="mx-2 fs-2 text-secondary icon"
            />
          )}
        </article>
        <Link
          to="/"
          onClick={() => {
            console.log(formData);
          }}
          className="btn bg-primary text-white w-75 p-3 my-4 fs-5 fw-bold text-center"
        >
          SAVE
        </Link>
      </section>
    </main>
  );
};
