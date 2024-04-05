import { Link } from "react-router-dom";
import { IoCaretDownSharp } from "react-icons/io5";
import { MdOutlineAddBox } from "react-icons/md";
import { useDispatch } from "react-redux";

export const FilterSection = () => {
  const dispatch = useDispatch();
  const resetAllFilters = () => {
    window.location.reload();
  };
  return (
    <section className="filters-section position-sticky mb-2 d-flex justify-content-between gap-2 py-2 align-items-center bg-white">
      {/* <Link
        to="/home/filter"
        className="filters-inner text-decoration-none border d-flex align-items-center gap-2 px-4 py-2"
      >
        <span>Filter</span>
        <IoCaretDownSharp />
      </Link> */}
      <Link
        to="/home/sort"
        className="filters-inner border text-decoration-none d-flex align-items-center gap-2 px-4 py-2"
      >
        <span>Sort By</span>
        <IoCaretDownSharp />
      </Link>
      <Link
        to="/home/course"
        className="filters-inner border text-decoration-none d-flex align-items-center gap-2 px-4 py-2"
      >
        <span>Course</span>
        <IoCaretDownSharp />
      </Link>
      {/* <Link
        to="/home/time"
        className="filters-inner border text-decoration-none d-flex align-items-center gap-2 px-4 py-2"
      >
        <span>Time</span>
      </Link> */}
      <Link
        to="/home/date"
        className="filters-inner border text-decoration-none d-flex align-items-center gap-2 px-4 py-2"
      >
        <span>Date</span>
      </Link>
      {/* <Link
        to="/home/add-date"
        className="filters-inner text-decoration-none border bg-success text-white fw-bold d-flex align-items-center py-2 px-4"
      >
        <MdOutlineAddBox className="mx-1" />
        <span>Add Date</span>
      </Link>
      <div className="line py-2 "></div> */}
      <div
        onClick={resetAllFilters}
        className="filters-inner clear border bg-danger d-flex align-items-center gap-2 px-4 py-2 text-white"
      >
        <span>Clear All</span>
      </div>
    </section>
  );
};
