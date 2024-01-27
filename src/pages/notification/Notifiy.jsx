import "./_notifiy.scss";

import { Link } from "react-router-dom";

import { IoIosArrowDropleftCircle } from "@react-icons/all-files/io/IoIosArrowDropleftCircle";
import { BiMessageRoundedDetail } from "react-icons/bi";

export const Notifiy = () => {
  return (
    <main className="notifiy d-flex flex-column">
      <nav className="d-flex justify-content-between align-items-center px-2 bg-primary text-white ">
        <Link to="/home" className="text-decoration-none">
          <IoIosArrowDropleftCircle className="left-arrow text-white" />
        </Link>
        <h5 className="my-0 text-center ">Notification</h5>
        <p className="invisible">empty</p>
      </nav>
      <div className="msg d-flex flex-column justify-content-center align-items-center">
        <section className="msg-text d-flex flex-column align-items-center text-secondary">
          <BiMessageRoundedDetail className="icon" />
          <p className="fs-5">No Message exist here</p>
        </section>
      </div>
    </main>
  );
};
