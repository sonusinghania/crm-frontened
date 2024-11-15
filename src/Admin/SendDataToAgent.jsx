// // SendDataToAgent.js
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const SendDataToAgent = () => {
//   const [agents, setAgents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showForm, setShowForm] = useState(false);
//   const [selectedAgent, setSelectedAgent] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phoneNumber: "",
//     description: "",
//   });

//   useEffect(() => {
//     // Fetch all agents when component loads
//     fetchAgents();
//   }, []);

//   const fetchAgents = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:5000/api/agents/allagents"
//       );
//       setAgents(response.data.data || []);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching agents:", error);
//       setLoading(false);
//     }
//   };

//   // Open the form modal and set the selected agent
//   const openForm = (agent) => {
//     setSelectedAgent(agent);
//     setShowForm(true);
//   };

//   // Close the form modal
//   const closeForm = () => {
//     setShowForm(false);
//     setSelectedAgent(null);
//     setFormData({ name: "", email: "", phoneNumber: "", description: "" });
//   };

//   // Handle form data changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission to send data to the selected agent
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(
//         `http://localhost:5000/api/agents/send-data/${selectedAgent._id}`,
//         formData
//       );
//       alert("Data sent successfully!");
//       closeForm();
//     } catch (error) {
//       console.error("Error sending data to agent:", error);
//       alert("Failed to send data");
//     }
//   };

//   return (
//     <div className="send-data-section">
//       <h2>Send Data to Agent Section</h2>
//       {loading ? (
//         <p>Loading agents...</p>
//       ) : (
//         <table className="agents-table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Mobile Number</th>
//               <th>Send Data</th>
//             </tr>
//           </thead>
//           <tbody>
//             {agents.map((agent) => (
//               <tr key={agent._id}>
//                 <td>{agent.name}</td>
//                 <td>{agent.mobileNumber}</td>
//                 <td>
//                   <button
//                     className="send-data-button"
//                     onClick={() => openForm(agent)}
//                   >
//                     Send Data
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       {showForm && (
//         <div className="form-modal">
//           <div className="form-container">
//             <h3>Send Data to {selectedAgent.name}</h3>
//             <form onSubmit={handleSubmit}>
//               <label>
//                 Name:
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </label>
//               <label>
//                 Email:
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </label>
//               <label>
//                 Phone Number:
//                 <input
//                   type="text"
//                   name="phoneNumber"
//                   value={formData.phoneNumber}
//                   onChange={handleChange}
//                   required
//                 />
//               </label>
//               <label>
//                 Description:
//                 <textarea
//                   name="description"
//                   value={formData.description}
//                   onChange={handleChange}
//                   required
//                 />
//               </label>
//               <button type="submit">Send</button>
//               <button type="button" onClick={closeForm}>
//                 Cancel
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SendDataToAgent;

// Here Is Data

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./AdminDashboard.css"; // Make sure to create and import this CSS file for styling

// const SendDataToAgent = () => {
//   const [agents, setAgents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showForm, setShowForm] = useState(false);
//   const [selectedAgent, setSelectedAgent] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phoneNumber: "",
//     description: "",
//   });

//   useEffect(() => {
//     // Fetch all agents when component loads
//     fetchAgents();
//   }, []);

//   const fetchAgents = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:5000/api/agents/allagents"
//       );
//       setAgents(response.data.data || []);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching agents:", error);
//       setLoading(false);
//     }
//   };

//   const openForm = (agent) => {
//     setSelectedAgent(agent);
//     setShowForm(true);
//   };

//   const closeForm = () => {
//     setShowForm(false);
//     setSelectedAgent(null);
//     setFormData({ name: "", email: "", phoneNumber: "", description: "" });
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(
//         `http://localhost:5000/api/agents/send-data/${selectedAgent._id}`,
//         formData
//       );
//       alert("Data sent successfully!");
//       closeForm();
//     } catch (error) {
//       console.error("Error sending data to agent:", error);
//       alert("Failed to send data");
//     }
//   };

//   return (
//     <div className="send-data-section">
//       <h2>Send Data to Agent Section</h2>
//       {loading ? (
//         <p>Loading agents...</p>
//       ) : (
//         <table className="agents-table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Mobile Number</th>
//               <th>Send Data</th>
//             </tr>
//           </thead>
//           <tbody>
//             {agents.map((agent) => (
//               <tr key={agent._id}>
//                 <td>{agent.name}</td>
//                 <td>{agent.mobileNumber}</td>
//                 <td>
//                   <button
//                     className="send-data-button"
//                     onClick={() => openForm(agent)}
//                   >
//                     Send Data
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       {showForm && (
//         <div className="modal-overlay">
//           <div className="form-modal">
//             <div className="form-container">
//               <h3>Send Data to {selectedAgent.name}</h3>
//               <form onSubmit={handleSubmit}>
//                 <label>
//                   Name:
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                   />
//                 </label>
//                 <label>
//                   Email:
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </label>
//                 <label>
//                   Phone Number:
//                   <input
//                     type="text"
//                     name="phoneNumber"
//                     value={formData.phoneNumber}
//                     onChange={handleChange}
//                     required
//                   />
//                 </label>
//                 <label>
//                   Description:
//                   <textarea
//                     name="description"
//                     value={formData.description}
//                     onChange={handleChange}
//                     required
//                   />
//                 </label>
//                 <button type="submit">Send</button>
//                 <button type="button" onClick={closeForm}>
//                   Cancel
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SendDataToAgent;

// ++++++++++++++ Here is data Sent +++++++++++++++++++++
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminDashboard.css"; // Ensure you have the correct CSS for styling

const SendDataToAgent = () => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    // Fetch all agents when component loads
    fetchAgents();
  }, []);

  const fetchAgents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/agents/allagents"
      );
      setAgents(response.data.data || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching agents:", error);
      setLoading(false);
    }
  };

  const handleSendData = async (agentId) => {
    if (!agentId) return;

    setIsSending(true);
    try {
      // Trigger the backend to send data in chunks of 20
      await axios.post(
        `http://localhost:5000/api/agents/send-bulk-data/${agentId}`
      );
      alert("Data sent successfully!");
    } catch (error) {
      console.error("Error sending data to agent:", error);
      alert("Failed to send data");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="send-data-section">
      <h2>Send Data to Agent Section</h2>
      {loading ? (
        <p>Loading agents...</p>
      ) : (
        <table className="agents-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile Number</th>
              <th>Send Data</th>
            </tr>
          </thead>
          <tbody>
            {agents.map((agent) => (
              <tr key={agent._id}>
                <td>{agent.name}</td>
                <td>{agent.mobileNumber}</td>
                <td>
                  <button
                    className="send-data-button"
                    onClick={() => handleSendData(agent._id)}
                    disabled={isSending}
                  >
                    {isSending ? "Sending..." : "Send Data"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SendDataToAgent;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./AdminDashboard.css"; // Ensure proper styling

// const SendDataToAgent = () => {
//   const [agents, setAgents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showForm, setShowForm] = useState(false);
//   const [selectedAgent, setSelectedAgent] = useState(null);

//   useEffect(() => {
//     // Fetch all agents when component loads
//     fetchAgents();
//   }, []);

//   const fetchAgents = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:5000/api/agents/allagents"
//       );
//       setAgents(response.data.data || []);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching agents:", error);
//       setLoading(false);
//     }
//   };

//   // const handleSendData = async (agent) => {
//   //   try {
//   //     await axios.post(
//   //       `http://localhost:5000/api/agents/send-data/${agent._id}`
//   //     );
//   //     alert("Data sent successfully!");
//   //   } catch (error) {
//   //     console.error("Error sending data to agent:", error);
//   //     alert("Failed to send data");
//   //   }
//   // };

//   const handleSendData = async (agent) => {
//     try {
//       const response = await axios.post(
//         `http://localhost:5000/api/agents/send-data/${agent._id}`
//       );
//       alert("Data sent successfully!");
//     } catch (error) {
//       console.error("Error sending data to agent:", error.response.data);
//       alert(`Failed to send data: ${error.response.data.message}`);
//     }
//   };

//   return (
//     <div className="send-data-section">
//       <h2>Send Data to Agent Section</h2>
//       {loading ? (
//         <p>Loading agents...</p>
//       ) : (
//         <table className="agents-table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Mobile Number</th>
//               <th>Send Data</th>
//             </tr>
//           </thead>
//           <tbody>
//             {agents.map((agent) => (
//               <tr key={agent._id}>
//                 <td>{agent.name}</td>
//                 <td>{agent.mobileNumber}</td>
//                 <td>
//                   <button
//                     className="send-data-button"
//                     onClick={() => handleSendData(agent)}
//                   >
//                     Send Data
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default SendDataToAgent;
