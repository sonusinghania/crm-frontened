import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminDashboard.css"; // Ensure you have the correct CSS for styling

const SendDataToAgent = () => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSending, setIsSending] = useState({}); // Object to track sending state for each agent

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

    // Update the isSending state for the specific agent
    setIsSending((prevState) => ({ ...prevState, [agentId]: true }));
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
      // Reset the isSending state for the specific agent
      setIsSending((prevState) => ({ ...prevState, [agentId]: false }));
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
                    disabled={isSending[agent._id] || false} // Disable only if this agent is being processed
                  >
                    {isSending[agent._id] ? "Sending..." : "Send Data"}
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

// ++++++++++++++ Here is data Sent +++++++++++++++++++++
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./AdminDashboard.css"; // Ensure you have the correct CSS for styling

// const SendDataToAgent = () => {
//   const [agents, setAgents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isSending, setIsSending] = useState(false);

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

//   const handleSendData = async (agentId) => {
//     if (!agentId) return;

//     setIsSending(true);
//     try {
//       // Trigger the backend to send data in chunks of 20
//       await axios.post(
//         `http://localhost:5000/api/agents/send-bulk-data/${agentId}`
//       );
//       alert("Data sent successfully!");
//     } catch (error) {
//       console.error("Error sending data to agent:", error);
//       alert("Failed to send data");
//     } finally {
//       setIsSending(false);
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
//                     onClick={() => handleSendData(agent._id)}
//                     disabled={isSending}
//                   >
//                     {isSending ? "Sending..." : "Send Data"}
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
