export const FilterCourse = () => {
  const courseName = [
    "Figma",
    "Html",
    "Css",
    "Javascript",
    "React",
    "Node",
    "Express",
    "MongoDB",
  ];
  return (
    <main className="filtercourse mt-2">
      {courseName.map((value, index) => {
        return (
          <div
            key={index}
            className={`filtercourse-inner  d-flex justify-content-between gap-2 px-3 py-2 ${
              courseName.length - 1 === index && "border-0 mb-4"
            } `}
          >
            <label htmlFor={index}>{value}</label>
            <input type="checkbox" id={index} />
          </div>
        );
      })}
    </main>
  );
};
