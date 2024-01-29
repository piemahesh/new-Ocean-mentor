/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unused-vars */
import "./_update.scss";

// import Datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { MdDateRange } from "react-icons/md";
import { useState } from "react";
import { GroupInfoNavbar } from "../notes/Notes";
import { json, useNavigate, useParams } from "react-router-dom";
// import UseQueryRe from "../../customHooks/UseQueryRe";
import { GET_DAY_SHEET, PUT_DAY_SHEET } from "../../constant/ApiEndpoint";
import { useEffect } from "react";
import api from "../../ApiService";
import { Syllabus } from "./Syllabus";
import oceanImg from "../../assets/loading-image/Vector.svg";

export const Update = () => {
  const { batchId } = useParams();
  const navigate = useNavigate();
  const [datas, setdatas] = useState([]);
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
    const resp = api.put(`${PUT_DAY_SHEET}/${batchId}`, orgSyllabus);
    resp.then((res) => {
      if (res.status === 200) {
        navigate(0);
      }
    });
  };
  const fetchData = () => {
    try {
      setSlyLoading(true);
      const resp = api.get(`${GET_DAY_SHEET}/${batchId}`);
      resp.then((e) => {
        setCourseName(e.data.courseName);
        setdatas(e.data);
        setSyllabus(e.data.syllabus);
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
        // console.log(`Syllabus for ${courseName}:`, selectedSyllabus);
      }
    } catch (err) {
      console.log("syllabus not found");
    }
    return () => fetchData();
  }, [courseName]);

  const handleUpdateSyllabus = (dayInd, sylInd, value) => {
    const localData = syllabus;
    localData[dayInd].topics[sylInd].isCompleted = value;
    setOrgSyllabus({ syllabus: localData });
    // console.log(orgSyllabus);
  };

  // if (slyLoading) {
  //   return <h1>Loading...||||</h1>;
  // }

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
    <main className="update">
      <GroupInfoNavbar name="Updates" />

      {/* {selectedsyl.length !== 0 && <Description onclose={desc} />} */}
      <div className="list-syllabus m-3 pb-5 gap-4 d-flex flex-column p-2">
        {submitBtn ? <SubmitBtn createSyllabus={createSyllabus} /> : ""}
        {syllabus.map((dayData, dayInd) => {
          return (
            <div key={dayInd} className="day-data">
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
            </div>
          );
        })}

        {/* {datas.map((e, i) => {
          const { syllabus } = e;
          return (
            <div key={i}>
              {syllabus.map((e, i) => {
                const { day_number, topics } = e;
                return (
                  <div key={i}>
                    <ListSyllabus
                      index={i}
                      day_number={day_number}
                      topics={topics}
                    />
                  </div>
                );
              })}
            </div>
          );
        })} */}
      </div>
    </main>
  );
};

// ...........................................................................
export const SubmitBtn = (props) => {
  const { createSyllabus } = props;
  return (
    <button
      onClick={() => {
        createSyllabus();
      }}
      className="submitBtn"
    >
      submit
    </button>
  );
};
// export const ListSyllabus = (props) => {
//   const { index, day_number, topics } = props;
// };

export const Description = (props) => {
  const { handleNotes, ...rest } = props;

  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const goBack = () => {
    // console.log({ startDate, message });
    handleNotes({ startDate, message });
    navigate(0);
  };
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="description bg-white shadow d-flex flex-column position-absolute">
      <section className="d-flex justify-content-end m-3">
        <article className="date d-flex align-items-center text-white gap-2 px-2">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <MdDateRange className="fs-4 text-primary" />
        </article>
      </section>
      <article className="m-3 d-flex flex-column gap-4 justify-content-center align-items-center">
        <textarea
          className="border-primary"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
        <button className="btn btn-primary my-2 p-2 fs-5" onClick={goBack}>
          Submit
        </button>
      </article>
    </div>
  );
};

{
  /* <main className="update">
      <GroupInfoNavbar name="Updates" />

      {selectedsyl.length !== 0 && <Description onclose={desc} />}
      <div className="list-syllabus m-3 gap-4 d-flex flex-column p-2">
        {syllabus.map((value, index) => (
          <ListSyllabus
            key={index}
            text={value}
            index={index}
            selectedHandler={selectedHandler}
          />
        ))}
      </div>
    </main> */
}
// const datas = data || [];
//         () => setSyllabuss(datas);
//         datas.map((e) => {
//           const { syllabus } = e;
//           syllabus.map((e) => {
//             const { day_number, topics } = e;
//             console.log(day_number);
//             topics.map((e) => {
//               console.log(e.topic, e.isCompleted);
//             });
//           });
//         });

// const { data, isSuccess, isError } = UseQueryRe(
//   "daysheet",
//   GET_DAY_SHEET,
//   batchId
// );
// setdatas(data);
// console.log(syllabuss);
// const c_course = {
//   syllabus: [
//     {
//       day_number: 1,
//       topics: [
//         { topic: "Introduction to python", isCompleted: false },
//         { topic: "next to python", isCompleted: true },
//       ],
//     },
//   ],
// };
{
  /* {datas.map((value, index) => (
          <ListSyllabus
            key={index}
            topo={value}
            index={index}
            selectedHandler={selectedHandler}
          />
        ))} */
}
