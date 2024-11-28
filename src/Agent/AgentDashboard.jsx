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
import TotalDataComponent from "./TotalData";

const AgentDashboard = () => {
  const [agentData, setAgentData] = useState(null);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [activeData, setActiveData] = useState([]); // State for storing active data
  const [potentialData, setPotentialData] = useState([]); // For Potential Data
  const [nonActiveData, setNonActiveData] = useState([]);
  const [premiumData, setPremiumData] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    companyName: "",
    cityname: "",
    productOrService: "",
    sentAt: new Date().toISOString().slice(0, 16), // Default to current date and time
  });

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  // const handleSubmit = async () => {
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5000/api/agents/getLoggedInUserData", // Replace with your API endpoint
  //       formData
  //     );
  //     console.log("Data submitted successfully:", response.data);
  //     alert("Data added successfully!");
  //     // Clear form
  //     setFormData({
  //       name: "",
  //       mobileNumber: "",
  //       companyName: "",
  //       cityname: "",
  //       productOrService: "",
  //       sentAt: new Date().toISOString().slice(0, 16),
  //     });
  //   } catch (error) {
  //     console.error("Error submitting data:", error);
  //     alert("Failed to submit data.");
  //   }
  // };

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
  useEffect(() => {
    // Retrieve saved data from localStorage for all categories
    const savedNonActiveData =
      JSON.parse(localStorage.getItem("nonActiveData")) || [];
    const savedPremiumData =
      JSON.parse(localStorage.getItem("premiumData")) || [];
    const savedPotentialData =
      JSON.parse(localStorage.getItem("potentialData")) || [];

    // Update state variables
    setNonActiveData(savedNonActiveData);
    setPremiumData(savedPremiumData);
    setPotentialData(savedPotentialData); // Ensure setPotentialData is declared in your state
  }, []);

  const handleActiveDataUpdate = (newActiveData) => {
    setActiveData(newActiveData);
  };
  // Handle updates to Potential Data
  const handlePotentialDataUpdate = (newPotentialData) => {
    setPotentialData(newPotentialData);
  };
  const handleNonActiveDataUpdate = (newNonActiveData) => {
    setNonActiveData(newNonActiveData);
  };

  const handlePremiumDataUpdate = (newPremiumData) => {
    setPremiumData(newPremiumData);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "Requested Data":
        return (
          <RequestedData
            messageSent={agentData.messagesSent}
            onActiveDataUpdate={handleActiveDataUpdate}
            onPotentialDataUpdate={handlePotentialDataUpdate}
            onNonActiveDataUpdate={handleNonActiveDataUpdate}
            onPremiumDataUpdate={handlePremiumDataUpdate}
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
        return (
          <>
            <h1
              style={{
                textAlign: "center",
              }}
            >
              Add Data
            </h1>
            <form
              className="add-data-form"
              onSubmit={(e) => {
                e.preventDefault();
                // handleSubmit();
              }}
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter Name"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mobileNumber" className="form-label">
                    Mobile Number:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Mobile Number"
                    id="mobileNumber"
                    className="form-input"
                    value={formData.mobileNumber}
                    onChange={(e) =>
                      handleInputChange("mobileNumber", e.target.value)
                    }
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="companyName" className="form-label">
                    Company Name:
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    placeholder="Enter Company Name"
                    className="form-input"
                    value={formData.companyName}
                    onChange={(e) =>
                      handleInputChange("companyName", e.target.value)
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cityname" className="form-label">
                    City Name:
                  </label>
                  <input
                    type="text"
                    id="cityname"
                    className="form-input"
                    placeholder="Enter City"
                    value={formData.cityname}
                    onChange={(e) =>
                      handleInputChange("cityname", e.target.value)
                    }
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="productOrService" className="form-label">
                    Product or Service:
                  </label>
                  <input
                    type="text"
                    id="productOrService"
                    placeholder="Enter Products And Services"
                    className="form-input"
                    value={formData.productOrService}
                    onChange={(e) =>
                      handleInputChange("productOrService", e.target.value)
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="sentAt" className="form-label">
                    Sent At:
                  </label>
                  <input
                    type="datetime-local"
                    id="sentAt"
                    className="form-input"
                    value={formData.sentAt}
                    onChange={(e) =>
                      handleInputChange("sentAt", e.target.value)
                    }
                    required
                  />
                </div>
              </div>

              <button type="submit" className="form-button">
                Submit
              </button>
            </form>
          </>
        );

      case "Total Data":
        return (
          <TotalDataComponent
            messageSent={agentData.messagesSent}
            onActiveDataUpdate={handleActiveDataUpdate}
          />
        );
      case "Potential Data":
        return (
          <div>
            <h1>Potential Data</h1>
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
                  {potentialData.map((data, index) => (
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

      case "Non-Active Data":
        return (
          <div>
            <h1>Non-Active Data</h1>
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
                  {nonActiveData.map((data, index) => (
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
      case "Premium Data":
        return (
          <div>
            <h1>Premium Data</h1>
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
                  {premiumData.map((data, index) => (
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
