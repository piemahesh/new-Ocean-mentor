import { Link } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import { BiQrScan } from "react-icons/bi";
import { GiStabbedNote } from "react-icons/gi";

export const FooterHoming = () => {
  return (
    <footer className="footer position-fixed bg-primary w-100 d-flex justify-content-between align-items-center position-absolute">
      <article className="mx-4 text-white">
        <Link
          to="/profile"
          className="text-decoration-none d-flex  flex-column align-items-center"
        >
          <IoPersonSharp className="fs-2 text-white" />
          <p className="m-0 text-white">Profile</p>
        </Link>
      </article>
      <article className="scanner bg-white rounded-circle p-2 position-absolute">
        <Link
          to="/qr-scan"
          className="d-flex justify-content-center align-items-center bg-primary rounded-circle p-2 text-white"
        >
          <BiQrScan />
        </Link>
      </article>
      <article className="mx-4 text-white ">
        <Link
          to="/course"
          className="text-decoration-none d-flex  flex-column align-items-center"
        >
          <GiStabbedNote className="fs-2 text-white" />
          <p className="m-0 text-white">Courses</p>
        </Link>
      </article>
    </footer>
  );
};
