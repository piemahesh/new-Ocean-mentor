import "./_notes.scss";

import { BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import note from "../../assets/notes-image/note.png";
import { useState } from "react";
import { Description } from "../update/Update";

export const Notes = () => {
  const [opennote, setOpenNote] = useState();
  // function Open(){
  //   return setOpenNote(!opennote)
  // }
  return (
    <main className="notes">
      <GroupInfoNavbar name="Notes" />
      <div className="notes-add d-flex flex-column justify-content-center align-items-center gap-2">
        <img src={note} alt="note-img not found" />
        <h5 className="text-secondary">No Notes exist here</h5>
      </div>

      <div className="p-3 notes-add">
        <h1 className="py-2">All notes</h1>
        <AddNotes
          title="Ocean Project"
          content="Front end develop"
          date="20/07/2023"
        />
      </div>
      <button
        className="fab position-sticky shadow d-flex justify-content-center align-items-center bg-primary text-white text-decoration-none rounded-circle"
        onClick={() => {
          setOpenNote(!opennote);
        }}
      >
        +
      </button>
      {opennote && <Description />}
    </main>
  );
};

export const GroupInfoNavbar = (props) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <nav className="groupinfo-navbar sticky-top shadow d-flex justify-content-between align-items-center text-white px-2 bg-primary">
      <article className="d-flex align-items-center">
        <Link onClick={goBack} className="text-decoration-none text-white">
          <MdOutlineKeyboardArrowLeft className="left-arrow " />
        </Link>
        <h5 className="my-0 fs-4">{props.name}</h5>
      </article>
      <article className="d-flex gap-3">
        <Link to="" className="text-decoration-none text-white">
          <BsSearch className="fs-2 " />
        </Link>
        <Link to="" className="text-decoration-none text-white">
          <BsThreeDotsVertical className="fs-2 " />
        </Link>
      </article>
    </nav>
  );
};

export const AddNotes = (props) => {
  return (
    <section className="note-text d-flex flex-column shadow justify-content-center m-auto p-3">
      <h5 className="fw-bold">{props.title}</h5>
      <p className="my-0">{props.content}</p>
      <span className="d-flex justify-content-end">{props.date}</span>
    </section>
  );
};
