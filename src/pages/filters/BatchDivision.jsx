import { useEffect, useRef, useState } from "react";
import { IoCaretDownSharp } from "react-icons/io5";
import { BiSolidGroup } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";

export const BatchDivision = (props) => {
  const { searching, setSearching, setView } = props; 
  const [show, setShow] = useState(false);
  const mybatches = [
    { "Current Batches": "on-going" },
    { "All Batches": "" },
    { "Completed Batches": "completed" },
  ];

  const inputRef = useRef(null);
  useEffect(()=>{
    if(show && inputRef.current){
        inputRef.current.focus()
    }
  },[show])
  const handleSearch = () => {
    setShow(!show);
  };

  const [batches, SetBatches] = useState(Object.keys(mybatches[0]));
  return (
    <div className="batch-division">
      <section className="d-flex justify-content-between align-items-center p-2">
        <article>
          <p
            className="textes text-primary  d-flex align-items-center py-1 fs-5 my-auto"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span>{batches}</span>
            <IoCaretDownSharp className="mx-2 fs-4  text-primary " />
          </p>
          <ul
            className="dropdown-menu px-2 "
            aria-labelledby="dropdownMenuButton1"
          >
            {mybatches.map((value, index) => {
              return (
                <li
                  key={index}
                  className="dropdown-item d-flex  gap-2 align-items-center"
                  onClick={() => {
                    SetBatches(Object.keys(mybatches[index]));
                    setView(Object.values(value)[0]);
                  }}
                >
                  <BiSolidGroup />

                  {Object.keys(value)[0]}
                </li>
              );
            })}
          </ul>
        </article>
        <BsSearch
          className="mx-2 fs-5 searchBtn text-primary"
          onClick={handleSearch}
        />
      </section>
      {show && (
        <section className="border px-2 py-1 my-2 content d-flex align-items-center">
          <BsSearch className="fs-5 text-primary mx-1" />
          <input
            ref={inputRef}
            className="form-control-plaintext searchInput mx-2"
            type="text"
            placeholder="Search"
            value={searching}
            onChange={(e) => {
              setSearching(e.target.value);
            }}
          />
        </section>
      )}
    </div>
  );
};
