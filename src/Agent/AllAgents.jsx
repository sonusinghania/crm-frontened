// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../Admin/AdminDashboard.css";

// const AllAgents = ({ activeSection }) => {
//   const [agents, setAgents] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (activeSection === "allAgents") {
//       fetchAgents();
//     }
//   }, [activeSection]);

//   const fetchAgents = async () => {
//     setLoading(true);
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

//   return (
//     <div className="all-agents-section">
//       <h2>All Agents Section</h2>
//       {loading ? (
//         <p>Loading...</p>
//       ) : agents.length > 0 ? (
//         <table className="agents-table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Mobile Number</th>
//               <th>Status</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {agents.map((agent) => (
//               <tr key={agent._id}>
//                 <td>{agent.name}</td>
//                 <td>{agent.mobileNumber}</td>
//                 <td>{agent.isActive ? "Active" : "Inactive"}</td>

//                 <td>
//                   <button
//                     className={`permission-button ${
//                       agent.isActive ? "deactivate" : ""
//                     }`}
//                   >
//                     {agent.isActive ? "Deactivate" : "Activate"}
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No agents found</p>
//       )}
//     </div>
//   );
// };

// export default AllAgents;
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Admin/AdminDashboard.css";

const AllAgents = ({ activeSection }) => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (activeSection === "allAgents") {
      fetchAgents();
    }
  }, [activeSection]);

  const fetchAgents = async () => {
    setLoading(true);
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

  // Toggle agent activation status
  const toggleAgentStatus = async (agentId) => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/api/agents/toggle-active/${agentId}`
      );
      const updatedAgent = response.data.agent;

      // Update the local agents state to reflect the change
      setAgents((prevAgents) =>
        prevAgents.map((agent) =>
          agent._id === agentId
            ? { ...agent, isActive: updatedAgent.isActive }
            : agent
        )
      );
    } catch (error) {
      console.error("Error updating agent status:", error);
    }
  };

  return (
    <div className="all-agents-section">
      <h2>All Agents Section</h2>
      {loading ? (
        <p>Loading...</p>
      ) : agents.length > 0 ? (
        <table className="agents-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile Number</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {agents.map((agent) => (
              <tr key={agent._id}>
                <td>{agent.name}</td>
                <td>{agent.mobileNumber}</td>
                <td>{agent.isActive ? "Active" : "Inactive"}</td>
                <td>
                  <button
                    className={`permission-button ${
                      agent.isActive ? "deactivate" : "activate"
                    }`}
                    onClick={() => toggleAgentStatus(agent._id)}
                  >
                    {agent.isActive ? "Deactivate" : "Activate"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No agents found</p>
      )}
    </div>
  );
};

export default AllAgents;
