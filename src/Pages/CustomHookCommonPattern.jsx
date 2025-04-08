import React, { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

function AutoSuggestion() {
  const [topic, setTopic] = useState("");
  const [list, setList] = useLocalStorage("topicList", []);
  const [filteredTopics, setFilteredTopics] = useState([]);

  const handleSubmit = () => {
    if (!list.includes(topic.toLowerCase())) {
      setList([...list, topic.toLowerCase()]);
      setTopic("");
    }
  };

  const handleTopicChange = (e) => {
    const value = e.target.value;
    setTopic(value);
    const matches = list.filter((topic) =>
      topic.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredTopics(matches);
  };

  const handleSelectTopic = (topic) => {
    setTopic(topic);
    setFilteredTopics([]);
  };

  return (
    <div className="w-[400px] mx-auto my-10">
      <div className="flex items-center gap-5">
        <label className="text-xl">Topics :</label>
        <input
          type="text"
          className="border text-black border-gray-400 rounded-lg p-2 w-3/4"
          value={topic}
          onChange={handleTopicChange}
        />
      </div>

      {filteredTopics.length > 0 && (
        <ul className="ml-20 bg-white border border-gray-300 rounded-lg w-3/4 mt-1 shadow-lg">
          {filteredTopics.map((topic, index) => (
            <li
              key={index}
              onClick={() => handleSelectTopic(topic)}
              className="p-2 text-blue-700 font-bold hover:bg-gray-200 cursor-pointer"
            >
              {topic}
            </li>
          ))}
        </ul>
      )}

      {filteredTopics.length === 0 && (
        <button
          className="border-none bg-blue-900 text-white font-bold p-4 mt-5 rounded-lg cursor-pointer"
          onClick={handleSubmit}
        >
          Submit
        </button>
      )}
    </div>
  );
}

export default AutoSuggestion;








// Below is my Auto Suggestion with using useEffect

// // ### AutoSuggestion.jsx ###
// import React, { useEffect, useState } from "react";


// function AutoSuggestion() {
// //state variables
//   const [topic, setTopic] = useState("");
//   const [filteredTopics, setFilteredTopics] = useState([]);
//   const [list, setList] = useState(
//     JSON.parse(localStorage.getItem("topicList")) || []
//   );


//   // Save to localStorage whenever list updates
//   useEffect(() => {
//     localStorage.setItem("topicList", JSON.stringify(list));
//   }, [list]);

// //adding new topic to the list
//   const handleSubmit = () => {
//     if (!list.includes(topic)) {
//       setList((prev) => [...prev, topic.toLowerCase()]);
//       setTopic("");
//     }
//   };

// //handle logic to update the topic  when changes 
//   const handleTopicChange = (e) => {
//     const value = e.target.value;
//     setTopic(value);
// //filter matches
//     const matches = list.filter((topic) =>
//       topic.toLowerCase().includes(value.toLowerCase())
//     );
//     setFilteredTopics(matches);
//   };

// //fn to select the topic from the list
//   const handleSelectTopic = (topic) => {
//     setTopic(topic);
//     setFilteredTopics([]);
//   };

//   return (
//     <div className="w-[400px] mx-auto my-10">
//       <div className=" flex items-center gap-5">
//         <label className="text-xl ">Topics :</label>
//         <input
//           type="text"
//           className="border text-black border-gray-400 rounded-lg p-2 w-3/4"
//           value={topic}
//           onChange={handleTopicChange}
//         />
//       </div>

//       {/* Suggestion Box */}
//       {filteredTopics.length > 0 && (
//         <ul className="ml-20 bg-white border border-gray-300 rounded-lg w-3/4 mt-1 shadow-lg">
//           {filteredTopics.map((topic, index) => (
//             <li
//               key={index}
//               onClick={() => handleSelectTopic(topic)}
//               className="p-2 text-blue-700 font-bold hover:bg-gray-200 cursor-pointer"
//             >
//               {topic}
//             </li>
//           ))}
//         </ul>
//       )}

//       {filteredTopics.length === 0 && (
//         <button
//           className="border-none bg-blue-900 text-white font-bold p-4 mt-5 rounded-lg cursor-pointer"
//           onClick={handleSubmit}
//         >
//           Submit
//         </button>
//       )}
//     </div>
//   );
// }

// export default AutoSuggestion;
