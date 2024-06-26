/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unused-vars */
import "./_update.scss";
// import Datepicker
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { GroupInfoNavbar } from "../notes/Notes";
import { json, useNavigate, useParams } from "react-router-dom";
// import UseQueryRe from "../../customHooks/UseQueryRe";
import {
  GET_DAY_SHEET,
  PUT_DAY_SHEET,
  PUT_NOTES,
} from "../../constant/ApiEndpoint";
import { useEffect } from "react";
import api from "../../ApiService";
import { Syllabus } from "./Syllabus";
import oceanImg from "../../assets/loading-image/Vector.svg";

export const Update = () => {
  const { batchId } = useParams();
  const navigate = useNavigate();
  const [datas, setdatas] = useState([]);
  const [loader, setLoader] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [orgSyllabus, setOrgSyllabus] = useState([]);
  const [selectedsyl, setSelectedSyl] = useState([]);
  const [description, setDescription] = useState(false);
  const [syllabus, setSyllabus] = useState([]);
  const [slyLoading, setSlyLoading] = useState(null);
  const [submitBtn, setSubmitBtn] = useState(false);

  function desc() {
    return setDescription(!description);
  }

  const goBack = () => {
    navigate(-1);
  };

  // create syllabus api
  const createSyllabus = () => {
    setLoader(true);
    const resp = api.put(`${PUT_DAY_SHEET}/${batchId}`, orgSyllabus);
    resp
      .then((res) => {
        if (res.status === 200) {
          window.location.reload();
        }
      })
      .finally(() => {
        setLoader(false);
      });
  };

  const fetchData = async () => {
    try {
      setSlyLoading(true);
      api
        .get(`${GET_DAY_SHEET}/${batchId}`)
        .then((e) => {
          setCourseName(e.data.courseName);
          setdatas(e.data);
          setSyllabus(e.data.syllabus);
        })
        .finally(() => {
          setLoader(false);
        });
      setTimeout(() => setSlyLoading(false), 1000);
    } catch (err) {
      console.log("datas not found");
    }
  };
  useEffect(() => {
    const selectedSyllabus = Syllabus[courseName.toLowerCase()];
    try {
      if (selectedSyllabus) {
        setOrgSyllabus(selectedSyllabus);
      }
    } catch (err) {
      console.log("syllabus not found");
    }
    fetchData();
  }, [courseName]);

  const handleUpdateSyllabus = (dayInd, sylInd, value) => {
    const date = new Date();
    const localData = syllabus;
    localData[dayInd].topics[sylInd].isCompleted = value;
    localData[dayInd].topics[sylInd].date = date;
    setOrgSyllabus({ syllabus: localData });
    // console.log({ syllabus: localData });
  };

  if (slyLoading == false && syllabus.length === 0) {
    return (
      <div className="syllabusPopup">
        <div>
          <img src={oceanImg} alt="img" />
        </div>
        <p>Do you want to create syllabus?</p>
        <div>
          <button onClick={createSyllabus}>yes</button>
          <button onClick={goBack}>no</button>
        </div>
      </div>
    );
  }

  return (
    <form
      className="update"
      onSubmit={(e) => {
        e.preventDefault();
        createSyllabus();
      }}
    >
      <GroupInfoNavbar name="Updates" syllabus={syllabus} />
      <div className="list-syllabus m-3 pb-5 gap-4 d-flex flex-column p-2">
        {syllabus.map((dayData, dayInd) => {
          return (
            <main onSubmit={createSyllabus} key={dayInd} className="day-data">
              <p className="day">{`Day ${dayData.day_number}`}</p>
              <ol className="order">
                {[...dayData.topics].map((sylData, sylInd) => {
                  return (
                    <li key={sylInd} className="listCont">
                      <input
                        type="checkbox"
                        className="checkBox"
                        checked={sylData.isCompleted}
                        id={`${dayInd}/${sylInd}`}
                        onClick={() => {
                          setSubmitBtn(true);
                        }}
                        onChange={() =>
                          handleUpdateSyllabus(
                            dayInd,
                            sylInd,
                            !sylData.isCompleted
                          )
                        }
                      />
                      <label
                        htmlFor={`${dayInd}/${sylInd}`}
                        className={`${sylData.isCompleted ? "topic" : "none"}`}
                      >
                        {sylData.topic}
                      </label>
                    </li>
                  );
                })}
              </ol>
              <hr />
            </main>
          );
        })}
      </div>
      {submitBtn ? (
        <div className="w-100 d-flex align-items-center justify-content-center">
          <button className="btn gap-2 px-4 btn-primary d-flex align-items-center justify-content-center mb-5 position-fixed my-auto">
            {loader ? <div className="spinner"></div> : <></>}
            submit
          </button>
        </div>
      ) : (
        <></>
      )}
    </form>
  );
};

// ...........................................................................
// export const SubmitBtn = (props) => {
//   const loader = props.loader;
//   const { createSyllabus } = props;
//   return (
//     <main className="w-100 d-flex align-items-center justify-content-center">
//       <button
//         // onClick={() => {
//         //   createSyllabus();
//         // }}
//         className="submitBtn"
//       >
//         {loader ? <div className="spinner"></div> : <></>}
//         submit
//       </button>
//     </main>
//   );
// };

export const Description = (props) => {
  const navigate = useNavigate();
  const [note, setNote] = useState("");
  const [todayDate, setDate] = useState(new Date());
  const { batchId } = props;
  const goBack = () => {
    props.setOpenNote(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api
      .post(`${PUT_NOTES}/${batchId}`, { note, date: todayDate })
      .then((res) => {
        console.log(res);
        setTimeout(() => {
          window.location.reload();
          // navigate(0);
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="description  bg-white shadow d-flex flex-column "
    >
      <section className="d-flex justify-content-end m-3">
        <article className="date d-flex align-items-center w-100 justify-content-center text-white gap-2 ">
          <button
            onClick={goBack}
            className="btn  btn-primary"
            style={{ width: "fit-content" }}
          >
            go back
          </button>
          <input
            type="date"
            defaultValue={todayDate}
            onChange={(e) => {
              console.log(e.target.value);
              setDate(e.target.value);
            }}
            required
          />
        </article>
      </section>
      <article className="m-3 d-flex flex-column gap-4 justify-content-center align-items-center">
        <textarea
          className="border-primary"
          onChange={(e) => {
            setNote(e.target.value);
          }}
          required
        ></textarea>
        <button className="btn btn-primary my-2 p-2 fs-5" type="submit">
          Submit
        </button>
      </article>
    </form>
  );
};
