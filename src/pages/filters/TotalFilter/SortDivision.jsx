import { useNavigate, Link, } from "react-router-dom";
import { RiCloseCircleFill } from "react-icons/ri";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sorting } from "../../../features/MainSlice";


export const SortDivision = () => {
  const [sorted, setSorted] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
    
  };
  const press = () =>{
    // console.log(sorted)
    dispatch(sorting({ sort: sorted }))
    goBack()
  }

  return (
    <main className="sort-division border-top d-flex flex-column justify-content-center shadow position-fixed shadow position-fixed h-100">
      <div className="sort-division-down position-absolute w-100 border-top bg-white">
        <div className="border-bottom mt-3 px-4 py-2 d-flex justify-content-between align-items-center">
          <h5 className=" text-secondary fw-bold">SORT BY</h5>
          <Link className="text-decoration-none" onClick={goBack}>
            <RiCloseCircleFill className="text-primary fs-3" />
          </Link>
        </div>
        <section className="d-flex flex-column gap-4" >
          <div className="px-3 my-4">
            <article className="sort-division-inner d-flex justify-content-between m-2">
              <label className="fs-5" htmlFor="new">
                Newset First
              </label>
              <input type="radio" id="new" name="fav_language" value="New" onClick={(e)=>{setSorted(e.target.value)}}/>
            </article>
            <article className="sort-division-inner d-flex justify-content-between m-2">
              <label className="fs-5" htmlFor="old">
                Oldest First
              </label>
              <input type="radio" id="old" name="fav_language" value="Old" onClick={(e)=>{setSorted(e.target.value)}}/>
            </article>
          </div>

          <Link
            className="btn btn-primary fw-bold w-50 mx-auto mb-3"
            onClick={press}
          >
            Apply Changes
          </Link>
        </section>
      </div>
    </main>
  );
};
