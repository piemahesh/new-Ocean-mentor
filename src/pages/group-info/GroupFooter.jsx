import { Link } from "react-router-dom";
import { GiNotebook } from "react-icons/gi";
import { TbMessage2 } from "react-icons/tb";
import { RxUpdate } from "react-icons/rx";
import { MdTask } from "react-icons/md";

export const GroupFooter = (props) => {
  const { batchId } = props;

  return (
    <footer className="footer position-fixed bg-primary w-100 d-flex justify-content-between align-items-center position-absolute">
      <article className="mx-4 text-white">
        <Link
          to={`/notes/${batchId}`}
          className="text-decoration-none d-flex  flex-column align-items-center"
        >
          <GiNotebook className="fs-2 text-white" />
          <p className="m-0 text-white">Notes</p>
        </Link>
      </article>
      <article className="mx-4 text-white">
        <Link
          to="/whatsapp"
          className="text-decoration-none d-flex  flex-column align-items-center"
        >
          <TbMessage2 className="fs-2 text-white" />
          <p className="m-0 text-white">Whatsapp</p>
        </Link>
      </article>
      <article className="mx-4 text-white">
        <Link
          to={`/update/${batchId}`}
          className="text-decoration-none d-flex  flex-column align-items-center"
        >
          <RxUpdate className="fs-2 text-white" />
          <p className="m-0 text-white">Updates</p>
        </Link>
      </article>
      <article className="mx-4 text-white ">
        <Link
          to={`/task/${batchId}`}
          className="text-decoration-none d-flex  flex-column align-items-center"
        >
          <MdTask className="fs-2 text-white" />
          <p className="m-0 text-white">Task</p>
        </Link>
      </article>
    </footer>
  );
};
