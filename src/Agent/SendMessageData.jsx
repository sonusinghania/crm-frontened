// import React, { useState } from "react";

// const RequestedData = ({ messageSent }) => {
//   const [selectedFilter, setSelectedFilter] = useState("All");

//   // Filter data based on the selected filter
//   const filteredData =
//     selectedFilter === "All"
//       ? messageSent
//       : messageSent.filter((data) => data.productOrService === selectedFilter);

//   return (
//     <div className="requested-data-container">
//       <h1>Requested Data</h1>

//       {/* Filter Dropdown */}
//       <div>
//         <label htmlFor="dataFilter">Filter by Data Type: </label>
//         <select
//           id="dataFilter"
//           value={selectedFilter}
//           onChange={(e) => setSelectedFilter(e.target.value)}
//         >
//           <option value="All">All</option>
//           <option value="Potential Data">Potential Data</option>
//           <option value="Active Data">Active Data</option>
//           <option value="Non-Active Data">Non-Active Data</option>
//           <option value="Premium Data">Premium Data</option>
//         </select>
//       </div>

//       {/* Table to display messageSent data */}
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Mobile Number</th>
//             <th>Product/Service</th>
//             <th>Company Name</th>
//             <th>Sent At</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.map((message, index) => (
//             <tr key={index}>
//               <td>{message.name}</td>
//               <td>{message.mobileNumber}</td>
//               <td>{message.productOrService}</td>
//               <td>{message.companyName}</td>
//               <td>{new Date(message.sentAt).toLocaleString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default RequestedData;

// import React, { useState } from "react";
// import "../Admin/AdminDashboard.css";
// const RequestedData = ({ messageSent }) => {
//   const [selectedFilter, setSelectedFilter] = useState("All");
//   const [dataStatus, setDataStatus] = useState(
//     messageSent.map(() => "Unmarked") // Initialize status for each row
//   );

//   // Filter data based on the selected filter
//   const filteredData =
//     selectedFilter === "All"
//       ? messageSent
//       : messageSent.filter((_, index) => dataStatus[index] === selectedFilter);

//   // Update the status of individual rows
//   const handleStatusChange = (index, newStatus) => {
//     const updatedStatus = [...dataStatus];
//     updatedStatus[index] = newStatus;
//     setDataStatus(updatedStatus);
//   };

//   return (
//     <div className="requested-data-container">
//       <h1>Requested Data</h1>

//       {/* Table to display messageSent data */}
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Mobile Number</th>
//             <th>Product/Service</th>
//             <th>Company Name</th>
//             <th>Sent At</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.map((message, index) => (
//             <tr key={index}>
//               <td>{message.name}</td>
//               <td>{message.mobileNumber}</td>
//               <td>{message.productOrService}</td>
//               <td>{message.companyName}</td>
//               <td>{new Date(message.sentAt).toLocaleString()}</td>
//               <td>
//                 {/* Individual status dropdown */}
//                 <select
//                   value={dataStatus[index]}
//                   onChange={(e) => handleStatusChange(index, e.target.value)}
//                 >
//                   <option value="Unmarked">Unmarked</option>
//                   <option value="Potential Data">Potential Data</option>
//                   <option value="Active Data">Active Data</option>
//                   <option value="Non-Active Data">Non-Active Data</option>
//                   <option value="Premium Data">Premium Data</option>
//                 </select>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default RequestedData;

///// Comment Option Here ++++++++++++++++++

// import React, { useState } from "react";
// // import "../Admin/AdminDashboard.css";
// import "./RequestedData.css";
// const RequestedData = ({ messageSent }) => {
//   const [selectedFilter, setSelectedFilter] = useState("All");
//   const [dataStatus, setDataStatus] = useState(
//     messageSent.map(() => "Unmarked") // Initialize status for each row
//   );
//   const [comments, setComments] = useState(
//     messageSent.map(() => "") // Initialize comments for each row
//   );

//   // Filter data based on the selected filter
//   const filteredData =
//     selectedFilter === "All"
//       ? messageSent
//       : messageSent.filter((_, index) => dataStatus[index] === selectedFilter);

//   // Update the status of individual rows
//   const handleStatusChange = (index, newStatus) => {
//     const updatedStatus = [...dataStatus];
//     updatedStatus[index] = newStatus;
//     setDataStatus(updatedStatus);
//   };

