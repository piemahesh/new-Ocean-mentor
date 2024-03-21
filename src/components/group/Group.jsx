import "./_group.scss";
import UseQueryRe from "../../customHooks/UseQueryRe";
import { BATCH_BY_TRAINER_ID } from "../../constant/ApiEndpoint";
import { Courses } from "./Courses";
import { useSelector } from "react-redux";
// import { Loading } from "../../pages/loading/Loading";
import { OALoaders } from "../../pages/loaders/Loader";

export const Group = (props) => {
  const { searchVal, view } = props;
  const filter = useSelector((state) => state.filter.value);
  const checked = useSelector((state) => state.courseFilter.value);

  const trainerId = localStorage.getItem("tokenId");
  const { data, isError, isLoading } = UseQueryRe(
    "batchDetails",
    BATCH_BY_TRAINER_ID,
    trainerId
  );
  if (isLoading) {
    return <OALoaders />;
  }
  if (isError) {
    return <div>error..........</div>;
  }
  function conv(d) {
    const [day, month, year] = d.split("-");
    return new Date(`${year}-${month}-${day}`);
  }
  const [{ batchData, _id, ...rest }] = data || [];

  // function timeConv(h, m) {
  //   let specificDate = new Date(0, 0, 0, h, m, 0);
  //   let hours = specificDate.getHours();
  //   let minutes = specificDate.getMinutes();
  //   let formattedHours = hours < 10 ? "0" + hours : hours;
  //   let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  //   console.log(formattedHours, formattedMinutes);
  // }
  // const timeFilter = batchData.filter((batch) => {
  //   const { batchTime } = batch;
  //   if (batchTime.toLowerCase().includes("to")) {
  //     const timing = batchTime.split("TO");
  //     console.log(
  //       timing[0].toLowerCase().includes("pm")
  //         ? timing[0].replace("PM" || "pm", "")
  //         : ""
  //     );
  //   } else {
  //     const timing2 = batchTime.split("-");
  //     console.log(timing2[0] + timing2[1]);
  //   }
  // });

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
    <>
      <div>
        {filtering.map((e) => {
          return (
            <div key={e._id}>
              <Courses
                id={e._id}
                status={e.completedStatus}
                date={e.date}
                batchTime={e.batchTime}
                courseName={e.courseName.toLowerCase()}
                rest={rest}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
