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

export const AnotherMentorPage = () => {
  // here we use useparams => bcz we need to get the mentor id from the path
  const { mentorId } = useParams();
  const { data, isError } = UseQueryRe(
    "batchByMentor",
    BATCH_BY_TRAINER_ID,
    mentorId
  );

  // eslint-disable-next-line no-unused-vars
  const datas = data || [];

  if (isError) {
    return <p>error...........</p>;
  }

  return (
    <main className="another-mentor">
      <CommonNavBar to="/mentor" name="Go To Home" />

      <FilterSection />
      <BatchDivision />
      <article className="mx-3 scroll ">
        {data &&
          data.map((e) => {
            const { _id, batchData, name } = e;
            return (
              <div key={_id}>
                <MentorList mentorName={name} />
                {batchData.map((e) => {
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