//   // Update the comment for individual rows
//   const handleCommentChange = (index, newComment) => {
//     const updatedComments = [...comments];
//     updatedComments[index] = newComment;
//     setComments(updatedComments);
//   };

//   // Handle the save action
//   const handleSave = (index) => {
//     const savedData = {
//       name: messageSent[index].name,
//       mobileNumber: messageSent[index].mobileNumber,
//       productOrService: messageSent[index].productOrService,
//       companyName: messageSent[index].companyName,
//       sentAt: messageSent[index].sentAt,
//       status: dataStatus[index],
//       comment: comments[index],
//     };
//     console.log("Saved Data:", savedData);
//     alert(`Data for ${messageSent[index].name} has been saved!`);
//   };

//   return (
//     <div className="requested-data-container">
//       <h1>Requested Data</h1>

//       {/* Table to display messageSent data */}
//       <table className="requested-data-table">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Mobile Number</th>
//             <th>Product/Service</th>
//             <th>Company Name</th>
//             <th>Sent At</th>
//             <th>Action</th>
//             <th>Comment</th>
//             <th>Save</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.map((message, index) => (
//             <tr key={index}>
//               <td>{message.name}</td>
//               <td>{message.mobileNumber}</td>
//               <td>{message.productOrService}</td>
//               <td>{message.companyName}</td>
//               <td>{new Date(message.sentAt).toLocaleString()}</td>
//               <td>
//                 {/* Individual status dropdown */}
//                 <select
//                   value={dataStatus[index]}
//                   onChange={(e) => handleStatusChange(index, e.target.value)}
//                 >
//                   <option value="Unmarked">Unmarked</option>
//                   {/* <option value="Potential Data">Potential Data</option> */}
//                   <option value="Active Data">Active Data</option>
//                   <option value="Non-Active Data">Non-Active Data</option>
//                   <option value="Premium Data">Premium Data</option>
//                 </select>
//               </td>
//               <td>
//                 {/* Comment Input */}
//                 <input
//                   type="text"
//                   value={comments[index]}
//                   onChange={(e) => handleCommentChange(index, e.target.value)}
//                   placeholder="Enter comment"
//                 />
//               </td>
//               <td>
//                 {/* Save Button */}
//                 <button
//                   className="save-button"
//                   onClick={() => handleSave(index)}
//                 >
//                   Save
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default RequestedData;

// Card Format Data Render "+++++++++++++++++++++"

// import React, { useState } from "react";
// import "./RequestedData.css";

// const RequestedData = ({ messageSent }) => {
//   const [currentPage, setCurrentPage] = useState(0);
//   const [dataStatus, setDataStatus] = useState(
//     messageSent.map(() => "Unmarked") // Initialize status for each card
//   );
//   const [comments, setComments] = useState(
//     messageSent.map(() => "") // Initialize comments for each card
//   );

//   // Constants for pagination
//   const cardsPerPage = 20;
//   const totalPages = Math.ceil(messageSent.length / cardsPerPage);

//   // Get the current data chunk to display
//   const currentData = messageSent.slice(
//     currentPage * cardsPerPage,
//     (currentPage + 1) * cardsPerPage
//   );

//   // Update the status of individual cards
//   const handleStatusChange = (index, newStatus) => {
//     const updatedStatus = [...dataStatus];
//     updatedStatus[index] = newStatus;
//     setDataStatus(updatedStatus);
//   };

//   // Update the comment for individual cards
//   const handleCommentChange = (index, newComment) => {
//     const updatedComments = [...comments];
//     updatedComments[index] = newComment;
//     setComments(updatedComments);
//   };

//   // Handle the save action
//   const handleSave = (index) => {
//     const savedData = {
//       name: currentData[index].name,
//       mobileNumber: currentData[index].mobileNumber,
//       productOrService: currentData[index].productOrService,
//       companyName: currentData[index].companyName,
//       sentAt: currentData[index].sentAt,
//       status: dataStatus[index],
//       comment: comments[index],
//     };
//     console.log("Saved Data:", savedData);
//     alert(`Data for ${currentData[index].name} has been saved!`);
//   };

//   // Handle pagination
//   const handleNextPage = () => {
//     if (currentPage < totalPages - 1) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePreviousPage = () => {
//     if (currentPage > 0) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <div className="requested-data-container">
//       <h1>Requested Data</h1>

