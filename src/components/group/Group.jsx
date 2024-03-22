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
  const dateFilter = useSelector((state) => state.dateFilter.value);

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
  //   return formattedHours, formattedMinutes;
  // }
  // const timeFilter = batchData.filter((batch) => {
  //   const { batchTime } = batch;
  //   if (batchTime.toLowerCase().includes("to")) {
  //     const timing = batchTime.split("TO");

  //     const from = timing[0].toLowerCase().includes("pm" || "am")
  //       ? timing[0].replace("PM" || "pm" || "am" || "AM", "")
  //       : "";
  //     const to = timing[1].toLowerCase().includes("pm")
  //       ? timing[1].replace("PM" || "pm" || "am" || "AM", "")
  //       : "";
  //     const orgTimes = from.split(".");
  //     const orgTime = timeConv(orgTimes[0], orgTimes[1]);
  //     console.log(orgTime);
  //     // const orgTime = timeConv(from);
  //     // console.log(orgTime);
  //   } else {
  //     const timing2 = batchTime.split("-");
  //     // console.log(timing2[0] + timing2[1]);
  //   }
  // });

  function filterBatchDataByDate(batchData, startDate, endDate) {
    if ((startDate && endDate) != "") {
      const filteredData = batchData.filter((item) => {
        const batchDate = item.date;
        if (startDate == batchDate) {
          console.log(item);
        }
        // const itemDate = new Date(item.date);
        // console.log(item.date);
        // const filterStartDate = new Date(startDate);
        // const filterEndDate = new Date(endDate);
        // console.log(
        //   itemDate + " ddd" + filterStartDate + "ddd " + filterEndDate
        // );
        // return itemDate >= filterStartDate && itemDate <= filterEndDate;
      });
      console.log(filteredData);
      return filteredData;
    } else {
      return batchData;
    }
  }
  console.log(dateFilter);
  const startDate = "02-01-2024"; // Client input for start date  `${dateFilter.from}`
  const endDate = "2024-03-22"; // Client input for end date `${dateFilter.to}`

  const filteredBatchData = filterBatchDataByDate(
    batchData,
    startDate,
    endDate
  );
  console.log(filteredBatchData);
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
