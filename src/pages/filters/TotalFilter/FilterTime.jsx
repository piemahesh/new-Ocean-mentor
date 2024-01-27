import { BsFillClockFill } from "react-icons/bs";

export const FilterTime = () => {
  return (
    <main className="filterTime d-flex align-items-center border-bottom m-3 gap-2 py-2">
      <BsFillClockFill className="text-primary fs-3" />
      <span className="text-secondary">Add Time</span>
    </main>
  );
};
