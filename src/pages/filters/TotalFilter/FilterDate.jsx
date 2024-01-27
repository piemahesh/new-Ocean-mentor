import { AiTwotoneCalendar } from "react-icons/ai";

export const FilterDate = () => {
  return (
    <main className="filterdate d-flex flex-column align-items-center m-3 gap-2 py-2">
      <article className="border-bottom w-100 d-flex gap-3 align-items-center p-2">
        <AiTwotoneCalendar className="text-primary fs-3" />
        <span className="text-secondary">Start Date</span>
      </article>
      <article className="border-bottom w-100 d-flex gap-3 align-items-center p-2">
        <AiTwotoneCalendar className="text-primary fs-3" />
        <span className="text-secondary">End Date</span>
      </article>
    </main>
  );
};
