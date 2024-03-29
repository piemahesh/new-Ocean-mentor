import "./_another-mentor.scss";
import boy from "../../assets/profile-image/boy.avif";
import UseQueryRe from "../../customHooks/UseQueryRe";
import { BATCH_BY_TRAINER_ID } from "../../constant/ApiEndpoint";
import { CommonNavBar } from "../mentor/Mentor";
import { BatchDivision } from "../filters/BatchDivision";
import { FilterSection } from "../filters/FilterSection";
import { IoCaretDownSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Courses } from "../../components/group/Courses";
import { useState } from "react";
import { useSelector } from "react-redux";

export const AnotherMentorPage = () => {
  // here we use useparams => bcz we need to get the mentor id from the path
  const { mentorId } = useParams();
  const filter = useSelector((state) => state.filter.value);
  const checked = useSelector((state) => state.courseFilter.value);
  const dateFilter = useSelector((state) => state.dateFilter.value);

  const { data, isError } = UseQueryRe(
    "batchByMentor",
    BATCH_BY_TRAINER_ID,
    mentorId
  );

  const [searching, setSearching] = useState("");
  const [view, setView] = useState("on-going");

  // eslint-disable-next-line no-unused-vars
  const datas = data || [];

  if (isError) {
    return <p>error...........</p>;
  }
  const [{ batchData = [] } = []] = data || [];

  if (filter.sort === "New") {
    batchData.sort((a, b) => conv(b.date) - conv(a.date));
  } else if (filter.sort === "Old") {
    batchData.sort((a, b) => conv(a.date) - conv(b.date));
  }

  function conv(d) {
    const [day, month, year] = d.split("-");
    return new Date(`${year}-${month}-${day}`);
  }

  const filt = batchData
    .filter((items) => {
      return items.courseName.toLowerCase().includes(searching);
    })
    .filter((items) => {
      return items.completedStatus.includes(view);
    })
    .filter((course) => {
      return checked.course.includes(course.courseName.toLowerCase());
    });

  function filterBatchDataByDate(batchData, startDate, endDate) {
    if ((startDate && endDate) != "") {
      const filteredData = batchData.filter((item) => {
        const [day = [0], month = [1], year = [2]] = item.date.split("-");
        const formattedDate = month + "-" + day + "-" + year;
        const itemDate = new Date(formattedDate);
        const filterStartDate = new Date(startDate);
        const filterEndDate = new Date(endDate);
        // console.log(itemDate + " " + filterStartDate + " " + filterEndDate);
        return itemDate >= filterStartDate && itemDate <= filterEndDate;
      });
      return filteredData;
    } else {
      return batchData;
    }
  }

  const startDate = dateFilter.from;
  const endDate = dateFilter.to;

  const filteredBatchData = filterBatchDataByDate(filt, startDate, endDate);
  // console.log(filteredBatchData);

  return (
    <main className="another-mentor">
      <CommonNavBar to="/mentor" names="Mentor Batches" />

      <FilterSection />
      <BatchDivision setSearching={setSearching} setView={setView} />
      <article className="mx-3 scroll ">
        {data &&
          data.map((e) => {
            const { _id, batchData, name } = e;
            return (
              <div key={_id}>
                <MentorList mentorName={name} />

                {filteredBatchData.map((e) => {
                  const {
                    _id,
                    completedStatus,
                    date,
                    batchTime,
                    courseName,
                    ...rest
                  } = e;

                  return (
                    <div key={_id}>
                      <Courses
                        id={_id}
                        status={completedStatus}
                        date={date}
                        batchTime={batchTime}
                        courseName={courseName.toLowerCase()}
                        rest={rest}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
      </article>
    </main>
  );
};

export const MentorList = (props) => {
  return (
    <main className="mentor-list position-sticky d-flex justify-content-center p-2 ">
      <div className="d-flex px-2 py-1 align-items-center ">
        <img className="rounded-circle" src={boy} alt="not found" />
        <h5 className="m-0 text-primary">{props.mentorName}</h5>
        <Link to="/mentor" className="text-decoration-none">
          {" "}
          <IoCaretDownSharp className="mx-2 fs-4  text-primary " />
        </Link>
      </div>
    </main>
  );
};