//       {/* Display cards */}
//       <div className="card-grid">
//         {currentData.map((message, index) => (
//           <div className="card" key={index}>
//             <h3>{message.name}</h3>
//             <p>
//               <strong>Mobile:</strong> {message.mobileNumber}
//             </p>
//             <p>
//               <strong>Product/Service:</strong> {message.productOrService}
//             </p>
//             <p>
//               <strong>Company:</strong> {message.companyName}
//             </p>
//             <p>
//               <strong>Sent At:</strong>{" "}
//               {new Date(message.sentAt).toLocaleString()}
//             </p>

//             <div className="card-actions">
//               {/* Status Dropdown */}
//               <select
//                 value={dataStatus[index]}
//                 onChange={(e) => handleStatusChange(index, e.target.value)}
//               >
//                 <option value="Unmarked">Unmarked</option>
//                 <option value="Active Data">Active Data</option>
//                 <option value="Non-Active Data">Non-Active Data</option>
//                 <option value="Premium Data">Premium Data</option>
//               </select>

//               {/* Comment Input */}
//               <input
//                 type="text"
//                 value={comments[index]}
//                 onChange={(e) => handleCommentChange(index, e.target.value)}
//                 placeholder="Enter comment"
//               />

//               {/* Save Button */}
//               <button className="save-button" onClick={() => handleSave(index)}>
//                 Save
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Pagination Controls */}
//       <div className="pagination-controls">
//         <button
//           onClick={handlePreviousPage}
//           disabled={currentPage === 0}
//           className="pagination-button"
//         >
//           Previous
//         </button>
//         <span>
//           Page {currentPage + 1} of {totalPages}
//         </span>
//         <button
//           onClick={handleNextPage}
//           disabled={currentPage === totalPages - 1}
//           className="pagination-button"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default RequestedData;

// =================== Active ==============
// import React, { useState } from "react";
// import "./RequestedData.css";

// const RequestedData = ({ messageSent, handleDataUpdate }) => {
//   const [currentPage, setCurrentPage] = useState(0);
//   const [dataStatus, setDataStatus] = useState(
//     messageSent.map(() => "Unmarked") // Initialize status for each card
//   );
//   const [comments, setComments] = useState(
//     messageSent.map(() => "") // Initialize comments for each card
//   );

//   const cardsPerPage = 20;
//   const totalPages = Math.ceil(messageSent.length / cardsPerPage);

//   const currentData = messageSent.slice(
//     currentPage * cardsPerPage,
//     (currentPage + 1) * cardsPerPage
//   );

//   const handleStatusChange = (index, newStatus) => {
//     const updatedStatus = [...dataStatus];
//     updatedStatus[index] = newStatus;
//     setDataStatus(updatedStatus);
//   };

//   const handleCommentChange = (index, newComment) => {
//     const updatedComments = [...comments];
//     updatedComments[index] = newComment;
//     setComments(updatedComments);
//   };

//   const handleSave = (index) => {
//     const newStatus = dataStatus[index];
//     const newComment = comments[index];
//     handleDataUpdate(index, newStatus, newComment); // Update the parent state
//     alert(`Data for ${currentData[index].name} has been saved!`);
//   };

//   return (
//     <div className="requested-data-container">
//       <h1>Requested Data</h1>

//       <div className="card-grid">
//         {currentData.map((message, index) => (
//           <div className="card" key={index}>
//             <h3>{message.name}</h3>
//             <p>
//               <strong>Mobile:</strong> {message.mobileNumber}
//             </p>
//             <p>
//               <strong>Product/Service:</strong> {message.productOrService}
//             </p>
//             <p>
//               <strong>Company:</strong> {message.companyName}
//             </p>
//             <p>
//               <strong>Sent At:</strong>{" "}
//               {new Date(message.sentAt).toLocaleString()}
//             </p>

//             <div className="card-actions">
//               <select
//                 value={dataStatus[index]}
//                 onChange={(e) => handleStatusChange(index, e.target.value)}
//               >
//                 <option value="Unmarked">Unmarked</option>
//                 <option value="Active Data">Active Data</option>
//                 <option value="Non-Active Data">Non-Active Data</option>
//                 <option value="Premium Data">Premium Data</option>
//               </select>

//               <input
//                 type="text"
//                 value={comments[index]}
//                 onChange={(e) => handleCommentChange(index, e.target.value)}
//                 placeholder="Enter comment"
//               />

