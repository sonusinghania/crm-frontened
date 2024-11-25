// // src/Agent/AgentDashboard.js
// import React from "react";

// const AgentDashboard = () => {
//   return (
//     <div>
//       <h1>Agent Dashboard</h1>
//       <p>Welcome, Agent! This is your dashboard.</p>
//     </div>
//   );
// };

// export default AgentDashboard;
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const AgentDashboard = () => {
//   const [agentData, setAgentData] = useState(null);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
//         if (!loggedInUser || loggedInUser.userType !== "agent") {
//           setError("User not authorized");
//           return;
//         }

//         const response = await axios.post(
//           "http://localhost:5000/api/agents/getLoggedInUserData",
//           {
//             username: loggedInUser.username,
//           }
//         );
//         setAgentData(response.data.data);
//       } catch (err) {
//         setError("Failed to fetch user data");
//       }
//     };

//     fetchUserData();
//   }, []);

//   if (error) return <p>{error}</p>;
//   if (!agentData) return <p>Loading...</p>;

//   return (
//     <div>
//       <h1>Agent Dashboard</h1>
//       <p>Welcome, {agentData.name}!</p>
//       <p>Mobile Number: {agentData.mobileNumber}</p>
//       <p>Password: {agentData.password}</p>
//     </div>
//   );
// };

// // export default AgentDashboard;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../Admin/AdminDashboard.css";

// const AgentDashboard = () => {
//   const [agentData, setAgentData] = useState(null);
//   const [error, setError] = useState("");
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
//         if (!loggedInUser || loggedInUser.userType !== "agent") {
//           setError("User not authorized");
//           return;
//         }

//         const response = await axios.post(
//           "http://localhost:5000/api/agents/getLoggedInUserData",
//           {
//             username: loggedInUser.username,
//           }
//         );
//         setAgentData(response.data.data);
//       } catch (err) {
//         setError("Failed to fetch user data");
//       }
//     };

//     fetchUserData();
//   }, []);

//   const handleSendUpdate = async () => {
//     try {
//       // Implement the API call to send the update
//       const response = await axios.post(
//         "http://localhost:5000/api/agents/sendUpdate",
//         {
//           username: agentData.username,
//         }
//       );
//       setMessage(response.data.message || "Update sent successfully!");
//     } catch (err) {
//       setMessage("Failed to send update.");
//     }
//   };

//   if (error) return <p>{error}</p>;
//   if (!agentData) return <p>Loading...</p>;

//   return (
//     <div className="dashboard-container">
//       {/* Left Sidebar */}
//       <div className="sidebar">
//         <h2>Agent Dashboard</h2>
//         <ul>
//           <li>Dashboard</li>
//           <li onClick={handleSendUpdate}>Send Update</li>
//           <li>Settings</li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="main-content">
//         <h1>Welcome, {agentData.name}!</h1>
//         <div className="agent-info">
//           <p>
//             <strong>Username:</strong> {agentData.name}
//           </p>
//           <p>
//             <strong>Mobile Number:</strong> {agentData.mobileNumber}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AgentDashboard;

//++++++++++++++++++++++ Updated data ++++++++++++++++++++++++===============

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../Admin/AdminDashboard.css";

// const AgentDashboard = () => {
//   const [agentData, setAgentData] = useState(null);
//   const [error, setError] = useState("");
//   const [message, setMessage] = useState("");
//   const [activeSection, setActiveSection] = useState("Dashboard"); // State for tracking active section

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
//         if (!loggedInUser || loggedInUser.userType !== "agent") {
//           setError("User not authorized");
//           return;
//         }

//         const response = await axios.post(
//           "http://localhost:5000/api/agents/getLoggedInUserData",
//           {
//             username: loggedInUser.username,
//           }
//         );
//         setAgentData(response.data.data);
//       } catch (err) {
//         setError("Failed to fetch user data");
//       }
//     };

//     fetchUserData();
//   }, []);

//   const handleSendUpdate = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/agents/sendUpdate",
//         {
//           username: agentData.username,
//         }
//       );
//       setMessage(response.data.message || "Update sent successfully!");
//     } catch (err) {
//       setMessage("Failed to send update.");
//     }
//   };

//   const renderSection = () => {
//     switch (activeSection) {
//       case "Requested Data":
//         return <h1>Requested Data</h1>;
//       case "Add Data":
//         return <h1>Add Data</h1>;
//       case "Total Data":
//         return <h1>Total Data</h1>;
//       case "Potential Data":
//         return <h1>Potential Data</h1>;
//       case "Active Data":
//         return <h1>Active Data</h1>;
//       case "Non-Active Data":
//         return <h1>Non-Active Data</h1>;
//       case "Premium Data":
//         return <h1>Premium Data</h1>;
//       default:
//         return (
//           <>
//             <h1 className="company-welcome">
//               Welcome to GlobalB2B Mart, {agentData.name}!
//             </h1>
//             <div className="agent-info-card">
//               <div className="agent-info-header">
//                 <img
//                   src="./assets/logo.png" // Replace with your company logo
//                   alt="GlobalB2B Mart Logo"
//                   className="company-logo"
//                 />
//                 <h2 className="company-name">GlobalB2B Mart</h2>
//               </div>
//               <div className="agent-details">
//                 <p>
//                   <strong>👤 Username:</strong> {agentData.name}
//                 </p>
//                 <p>
//                   <strong>📞 Mobile Number:</strong> {agentData.mobileNumber}
//                 </p>
//               </div>
//               <div className="agent-actions">
//                 <button className="action-btn primary">View Profile</button>
//                 <button className="action-btn secondary">Send Message</button>
//               </div>
//             </div>
//           </>
//         );
//     }
//   };

//   if (error) return <p>{error}</p>;
//   if (!agentData) return <p>Loading...</p>;

//   return (
//     <div className="dashboard-container">
//       {/* Left Sidebar */}
//       <div className="sidebar">
//         <h2>Agent Dashboard</h2>
//         <ul>
//           <li onClick={() => setActiveSection("Dashboard")}>Dashboard</li>
//           <li onClick={() => setActiveSection("Requested Data")}>
//             Requested Data
//           </li>
//           <li onClick={() => setActiveSection("Add Data")}>Add Data</li>
//           <li onClick={() => setActiveSection("Total Data")}>Total Data</li>
//           <li onClick={() => setActiveSection("Potential Data")}>
//             Potential Data
//           </li>
//           <li onClick={() => setActiveSection("Active Data")}>Active Data</li>
//           <li onClick={() => setActiveSection("Non-Active Data")}>
//             Non-Active Data
//           </li>
//           <li onClick={() => setActiveSection("Premium Data")}>Premium Data</li>
//           <li onClick={handleSendUpdate}>Send Update</li>
//           <li>Settings</li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="main-content">{renderSection()}</div>
//     </div>
//   );
// };

// export default AgentDashboard;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../Admin/AdminDashboard.css";
// import RequestedData from "./SendMessageData"; // Import the child component
// import ActiveData from "./ActiveData";

// const AgentDashboard = () => {
//   const [agentData, setAgentData] = useState(null);
//   const [error, setError] = useState("");
//   const [message, setMessage] = useState("");
//   const [activeSection, setActiveSection] = useState("Dashboard");

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
//         if (!loggedInUser || loggedInUser.userType !== "agent") {
//           setError("User not authorized");
//           return;
//         }

//         const response = await axios.post(
//           "http://localhost:5000/api/agents/getLoggedInUserData",
//           {
//             username: loggedInUser.username,
//           }
//         );
//         setAgentData(response.data.data);
//       } catch (err) {
//         setError("Failed to fetch user data");
//       }
//     };

//     fetchUserData();
//   }, []);
//   const handleSendUpdate = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/agents/sendUpdate",
//         {
//           username: agentData.username,
//         }
//       );
//       setMessage(response.data.message || "Update sent successfully!");
//     } catch (err) {
//       setMessage("Failed to send update.");
//     }
//   };

//   const renderSection = () => {
//     switch (activeSection) {
//       case "Requested Data":
//         return <RequestedData messageSent={agentData.messagesSent} />;
//       case "Add Data":
//         return <h1>Add Data</h1>;
//       case "Total Data":
//         return <h1>Total Data</h1>;
//       case "Potential Data":
//         return <h1>Potential Data</h1>;
//       case "Active Data":
//         return <ActiveData />;
//       case "Non-Active Data":
//         return <h1>Non-Active Data</h1>;
//       case "Premium Data":
//         return <h1>Premium Data</h1>;
//       default:
//         return (
//           <>
//             <h1 className="company-welcome">
//               Welcome to GlobalB2B Mart, {agentData.name}!
//             </h1>
//             <div className="agent-info-card">
//               <div className="agent-info-header">
//                 <img
//                   src="./assets/logo.png" // Replace with your company logo
//                   alt="GlobalB2B Mart Logo"
//                   className="company-logo"
//                 />
//                 <h2 className="company-name">GlobalB2B Mart</h2>
//               </div>
//               <div className="agent-details">
//                 <p>
//                   <strong>👤 Username:</strong> {agentData.name}
//                 </p>
//                 <p>
//                   <strong>📞 Mobile Number:</strong> {agentData.mobileNumber}
//                 </p>
//               </div>
//               <div className="agent-actions">
//                 <button className="action-btn primary">View Profile</button>
//                 <button className="action-btn secondary">Send Message</button>
//               </div>
//             </div>
//           </>
//         );
//     }
//   };

//   if (error) return <p>{error}</p>;
//   if (!agentData) return <p>Loading...</p>;

//   return (
//     <div className="dashboard-container">
//       {/* Left Sidebar */}
//       <div className="sidebar">
//         <h2>Agent Dashboard</h2>
//         <ul>
//           <li onClick={() => setActiveSection("Dashboard")}>Dashboard</li>
//           <li onClick={() => setActiveSection("Requested Data")}>
//             Requested Data
//           </li>
//           <li onClick={() => setActiveSection("Add Data")}>Add Data</li>
//           <li onClick={() => setActiveSection("Total Data")}>Total Data</li>
//           <li onClick={() => setActiveSection("Potential Data")}>
//             Potential Data
//           </li>
//           <li onClick={() => setActiveSection("Active Data")}>Active Data</li>
//           <li onClick={() => setActiveSection("Non-Active Data")}>
//             Non-Active Data
//           </li>
//           <li onClick={() => setActiveSection("Premium Data")}>Premium Data</li>
//           <li onClick={handleSendUpdate}>Send Update</li>
//           <li>Settings</li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="main-content">{renderSection()}</div>
//     </div>
//   );
// };

// export default AgentDashboard;

// ++++++++++++= Active Data added ================
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../Admin/AdminDashboard.css";
// import RequestedData from "./SendMessageData"; // Import the child component

// const AgentDashboard = () => {
//   const [agentData, setAgentData] = useState(null);
//   const [error, setError] = useState("");
//   const [message, setMessage] = useState("");
//   const [activeSection, setActiveSection] = useState("Dashboard");
//   const [activeData, setActiveData] = useState([]); // State for storing active data

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
//         if (!loggedInUser || loggedInUser.userType !== "agent") {
//           setError("User not authorized");
//           return;
//         }

//         const response = await axios.post(
//           "http://localhost:5000/api/agents/getLoggedInUserData",
//           {
//             username: loggedInUser.username,
//           }
//         );
//         setAgentData(response.data.data);
//       } catch (err) {
//         setError("Failed to fetch user data");
//       }
//     };

//     fetchUserData();
//   }, []);

//   const handleSendUpdate = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/agents/sendUpdate",
//         {
//           username: agentData.username,
//         }
//       );
//       setMessage(response.data.message || "Update sent successfully!");
//     } catch (err) {
//       setMessage("Failed to send update.");
//     }
//   };

//   const handleActiveDataUpdate = (newActiveData) => {
//     setActiveData(newActiveData);
//   };

//   const renderSection = () => {
//     switch (activeSection) {
//       case "Requested Data":
//         return (
//           <RequestedData
//             messageSent={agentData.messagesSent}
//             onActiveDataUpdate={handleActiveDataUpdate}
//           />
//         );
//       case "Active Data":
//         return (
//           <div>
//             <h1>Active Data</h1>
//             <div className="active-data-list">
//               {activeData.map((data, index) => (
//                 <div className="active-data-item" key={index}>
//                   <h3>{data.name}</h3>
//                   <p>
//                     <strong>Mobile:</strong> {data.mobileNumber}
//                   </p>
//                   <p>
//                     <strong>Product/Service:</strong> {data.productOrService}
//                   </p>
//                   <p>
//                     <strong>Company:</strong> {data.companyName}
//                   </p>
//                   <p>
//                     <strong>Sent At:</strong>{" "}
//                     {new Date(data.sentAt).toLocaleString()}
//                   </p>
//                   <p>
//                     <strong>Comment:</strong> {data.comment}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         );
//       default:
//         return (
//           <div>
//             <h1 className="company-welcome">
//               Welcome to GlobalB2B Mart, {agentData.name}!
//             </h1>
//             {/* Rest of the dashboard content */}
//           </div>
//         );
//     }
//   };

//   if (error) return <p>{error}</p>;
//   if (!agentData) return <p>Loading...</p>;

//   return (
//     <div className="dashboard-container">
//       {/* Left Sidebar */}
//       <div className="sidebar">
//         <h2>Agent Dashboard</h2>
//         <ul>
//           <li onClick={() => setActiveSection("Dashboard")}>Dashboard</li>
//           <li onClick={() => setActiveSection("Requested Data")}>
//             Requested Data
//           </li>
//           <li onClick={() => setActiveSection("Active Data")}>Active Data</li>
//           {/* Other menu items */}
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="main-content">{renderSection()}</div>
//     </div>
//   );
// };

// export default AgentDashboard;
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Admin/AdminDashboard.css";
import RequestedData from "./SendMessageData"; // Import the child component

const AgentDashboard = () => {
  const [agentData, setAgentData] = useState(null);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [activeData, setActiveData] = useState([]); // State for storing active data

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        if (!loggedInUser || loggedInUser.userType !== "agent") {
          setError("User not authorized");
          return;
        }

        const response = await axios.post(
          "http://localhost:5000/api/agents/getLoggedInUserData",
          {
            username: loggedInUser.username,
          }
        );
        setAgentData(response.data.data);
      } catch (err) {
        setError("Failed to fetch user data");
      }
    };

    fetchUserData();

    // Load active data from localStorage
    const savedActiveData =
      JSON.parse(localStorage.getItem("activeData")) || [];
    setActiveData(savedActiveData);
  }, []);

  const handleActiveDataUpdate = (newActiveData) => {
    setActiveData(newActiveData);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "Requested Data":
        return (
          <RequestedData
            messageSent={agentData.messagesSent}
            onActiveDataUpdate={handleActiveDataUpdate}
          />
        );
      case "Active Data":
        return (
          <div>
            <h1>Active Data</h1>
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Sr. No.</th>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Product/Service</th>
                    <th>Company</th>
                    <th>Sent At</th>
                    <th>Comment</th>
                  </tr>
                </thead>
                <tbody>
                  {activeData.map((data, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{data.name}</td>
                      <td>{data.mobileNumber}</td>
                      <td>{data.productOrService}</td>
                      <td>{data.companyName}</td>
                      <td>{new Date(data.sentAt).toLocaleString()}</td>
                      <td>{data.comment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case "Add Data":
        return <h1>Add Data</h1>;
      case "Total Data":
        return <h1>Total Data</h1>;
      case "Potential Data":
        return <h1>Potential Data</h1>;

      case "Non-Active Data":
        return <h1>Non-Active Data</h1>;
      case "Premium Data":
        return <h1>Premium Data</h1>;

      default:
        return (
          <div>
            <h1 className="company-welcome">
              Welcome to GlobalB2B Mart, {agentData.name}!
            </h1>
            <div className="agent-info-card">
              <div className="agent-info-header">
                <img
                  src="./assets/logo.png" // Replace with your company logo
                  alt="GlobalB2B Mart Logo"
                  className="company-logo"
                />
                <h2 className="company-name">GlobalB2B Mart</h2>
              </div>
              <div className="agent-details">
                <p>
                  <strong>👤 Username:</strong> {agentData.name}
                </p>
                <p>
                  <strong>📞 Mobile Number:</strong> {agentData.mobileNumber}
                </p>
              </div>
              <div className="agent-actions">
                <button className="action-btn primary">View Profile</button>
                <button className="action-btn secondary">Send Message</button>
              </div>
            </div>
            {/* Rest of the dashboard content */}
          </div>
        );
    }
  };

  if (error) return <p>{error}</p>;
  if (!agentData) return <p>Loading...</p>;

  return (
    <div className="dashboard-container">
      {/* Left Sidebar */}
      <div className="sidebar">
        <h2>Agent Dashboard</h2>
        <ul>
          <li onClick={() => setActiveSection("Dashboard")}>Dashboard</li>
          <li onClick={() => setActiveSection("Requested Data")}>
            Requested Data
          </li>
          <li onClick={() => setActiveSection("Active Data")}>Active Data</li>
          <li onClick={() => setActiveSection("Add Data")}>Add Data</li>
          <li onClick={() => setActiveSection("Total Data")}>Total Data</li>

          <li onClick={() => setActiveSection("Potential Data")}>
            {" "}
            Potential Data
          </li>

          <li onClick={() => setActiveSection("Non-Active Data")}>
            Non-Active Data
          </li>

          <li onClick={() => setActiveSection("Premium Data")}>Premium Data</li>
          {/* Other menu items */}
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">{renderSection()}</div>
    </div>
  );
};

export default AgentDashboard;
