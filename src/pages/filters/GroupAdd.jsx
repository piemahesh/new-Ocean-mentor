import { HiOutlineUserGroup } from "@react-icons/all-files/hi/HiOutlineUserGroup";
import { Link } from "react-router-dom";

export const GroupAdd = () => {
  return (
    <article className="groupadd">
      <Link
        to="/addcourse"
        className="fab shadow bg-primary d-flex flex-column justify-content-center align-items-center text-white text-decoration-none rounded-circle"
      >
        <HiOutlineUserGroup className="fs-3 text-white" />
        <span>Add Group</span>
      </Link>
    </article>
  );
};
