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

// export default AgentDashboard;
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Admin/AdminDashboard.css";

const AgentDashboard = () => {
  const [agentData, setAgentData] = useState(null);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

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
  }, []);

  const handleSendUpdate = async () => {
    try {
      // Implement the API call to send the update
      const response = await axios.post(
        "http://localhost:5000/api/agents/sendUpdate",
        {
          username: agentData.username,
        }
      );
      setMessage(response.data.message || "Update sent successfully!");
    } catch (err) {
      setMessage("Failed to send update.");
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
          <li>Dashboard</li>
          <li onClick={handleSendUpdate}>Send Update</li>
          <li>Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1>Welcome, {agentData.name}!</h1>
        <div className="agent-info">
          <p>
            <strong>Username:</strong> {agentData.name}
          </p>
          <p>
            <strong>Mobile Number:</strong> {agentData.mobileNumber}
          </p>
          <p>
            <strong>Password:</strong> {agentData.password}
          </p>
        </div>

        <button className="send-update-btn" onClick={handleSendUpdate}>
          Send Update
        </button>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default AgentDashboard;
