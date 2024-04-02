// import React, { useState } from 'react';

// const SyllabusComponent = ({ syllabusData }) => {
//     // State to manage syllabus data
//     const [syllabus, setSyllabus] = useState(syllabusData.syllabus);
//     console.log(syllabus)


//     // Function to convert syllabus data into CSV format
//     const convertToCSV = () => {
//         const csvContent = "data:text/csv;charset=utf-8,"
//             + syllabus.map(day => (
//                 day.topics.map(topic => (
//                     `${day.day_number},${topic.topic},${topic.isCompleted},${topic.date ? topic.date : ''}`
//                 )).join('\n')
//             )).join('\n');

//         return encodeURI(csvContent);
//     };

//     // Function to handle share button click
//     const handleShareClick = () => {
//         const csvData = convertToCSV();
//         const encodedUri = encodeURI(csvData);
//         const link = document.createElement('a');
//         link.setAttribute('href', encodedUri);
//         link.setAttribute('download', 'syllabus.csv');
//         document.body.appendChild(link);
//         link.click();
//     };

//     return (
//         <div>
//             {/* Button to trigger sharing functionality */}
//             <button onClick={handleShareClick}>Share</button>
//         </div>
//     );
// };

// export default SyllabusComponent;




const SyllabusComponent = ({ syllabusData }) => {
    const convDate = (dates) => {
        const date = new Date(`${dates}`);
        if (date == "Invalid Date") {
            return "not yet completed"
        }
        const formatDate = `${date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()}`
        return formatDate


    }
    const generateWordDocument = () => {
        const content = generateContent(syllabusData);
        const blob = new Blob([content], { type: 'application/msword' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'syllabus.doc';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const generateContent = (data) => {
        let content = 'Syllabus\n\n';
        data.forEach(day => {
            content += `Day ${day.day_number}\n\n`;

            day.topics.forEach(topic => {

                content += `${topic.topic} - ${topic.isCompleted ? 'Completed' : 'Not Completed'}\n`;
                content += `finishedOn - ${convDate(topic?.date) || "not yet completed"}\n\n`

            });
            content += '\n\n';
            content += `----------------------------------------------------------------\n`;
        });
        return content;

    };

    const handleShareClick = () => {
        generateWordDocument();
    };

    return (
        <div>
            {/* Button to trigger sharing functionality */}
            <button onClick={handleShareClick}>Share</button>

        </div>
    );
};

export default SyllabusComponent;