//               <button className="save-button" onClick={() => handleSave(index)}>
//                 Save
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="pagination-controls">
//         <button
//           onClick={() => setCurrentPage(currentPage - 1)}
//           disabled={currentPage === 0}
//         >
//           Previous
//         </button>
//         <span>
//           Page {currentPage + 1} of {totalPages}
//         </span>
//         <button
//           onClick={() => setCurrentPage(currentPage + 1)}
//           disabled={currentPage === totalPages - 1}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default RequestedData;

//+++++++++++++++++ Active Data Added =++++++++++++++++++++
// import React, { useState } from "react";
// import "./RequestedData.css";

// const RequestedData = ({ messageSent, onActiveDataUpdate }) => {
//   const [currentPage, setCurrentPage] = useState(0);
//   const [dataStatus, setDataStatus] = useState(
//     messageSent.map(() => "Unmarked") // Initialize status for each card
//   );
//   const [comments, setComments] = useState(
//     messageSent.map(() => "") // Initialize comments for each card
//   );

//   // Constants for pagination
//   const cardsPerPage = 20;
//   const totalPages = Math.ceil(messageSent.length / cardsPerPage);

//   // Get the current data chunk to display
//   const currentData = messageSent.slice(
//     currentPage * cardsPerPage,
//     (currentPage + 1) * cardsPerPage
//   );

//   // Update the status of individual cards
//   const handleStatusChange = (index, newStatus) => {
//     const updatedStatus = [...dataStatus];
//     updatedStatus[index] = newStatus;
//     setDataStatus(updatedStatus);
//   };

//   // Update the comment for individual cards
//   const handleCommentChange = (index, newComment) => {
//     const updatedComments = [...comments];
//     updatedComments[index] = newComment;
//     setComments(updatedComments);
//   };

//   // Handle the save action and send active data to the parent
//   const handleSave = (index) => {
//     const savedData = {
//       name: currentData[index].name,
//       mobileNumber: currentData[index].mobileNumber,
//       productOrService: currentData[index].productOrService,
//       companyName: currentData[index].companyName,
//       sentAt: currentData[index].sentAt,
//       status: dataStatus[index],
//       comment: comments[index],
//     };

//     // If the status is "Active Data", send it to the parent
//     if (savedData.status === "Active Data") {
//       onActiveDataUpdate((prevData) => [...prevData, savedData]);
//     }

//     alert(`Data for ${currentData[index].name} has been saved!`);
//   };

//   // Handle pagination
//   const handleNextPage = () => {
//     if (currentPage < totalPages - 1) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePreviousPage = () => {
//     if (currentPage > 0) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <div className="requested-data-container">
//       <h1>Requested Data</h1>

//       {/* Display cards */}
//       <div className="card-grid">
//         {currentData.map((message, index) => (
//           <div className="card" key={index}>
//             <h3>{message.name}</h3>
//             <p>
//               <strong>Mobile:</strong> {message.mobileNumber}
//             </p>
//             <p>
//               <strong>Product/Service:</strong> {message.productOrService}
//             </p>
//             <p>
//               <strong>Company:</strong> {message.companyName}
//             </p>
//             <p>
//               <strong>Sent At:</strong>{" "}
//               {new Date(message.sentAt).toLocaleString()}
//             </p>

//             <div className="card-actions">
//               {/* Status Dropdown */}
//               <select
//                 value={dataStatus[index]}
//                 onChange={(e) => handleStatusChange(index, e.target.value)}
//               >
//                 <option value="Unmarked">Unmarked</option>
//                 <option value="Active Data">Active Data</option>
//                 <option value="Non-Active Data">Non-Active Data</option>
//                 <option value="Premium Data">Premium Data</option>
//               </select>

//               {/* Comment Input */}
//               <input
//                 type="text"
//                 value={comments[index]}
//                 onChange={(e) => handleCommentChange(index, e.target.value)}
//                 placeholder="Enter comment"
//               />

//               {/* Save Button */}
//               <button className="save-button" onClick={() => handleSave(index)}>
//                 Save
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Pagination Controls */}
//       <div className="pagination-controls">
//         <button
//           onClick={handlePreviousPage}
//           disabled={currentPage === 0}
//           className="pagination-button"
//         >
//           Previous
//         </button>
//         <span>
//           Page {currentPage + 1} of {totalPages}
//         </span>
//         <button
//           onClick={handleNextPage}
//           disabled={currentPage === totalPages - 1}
//           className="pagination-button"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default RequestedData;

