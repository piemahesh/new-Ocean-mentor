import "./_group-info.scss";
import { IoIosArrowDropleftCircle } from "@react-icons/all-files/io/IoIosArrowDropleftCircle";
import { BsSearch } from "react-icons/bs";
import { FaShareSquare, FaAward } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import figma from "../../assets/addcourse-image/figma.png";
import UseQueryRe from "../../customHooks/UseQueryRe";
import { GroupMember } from "./GroupMember";
import { GroupFooter } from "./GroupFooter";
import { BATCH_STUDENT } from "../../constant/ApiEndpoint";
import { useParams } from "react-router-dom";
import SetImg from "../../assets/course-byBatches/SetImg";
// import { OALoaders } from "../loaders/Loader";
import { Vortex } from "react-loader-spinner";
import { useEffect } from "react";
import useScreenshotShare from "../../components/html2canvas/HtmltoCanvas";

export const GroupInfo = () => {
  const navigate = useNavigate();
  const takeScreenshotAndShare = useScreenshotShare();

  const { batchId } = useParams();
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [completedPercentage, setCompletedPercentage] = useState(0);
  const { data, isError, isLoading, isFetching } = UseQueryRe(
    "MenotDetails",
    BATCH_STUDENT,
    `${batchId}`
  );
  const datas = data || [];
  useEffect(() => {
    try {
      datas.map((e) => {
        const syllabus = e.syllabus;
        const totalIsCompleted = syllabus.reduce(
          (acc, day) => acc + day.topics.length,
          0
        );
        const trueIsCompletedCount = countTrueIsCompleted(syllabus);
        const completedPercentage = Math.round(
          (trueIsCompletedCount / totalIsCompleted) * 100
        );
        setCompletedPercentage(completedPercentage);
      });
    } catch (err) {
      setCompletedPercentage(0);
    }
  }, [datas]);

  if (isLoading || isFetching) {
    return (
      <main className="loaders">
        <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={[
            "#0A73BE",
            "lightblue",
            "#0A73BE",
            "lightblue",
            "#0A73BE",
            "lightblue",
          ]}
        />
      </main>
    );
  }

  function countTrueIsCompleted(syllabus) {
    let trueCount = 0;

    syllabus.forEach((day) => {
      day.topics.forEach((topic) => {
        if (topic.isCompleted === true) {
          trueCount++;
        }
      });
    });

    return trueCount;
  }

  if (isError) {
    return <p>error............</p>;
  }
  const goBack = () => {
    navigate(-1);
  };

  const styles = {
    background: `radial-gradient(closest-side, white 79%, transparent 90% 100%),
        conic-gradient(rgba(0, 116, 218, 0.542) ${completedPercentage}%, white 0)`,
  };

  const [
    {
      admissionsData = [],
      _id,
      completedStatus,
      batchName,
      batchTime,
      courseName,
      trainerData,
      ...rest
    } = {},
  ] = datas || [];

  const filtered = admissionsData.filter((students) => {
    return students.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <main className="group-info " id="screenshot">
      <nav className="d-flex justify-content-between align-items-center text-primary px-2 ">
        <section className="d-flex align-items-center gap-2">
          <Link onClick={goBack} className="text-decoration-none">
            <IoIosArrowDropleftCircle className="left-arrow " />
          </Link>
          <h4 className="my-0">Group Info</h4>
        </section>

        <Link
          // to="/share"
          className="share text-decoration-none bg-primary d-flex align-items-center gap-2 py-1 px-2 text-white"
        >
          <span onClick={takeScreenshotAndShare}>Share</span>
          <FaShareSquare />
        </Link>
      </nav>
      <main key={_id} className="pb-5 ">
        <div className="d-flex flex-column justify-content-center align-items-center my-2 ">
          <section className="position-relative pic">
            <div
              className="progress-bar d-flex justify-content-center align-items-center"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style={styles}
            >
              <SetImg course={courseName?.toLowerCase()} />
            </div>
            <article className=" percentage position-absolute text-primary d-flex justify-content-center align-items-center">
              <span>{`${completedPercentage || 0}%`}</span>
            </article>
          </section>
          <h6>{batchName?.split("_")[0] || "course name"}</h6>
          <h6>
            {`${batchName?.split("_")[4] || "dd:"}-${
              batchName?.split("_")[3] || "mm"
            }-${batchName?.split("_")[1] || "yyyy"}`}
          </h6>
          <h5>{batchName?.split("_")[5] || "course timing"}</h5>

          <h2 className="my-2">{courseName || "Course Name"}</h2>
          <p className="my-0 text-primary fw-bold">
            Group :{admissionsData?.length} students
          </p>
          <Link
            to="/batch"
            className="mt-2 btn btn-primary d-flex gap-1 text-decoration-none"
          >
            <span>
              <FaAward className="fs-5" />
            </span>
            <span>BatchBoard</span>
          </Link>
        </div>

        <section className=" gap-4 py-2 d-flex flex-column justify-content-center align-items-center">
          <article className="range w-75 px-4 py-2 border bg-white">
            <progress
              className="w-100"
              value={completedPercentage || 0}
              min="0"
              max="100"
            />
            <article className=" d-flex justify-content-between ">
              <span>{completedStatus}</span>
              <span>{`${completedPercentage || 0}%`}</span>
            </article>
          </article>
        </section>
        <section className="d-flex  flex-column px-1 studCont ">
          <article className="d-flex justify-content-between m-3 fs-5">
            <span>{admissionsData.length} Students</span>
            {/* {console.log(admissionsData)} */}
            <Link>
              <BsSearch onClick={() => setShow(!show)} />
            </Link>
          </article>
          {show && (
            <section className="search border px-2 py-1 my-2 content d-flex align-items-center">
              <BsSearch className="fs-5 text-primary mx-1" />
              <input
                className="bg-transparent mx-2 my-1 w-100"
                type="text"
                placeholder="Search"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </section>
          )}

          <hr />
          {/* Group Member */}
          <section className="group-mentor d-flex gap-3 align-items-center m-2">
            <article className="group-mentor-inner rounded-circle">
              <img className="rounded-circle " alt="figma" src={figma} />
            </article>
            <section className="d-flex flex-column w-100 text-primary">
              <h3>{trainerData}</h3>
              <span>Mentor</span>
            </section>
          </section>
          {filtered.map((e, i) => {
            const { _id, courseName, name, photo } = e;
            return (
              <GroupMember
                key={i}
                id={_id}
                name={name}
                photo={photo}
                courseName={courseName}
              />
            );
          })}
        </section>
        {/* Footer */}
        <GroupFooter batchId={batchId} />
      </main>
    </main>
  );
};
