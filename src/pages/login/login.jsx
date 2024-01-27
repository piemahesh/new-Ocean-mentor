/* eslint-disable react/no-unescaped-entities */
import "./_login.scss";
import login from "../../assets/log-image/login.png";
import { BiUser } from "react-icons/bi";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

// import FormInput from "../../components/FormInput";
import { Link, useNavigate } from "react-router-dom";
import { Loading } from "../loading/Loading";
import { useEffect, useState } from "react";
import { MOBILE_END_MENTOR } from "../../constant/ApiEndpoint";
import api from "../../ApiService";

const apiEndpoint = MOBILE_END_MENTOR;
export const Login = () => {
  const [isVisible, setVisible] = useState(false);
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [load, setLoading] = useState(false);

  const isLogin = localStorage.getItem("tokenId");
  // console.log(isLogin)
  useEffect(() => {
    if (isLogin) {
      navigate("/home");
    }
  }, [isLogin]);

  const handleAddMobile = async () => {
    // console.log(username, password);
    setLoading(true);
    api
      .post(apiEndpoint, { username, password })
      .then((res) => {
        // if (res) {
        //   console.log(res.data._id);
        // }
        localStorage.setItem("tokenId", res.data._id);
        setLoading(false);
        navigate("/home");
        // refetch();
      })
      .catch((errs) => {
        console.log("mentor not found" + errs);
        localStorage.removeItem("tokenId");
        setLoading(false);
        setErr(!err);
      });
  };

  if (load) {
    return <Loading />;
  }

  return (
    <main className="login d-flex flex-column">
      <img className="login-img" src={login} alt="login-img not found" />
      <section className="outer-card  bg-primary">
        <h3 className="text-center fs-5 my-4 text-white">
          Login to your Account
        </h3>
        <section className="inner-card d-flex flex-column py-4 align-items-center bg-white">
          <main className="d-flex align-items-center flex-column">
            <div className="inputField">
              <span className="icon">
                <BiUser />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="inputField">
              <span className="icon">
                {isVisible ? (
                  <FiEye
                    onClick={() => {
                      setVisible(!isVisible);
                    }}
                  />
                ) : (
                  <FiEyeOff
                    onClick={() => {
                      setVisible(!isVisible);
                    }}
                  />
                )}
              </span>
              <input
                type={`${isVisible ? "text" : "password"}`}
                className="form-control"
                placeholder="Password"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
            </div>

            <p id="errorMentor">{err ? "mentor not found" : ""}</p>

            <section className="d-flex justify-content-between align-items-center remember my-4">
              <article className="d-flex align-items-center">
                <input type="checkbox" id="remember" />
                <label className="text-secondary mx-1" htmlFor="remember">
                  Remember me
                </label>
              </article>
              <Link to="/forget" className="text-decoration-none">
                Forget Password?
              </Link>
            </section>
            <input
              className="btn bg-primary text-white w-75 p-3 my-3 fw-bold text-center"
              type="submit"
              value="login"
              onClick={handleAddMobile}
            />
            <p className="text-secondary my-3">
              Don't have an account?&nbsp;
              <Link to="/register" className="text-decoration-none">
                Register Here
              </Link>
            </p>
          </main>
        </section>
      </section>
    </main>
  );
};
