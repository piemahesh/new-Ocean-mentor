import { Images, defImg } from "./CourseImg";

export default function SetImg(props) {
  const { course } = props;
  return (
    <div className="w-75 h-75 rounded-circle d-flex align-items-center overflow-hidden">
      <img
        src={Object.keys(Images).includes(course) ? Images[course] : defImg}
        alt={course}
        className="h-100 w-100"
      />
    </div>
  );
}
