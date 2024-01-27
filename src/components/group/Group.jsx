import "./_group.scss";
import UseQueryRe from "../../customHooks/UseQueryRe";
import { BATCH_BY_TRAINER_ID } from "../../constant/ApiEndpoint";
import { Courses } from "./Courses";
import { useSelector } from "react-redux";

export const Group = (props) => {
  const { searchVal, view } = props;
  const filter = useSelector((state) => state.filter.value);
  const checked = useSelector((state) => state.courseFilter.value);
  
  const trainerId = localStorage.getItem("tokenId");
  const { data, isError } = UseQueryRe(
    "batchDetails",
    BATCH_BY_TRAINER_ID,
    trainerId
  );

  if (isError) {
    return <div>error..........</div>;
  }
  function conv(d) {
    const [day, month, year] = d.split("-");
    return new Date(`${year}-${month}-${day}`);
  }
  return (
    <>
      {data &&
        data.map((e) => {
          {/* console.log(e) */}
          const { _id, batchData } = e;
          if (filter.sort === "New") {
            batchData.sort((a, b) => conv(b.date) - conv(a.date));
          } else if (filter.sort === "Old") {
            batchData.sort((a, b) => conv(a.date) - conv(b.date));
          }
          const filtering = batchData
            .filter((item) =>
              item.completedStatus.toLowerCase().includes(view.toLowerCase())
            )
            .filter((search) =>
              search.courseName.toLowerCase().includes(searchVal.toLowerCase())
            )
            .filter((course) =>
              checked.course.includes(course.courseName.toLowerCase())
            );

          return (
            <div key={_id}>
              {filtering.map((e) => {
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
    </>
  );
};
