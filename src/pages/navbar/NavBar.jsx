import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoNotificationsOutline } from "react-icons/io5";
import logo from "../../assets/log-image/oa-a.svg";

export const NavBar = (props) => {
  return (
    <nav className="nav-icon sticky-top px-2 d-flex justify-content-between align-items-center bg-primary">
      <BiMenuAltRight
        className="altright mx-1 text-white"
        onClick={props.opensidebar}
      />
      <img src={logo} alt="Logo not found" />
      <Link to="/notifiy">
        <IoNotificationsOutline className=" fs-1 mx-1 text-white" />
      </Link>
    </nav>
  );
};