///+++++++++Logged In User data +++++++++++++++++++
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const RequestedData = ({ agentData }) => {
//   const [sentData, setSentData] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchSentData = async () => {
//       try {
//         if (!agentData || !agentData._id) {
//           setError("Agent data is missing or invalid.");
//           console.log(error);
//           return;
//         }

//         const response = await axios.get(
//           `http://localhost:5000/api/agents/sent-data/${agentData._id}`
//         );
//         setSentData(response.data.data || []);
//       } catch (err) {
//         setError("Failed to fetch sent data.");
//       }
//     };

//     fetchSentData();
//   }, [agentData]);

//   if (error) return <p>{error}</p>;
//   if (!sentData.length) return <p>No sent data available.</p>;

//   return (
//     <div className="requested-data-container">
//       <h1>Requested Data</h1>
//       <ul>
//         {sentData.map((data, index) => (
//           <li key={index}>
//             <p>
//               <strong>Name:</strong> {data.name}
//             </p>
//             <p>
//               <strong>Mobile Number:</strong> {data.mobileNumber}
//             </p>
//             <p>
//               <strong>Company Name:</strong> {data.companyName}
//             </p>
//             <p>
//               <strong>Product/Service:</strong> {data.productOrService}
//             </p>
//             <hr />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RequestedData;

// import React from "react";
// // import "./RequestedData.css"; // Create this CSS file to style your table

// const RequestedData = ({ messagesSent }) => {
//   return (
//     <div className="requested-data-container">
//       <h1>Requested Data</h1>
//       <p>
//         This section displays all the data that has been requested by the agent.
//         You can manage, view, and respond to requests here.
//       </p>

//       {messagesSent && messagesSent.length > 0 ? (
//         <table className="data-table">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Message</th>
//               <th>Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {messagesSent.map((message, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>{message.content}</td>
//                 <td>
//                   {message.date
//                     ? new Date(message.date).toLocaleString()
//                     : "No Date Available"}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No messages sent yet.</p>
//       )}
//     </div>
//   );
// };

// export default RequestedData;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const RequestedData = ({ agentId }) => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:5000/api/sent-data/${agentId}`
//         );
//         setData(response.data.data); // Access the correct data path
//       } catch (err) {
//         console.error("Error fetching sent data:", err);
//         setError(err.message || "Failed to fetch data");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [agentId]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p className="error">Error: {error}</p>;
//   }

//   return (
//     <div className="requested-data-container">
//       <h1>Sent Data</h1>
//       {data.length === 0 ? (
//         <p>No data available</p>
//       ) : (
//         <table
//           border="1"
//           cellPadding="10"
//           style={{ width: "100%", textAlign: "left" }}
//         >
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Mobile Number</th>
//               <th>Product or Service</th>
//               <th>Company Name</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.name}</td>
//                 <td>{item.mobileNumber}</td>
//                 <td>{item.productOrService}</td>
//                 <td>{item.companyName}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default RequestedData;

// ============== Requested +++++++++++++++++++
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const RequestedData = ({ agentId }) => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch the data using the agent's ID
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:5000/api/agents/sent-data/${agentId}`
//         );
//         setData(response.data.data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching requested data:", err);
//         setError(err.message || "Failed to fetch data");
//         setLoading(false);
//       }
//     };

//     if (agentId) {
//       fetchData();
//     }
//   }, [agentId]);

//   // Render loading state
//   //   if (loading) {
//   //     return <p>Loading...</p>;
//   //   }

//   // Render error state
//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   // Render data in a table
//   return (
//     <div className="requested-data-container">
//       <h1>Requested Data</h1>
//       {data.length === 0 ? (
//         <p>No data available</p>
//       ) : (
//         <table
//           border="1"
//           cellPadding="10"
//           style={{ width: "100%", textAlign: "left" }}
//         >
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Mobile Number</th>
//               <th>Product or Service</th>
//               <th>Company Name</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.name}</td>
//                 <td>{item.mobileNumber}</td>
//                 <td>{item.productOrService}</td>
//                 <td>{item.companyName}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default RequestedData;
import React, { useState } from "react";
import "./RequestedData.css";

const RequestedData = ({ messageSent, onActiveDataUpdate }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [dataStatus, setDataStatus] = useState(
    messageSent.map(() => "Unmarked") // Initialize status for each card
  );
  const [comments, setComments] = useState(
    messageSent.map(() => "") // Initialize comments for each card
  );

  // Constants for pagination
  const cardsPerPage = 20;
  const totalPages = Math.ceil(messageSent.length / cardsPerPage);

  // Get the current data chunk to display
  const currentData = messageSent.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  );

  // Update the status of individual cards
  const handleStatusChange = (index, newStatus) => {
    const updatedStatus = [...dataStatus];
    updatedStatus[index] = newStatus;
    setDataStatus(updatedStatus);
  };

  // Update the comment for individual cards
  const handleCommentChange = (index, newComment) => {
    const updatedComments = [...comments];
    updatedComments[index] = newComment;
    setComments(updatedComments);
  };

  // Handle the save action and send active data to the parent
  // const handleSave = (index) => {
  //   const savedData = {
  //     name: currentData[index].name,
  //     mobileNumber: currentData[index].mobileNumber,
  //     productOrService: currentData[index].productOrService,
  //     companyName: currentData[index].companyName,
  //     sentAt: currentData[index].sentAt,
  //     status: dataStatus[index],
  //     comment: comments[index],
  //   };

  //   // If the status is "Active Data", send it to the parent
  //   if (savedData.status === "Active Data") {
  //     onActiveDataUpdate((prevData) => [...prevData, savedData]);

  //     // Store active data in localStorage
  //     const existingData = JSON.parse(localStorage.getItem("activeData")) || [];
  //     const updatedData = [...existingData, savedData];
  //     localStorage.setItem("activeData", JSON.stringify(updatedData));
  //   }

  //   alert(`Data for ${currentData[index].name} has been saved!`);
  // };
  const handleSave = (index) => {
    const savedData = {
      name: currentData[index].name,
      mobileNumber: currentData[index].mobileNumber,
      productOrService: currentData[index].productOrService,
      companyName: currentData[index].companyName,
      sentAt: currentData[index].sentAt,
      status: dataStatus[index],
      comment: comments[index],
    };

    if (savedData.status === "Active Data") {
      const existingData = JSON.parse(localStorage.getItem("activeData")) || [];
      const updatedData = [...existingData, savedData];

      // Sort updatedData by sentAt before saving
      const sortedData = updatedData.sort(
        (a, b) => new Date(b.sentAt) - new Date(a.sentAt)
      );

      localStorage.setItem("activeData", JSON.stringify(sortedData));
      onActiveDataUpdate(sortedData); // Optional: Pass sorted data back to parent
    }

    alert(`Data for ${currentData[index].name} has been saved!`);
  };

  // Handle pagination
  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="requested-data-container">
      <h1>Requested Data</h1>

      {/* Display cards */}
      <div className="card-grid">
        {[...currentData]
          .sort((a, b) => new Date(b.sentAt) - new Date(a.sentAt))
          .map((message, index) => (
            <div
              className={`card ${index === 0 ? "highlighted-card" : ""}`}
              key={index}
            >
              <h3>
                {index + 1}. {message.name}
              </h3>
              <p>
                <strong>Mobile:</strong> {message.mobileNumber}
              </p>
              <p>
                <strong>Product/Service:</strong> {message.productOrService}
              </p>
              <p>
                <strong>Company:</strong> {message.companyName}
              </p>
              <p>
                <strong>Sent At:</strong>{" "}
                {new Date(message.sentAt).toLocaleString()}
              </p>

              <div className="card-actions">
                {/* Status Dropdown */}
                <select
                  value={dataStatus[index]}
                  onChange={(e) => handleStatusChange(index, e.target.value)}
                >
                  <option value="Unmarked">Unmarked</option>
                  <option value="Active Data">Active Data</option>
                  <option value="Non-Active Data">Non-Active Data</option>
                  <option value="Premium Data">Premium Data</option>
                </select>

                {/* Comment Input */}
                <input
                  type="text"
                  value={comments[index]}
                  onChange={(e) => handleCommentChange(index, e.target.value)}
                  placeholder="Enter comment"
                />

                {/* Save Button */}
                <button
                  className="save-button"
                  onClick={() => handleSave(index)}
                >
                  Save
                </button>
              </div>
            </div>
          ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination-controls">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 0}
          className="pagination-button"
        >
          Previous
        </button>
        <span>
          Page {currentPage + 1} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
          className="pagination-button"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RequestedData;
