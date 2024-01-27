import { AiTwotoneCalendar } from "react-icons/ai";
export const FilterAddDate = () => {
  return (
    <main className="FilterTime d-flex align-items-center border-bottom m-3 gap-2 py-2">
      <AiTwotoneCalendar className="text-primary fs-3" />
      <span className="text-secondary">Add Date</span>
    </main>
  );
};
