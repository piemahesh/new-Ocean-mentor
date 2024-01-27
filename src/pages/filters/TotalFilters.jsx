// export const CourseDivision = () => {
//   const navigate = useNavigate();
//   const goBack = () => {
//     navigate(-1);
//   };

//   const courseName = [
//     "Figma",
//     "Html",
//     "Css",
//     "Javascript",
//     "React",
//     "Node",
//     "Express",
//     "MongoDB",
//     "MongoDB",
//     "MongoDB",
//     "MongoDB",
//   ];
//   return (
//     <main className="course-division border-top d-flex flex-column justify-content-center shadow position-fixed shadow position-fixed h-100">
//       <section className="course-division-down position-absolute w-100 border-top bg-white">
//         <nav className="border-bottom px-4 py-2 mt-2 d-flex justify-content-between align-items-center">
//           <h5 className=" text-secondary m-0 fw-bold">COURSE</h5>
//           <Link className="text-decoration-none" onClick={goBack}>
//             <RiCloseCircleFill className="text-primary fs-3" />
//           </Link>
//         </nav>
//         <div className="course-division-list">
//           {courseName.map((value, index) => {
//             return (
//               <div
//                 key={index}
//                 className="course-division-inner d-flex justify-content-between align-items-center p-1"
//               >
//                 <label className="fs-5" htmlFor={index}>
//                   {value}
//                 </label>
//                 <input type="checkbox" id={index} />
//               </div>
//             );
//           })}
//         </div>
//         <article className="button bg-white position-absolute d-flex justify-content-center w-100">
//           <Link
//             className="btn btn-primary position-sticky fw-bold mx-auto mb-3"
//             onClick={goBack}
//           >
//             Apply Changes
//           </Link>
//         </article>
//       </section>
//     </main>
//   );
// };

// export const TimeDivision = () => {
//   const navigate = useNavigate();
//   const goBack = () => {
//     navigate(-1);
//   };
//   return (
//     <main className="time-division border-top d-flex flex-column justify-content-center shadow position-fixed shadow position-fixed h-100">
//       <section className="time-division-down w-100 border-top position-absolute d-flex flex-column gap-3 bg-white">
//         <div className="border-bottom my-2 p-3 d-flex justify-content-between align-items-center">
//           <h5 className=" text-secondary m-0 fw-bold">TIME</h5>
//           <Link className="text-decoration-none" onClick={goBack}>
//             <RiCloseCircleFill className="text-primary fs-3" />
//           </Link>
//         </div>
//         <div className="time-division-inner border-bottom mt-3 d-flex gap-3 align-items-center text-primary fs-4 mx-auto p-2 ">
//           <BsFillClockFill />
//           <span className="text-secondary">Add Time</span>
//         </div>

//         <article className="d-flex justify-content-center mt-5">
//           <Link
//             className="btn btn-primary fw-bold w-50 mx-auto mb-3"
//             onClick={goBack}
//           >
//             Apply Changes
//           </Link>
//         </article>
//       </section>
//     </main>
//   );
// };

// export const DateDivision = () => {
//   const navigate = useNavigate();
//   const goBack = () => {
//     navigate(-1);
//   };
//   return (
//     <main className="date-division d-flex flex-column justify-content-center shadow position-fixed shadow position-fixed h-100">
//       <section className="date-division-down border-top gap-2 position-absolute d-flex flex-column justify-content-center  bg-white">
//         <div className="border-bottom px-4 py-2 d-flex justify-content-between align-items-center">
//           <h5 className=" text-secondary m-0 fw-bold">DATE</h5>
//           <Link className="text-decoration-none" onClick={goBack}>
//             <RiCloseCircleFill className="text-primary fs-3" />
//           </Link>
//         </div>
//         <div className="date-division-inner  d-flex flex-column gap-3 align-items-center text-primary fs-4 mx-auto p-2 ">
//           <article className="border-bottom w-100 d-flex gap-3 align-items-center p-2">
//             <AiTwotoneCalendar />
//             <span className="text-secondary">Start Date</span>
//           </article>
//           <article className="border-bottom w-100 d-flex gap-3 align-items-center p-2">
//             <AiTwotoneCalendar />
//             <span className="text-secondary">End Date</span>
//           </article>
//         </div>

//         <Link
//           className="btn btn-primary mt-3 fw-bold w-50 mx-auto mb-3"
//           onClick={goBack}
//         >
//           Apply Changes
//         </Link>
//       </section>
//     </main>
//   );
// };

// export const AddDateDivision = () => {
//   const navigate = useNavigate();
//   const goBack = () => {
//     navigate(-1);
//   };
//   return (
//     <main className="add-date-division d-flex flex-column justify-content-center shadow position-fixed shadow position-fixed h-100">
//       <section className="add-date-division-down border-top position-absolute bg-white">
//         <div className="border-bottom my-4 px-4 py-2 d-flex justify-content-between align-items-center">
//           <h5 className=" text-secondary m-0 fw-bold">Add DATE</h5>
//           <Link className="text-decoration-none" onClick={goBack}>
//             <RiCloseCircleFill className="text-primary fs-3" />
//           </Link>
//         </div>
//         <section className="d-flex flex-column align-items-center gap-5">
//           <div className="add-date-division-inner border-bottom d-flex gap-3 align-items-center text-primary fs-4 p-2 mt-2">
//             <AiTwotoneCalendar />
//             <span className="text-secondary">Add Date</span>
//           </div>

