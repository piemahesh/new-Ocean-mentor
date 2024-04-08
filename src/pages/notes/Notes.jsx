import "./_notes.scss";

import { BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import noteImg from "../../assets/notes-image/note.png";
import { useEffect, useState } from "react";
import { Description } from "../update/Update";
import api from "../../ApiService";
import { DEL_NOTES, GET_NOTES, PUT_NOTES } from "../../constant/ApiEndpoint";
import { OALoaders } from "../loaders/Loader";
import SyllabusComponent, {
  NoteBtnComponent,
} from "../../components/csvConverter/SyllabusComponent";

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
        setNotes(response.data);
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
    <main className="notes position-relative">
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
          const cal = new Date(e.date);
          const date = cal.getDate();
          const year = cal.getFullYear();
          const month = cal.getMonth() + 1;
          const dayFormat = `${date}/${month}/${year}`;
          return (
            <AddNotes
              key={i}
              id={e._id}
              title={`Notes for ${dayFormat}`}
              content={e.note}
              date={dayFormat}
            />
          );
        })}
      </div>
      <button
        className="fab position-absolute  d-flex justify-content-center align-items-center bg-primary text-white text-decoration-none rounded-circle"
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
// group info nav bar
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
        {props.name == "Notes" ? (
          <NoteBtnComponent />
        ) : (
          <SyllabusComponent syllabusData={props.syllabus} />
        )}
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

// add notes
export const AddNotes = (props) => {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const handleDelete = async () => {
    setLoader(true);
    await api
      .delete(`${DEL_NOTES}/${props.id}`)
      .finally(() => setLoader(false));
    setTimeout(() => {
      window.location.reload();
    }, 700);
  };
  return (
    <section className="note-text d-flex flex-column shadow justify-content-center m-auto p-3">
      <h6 className="fw-bold " style={{ color: "grey" }}>
        {props.title}
      </h6>
      <p className="my-0">{props.content}</p>
      {/* <span className="d-flex justify-content-end">{props.date}</span> */}
      <button
        className="w-25 btn btn-primary d-flex align-items-center justify-content-center gap-2 align-self-end border-2 rounded-2"
        onClick={handleDelete}
      >
        {loader ? <div className="spinner"></div> : <></>}
        delete
      </button>
    </section>
  );
};
