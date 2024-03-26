import "./_notes.scss";

import { BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import noteImg from "../../assets/notes-image/note.png";
import { useEffect, useState } from "react";
import { Description } from "../update/Update";
import api from "../../ApiService";
import { GET_NOTES, PUT_NOTES } from "../../constant/ApiEndpoint";
import { OALoaders } from "../loaders/Loader";

export const Notes = () => {
  const { batchId } = useParams();
  const [opennote, setOpenNote] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await api.get(`${GET_NOTES}/${batchId}`);
        setNotes(response.data.notes);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [batchId]);

  const newNotes = notes || [];

  if (loading) {
    return <OALoaders />;
  }

  if (error) {
    return <div>error.....</div>;
  }

  return (
    <main className="notes">
      <GroupInfoNavbar name="Notes" />
      <div className="notes-add d-flex flex-column justify-content-center align-items-center gap-2">
        {notes.length === 0 ? (
          <div className="d-flex emptyNotes flex-column justify-content-center align-items-center gap-2">
            <img src={noteImg} alt="note-img not found" />
            <h5 className="text-secondary">No Notes exist here</h5>
          </div>
        ) : (
          <h5></h5>
        )}
      </div>

      <div className="p-3 notes-add">
        {notes.length > 0 ? <h1 className="py-2">All notes</h1> : <h1></h1>}
        {newNotes.map((e, i) => {
          const cal = new Date(e.startDate);
          const date = cal.getDate();
          const year = cal.getFullYear();
          const month = cal.getMonth() + 1;
          const dayFormat = `${date}/${month}/${year}`;
          return (
            <AddNotes
              key={i}
              index={i}
              title={`Notes for ${dayFormat}`}
              content={e.message}
              date={dayFormat}
              delNotes={delNotes}
            />
          );
        })}
      </div>
      <button
        className="fab position-sticky shadow d-flex justify-content-center align-items-center bg-primary text-white text-decoration-none rounded-circle"
        onClick={() => {
          setOpenNote(!opennote);
        }}
      >
        +
      </button>
      {opennote && <Description batchId={batchId} setOpenNote={setOpenNote} />}
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
      <button className="w-25 align-self-end border-2 rounded-2">delete</button>
    </section>
  );
};
