const convDate = (dates) => {
  const date = new Date(`${dates}`);
  console.log(date);
  if (date == "Invalid Date") {
    return "not yet completed";
  }
  const formatDate = date.toLocaleDateString("en-IN", {
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
  return formatDate;
};

const SyllabusComponent = ({ syllabusData }) => {
  const generateWordDocument = () => {
    const content = generateContent(syllabusData);
    const blob = new Blob([content], { type: "application/msword" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "syllabus.doc";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const generateContent = (data) => {
    let content = "Syllabus\n\n";
    data.forEach((day) => {
      content += `Day ${day.day_number}\n\n`;

      day.topics.forEach((topic) => {
        content += `${topic.topic} - ${
          topic.isCompleted ? "Completed" : "Not Completed"
        }\n`;
        content += `finishedOn - ${
          convDate(topic?.date) || "not yet completed"
        }\n\n`;
      });
      content += "\n\n";
      content += `---------------------------------------------------------------------------\n`;
    });
    return content;
  };

  const handleShareClick = () => {
    generateWordDocument();
  };

  return (
    <div>
      {/* Button to trigger sharing functionality */}
      <button className="btn btn-primary border " onClick={handleShareClick}>
        Share daysheet
      </button>
    </div>
  );
};

export default SyllabusComponent;

export const NoteBtnComponent = ({ datas }) => {
  console.log(datas);
  const generateWordDocument = () => {
    const content = generateContent(datas);
    const blob = new Blob([content], { type: "application/msword" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "daysheet.doc";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const generateContent = (data) => {
    let content = "Notes and content\n\n";
    data.map((notes, i) => {
      content +=
        `${i + 1}\t` + `${convDate(notes.date)}\t` + `${notes.note}\n\n`;
      content +=
        "-----------------------------------------------------------\n\n";
    });

    return content;
  };
  const handleShareClick = () => {
    console.log("clicked");
    generateWordDocument();
  };

  return (
    <div>
      {/* Button to trigger sharing functionality */}
      <button className="btn btn-primary border " onClick={handleShareClick}>
        Share notes
      </button>
    </div>
  );
};