//           <Link className="btn btn-primary fw-bold my-3" onClick={goBack}>
//             Apply Changes
//           </Link>
//         </section>
//       </section>
//     </main>
//   );
// };

// export const FilterDivision = () => {
//   const navigate = useNavigate();
//   const goBack = () => {
//     navigate(-1);
//   };
//   return (
//     <main className="filter-division d-flex flex-column justify-content-center shadow position-fixed h-100">
//       <Link to="/home" className="text-decoration-none">
//         <AiFillCloseCircle className="closed fs-1 text-primary bg-white position-absolute rounded-circle" />
//       </Link>
//       <section className="filter-division-down position-absolute w-100 border-top bg-white">
//         <div className="border-bottom mt-3 px-4 py-2 d-flex justify-content-between align-items-center">
//           <h5 className=" text-secondary fw-bold">Filter</h5>
//           <NavLink className="text-decoration-none" onClick={goBack}>
//             Clear All
//           </NavLink>
//         </div>
//         <div className="filter-division-list d-flex">
//           <aside className="d-flex flex-column">
//             <NavLink
//               to="sort"
//               className="border-bottom p-2 text-center text-decoration-none"
//             >
//               Sort By
//             </NavLink>
//             <NavLink
//               to="course"
//               className="border-bottom p-2 text-center text-decoration-none"
//             >
//               Course
//             </NavLink>
//             <NavLink
//               to="time"
//               className="border-bottom p-2 text-center text-decoration-none"
//             >
//               Time
//             </NavLink>
//             <NavLink
//               to="date"
//               className="border-bottom p-2 text-center text-decoration-none"
//             >
//               Date
//             </NavLink>
//             <NavLink
//               to="add-date"
//               className=" p-2 text-center text-decoration-none"
//             >
//               Add Date
//             </NavLink>
//           </aside>
//           <section className="filter-division-selection  border w-100 position-relative">
//             <Outlet />

//             <article className="button position-sticky d-flex w-100 mt-3">
//               <Link
//                 className="btn btn-primary fw-bold mx-auto mb-3"
//                 onClick={goBack}
//               >
//                 Apply Changes
//               </Link>
//             </article>
//           </section>
//         </div>
//       </section>
//     </main>
//   );
// };

// export const FilterSort = () => {
//   return (
//     <main className="filtersort my-3">
//       <div className="d-flex align-items-center justify-content-between gap-3 border-bottom px-3 py-2">
//         <label className="fs-5" htmlFor="btn1">
//           Newest First
//         </label>
//         <input
//           className="radio"
//           type="radio"
//           id="btn1"
//           name="fav_language"
//           value="HTML"
//         />
//       </div>
//       <div className="d-flex justify-content-between align-items-center gap-3 px-3 py-2">
//         <label className="fs-5" htmlFor="btn2">
//           Oldest First
//         </label>
//         <input
//           className="radio"
//           type="radio"
//           id="btn2"
//           name="fav_language"
//           value="HTML"
//         />
//       </div>
//     </main>
//   );
// };

// export const FilterCourse = () => {
//   const courseName = [
//     "Figma",
//     "Html",
//     "Css",
//     "Javascript",
//     "React",
//     "Node",
//     "Express",
//     "MongoDB",
//   ];
//   return (
//     <main className="filtercourse mt-2">
//       {courseName.map((value, index) => {
//         return (
//           <div
//             key={index}
//             className={`filtercourse-inner  d-flex justify-content-between gap-2 px-3 py-2 ${
//               courseName.length - 1 === index && "border-0 mb-4"
//             } `}
//           >
//             <label htmlFor={index}>{value}</label>
//             <input type="checkbox" id={index} />
//           </div>
//         );
//       })}
//     </main>
//   );
// };

// export const FilterTime = () => {
//   return (
//     <main className="filterTime d-flex align-items-center border-bottom m-3 gap-2 py-2">
//       <BsFillClockFill className="text-primary fs-3" />
//       <span className="text-secondary">Add Time</span>
//     </main>
//   );
// };

// export const FilterDate = () => {
//   return (
//     <main className="filterdate d-flex flex-column align-items-center m-3 gap-2 py-2">
//       <article className="border-bottom w-100 d-flex gap-3 align-items-center p-2">
//         <AiTwotoneCalendar className="text-primary fs-3" />
//         <span className="text-secondary">Start Date</span>
//       </article>
//       <article className="border-bottom w-100 d-flex gap-3 align-items-center p-2">
//         <AiTwotoneCalendar className="text-primary fs-3" />
//         <span className="text-secondary">End Date</span>
//       </article>
//     </main>
//   );
// };

// export const FilterAddDate = () => {
//   return (
//     <main className="FilterTime d-flex align-items-center border-bottom m-3 gap-2 py-2">
//       <AiTwotoneCalendar className="text-primary fs-3" />
//       <span className="text-secondary">Add Date</span>
//     </main>
//   );
// };
