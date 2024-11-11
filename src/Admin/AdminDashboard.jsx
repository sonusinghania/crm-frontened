import React, { useState } from "react";
import axios from "axios";
import "./AdminDashboard.css"; // Import the CSS file
import AllAgents from "../Agent/AllAgents";
import SendDataToAgent from "./SendDataToAgent";

const AdminDashboard = () => {
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    name: "",
    mobileNumber: "",
  });
  const [message, setMessage] = useState("");
  const [activeSection, setActiveSection] = useState("createAgent"); // Track active section

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/agents/create", // Updated URL to match the backend route
        newUser
      );
      setMessage(response.data.message);
      // Clear form
      setNewUser({
        username: "",
        password: "",
        name: "",
        mobileNumber: "",
      });
    } catch (err) {
      setMessage(err.response?.data?.message || "Error creating user");
    }
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Admin Panel</h2>

        <ul>
          <li onClick={() => setActiveSection("createAgent")}>
            Create New Agent
          </li>
          <li onClick={() => setActiveSection("allAgents")}>All Agents</li>
          <li onClick={() => setActiveSection("sendData")}>
            Send Data to Agent
          </li>
          <li onClick={() => setActiveSection("followUp")}>Follow Up Data</li>
        </ul>
      </div>

      <div className="main-content">
        {activeSection === "createAgent" && (
          <section>
            <h2>Create New Agent</h2>
            <h4>Welcome to globalb2b Mart Admin Panel</h4>
            <form onSubmit={handleCreateUser}>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={newUser.username}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={newUser.password}
                onChange={handleChange}
              />
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={newUser.name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="mobileNumber"
                placeholder="Mobile Number"
                value={newUser.mobileNumber}
                onChange={handleChange}
              />
              <button type="submit">Create Agent</button>
            </form>
            {message && <p>{message}</p>}
          </section>
        )}

        {activeSection === "allAgents" && (
          <AllAgents activeSection={activeSection} />
        )}
        {activeSection === "sendData" && <SendDataToAgent />}
        {activeSection === "followUp" && <h2>Follow Up Data Section</h2>}
      </div>
    </div>
  );
};

export default AdminDashboard;
// In src/Admin/AdminDashboard.js (or wherever your AdminDashboard component is defined)
// import React, { useState } from "react";
// import axios from "axios";

// const AdminDashboard = () => {
//   const [newUser, setNewUser] = useState({
//     username: "",
//     password: "",
//     role: "", // Optional role for the new user
//   });
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setNewUser({ ...newUser, [e.target.name]: e.target.value });
//   };

//   const handleCreateUser = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/user/create",
//         newUser
//       );
//       setMessage(response.data.message);
//       // Clear form
//       setNewUser({ username: "", password: "", role: "" });
//     } catch (err) {
//       setMessage(err.response.data.message || "Error creating user");
//     }
//   };

//   return (
//     <div>
//       <h1>Admin Dashboard</h1>
//       <section>
//         <h2>Create New User</h2>
//         <form onSubmit={handleCreateUser}>
//           <input
//             type="text"
//             name="username"
//             placeholder="Username"
//             value={newUser.username}
//             onChange={handleChange}
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={newUser.password}
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             name="role"
//             placeholder="Role (admin/user)"
//             value={newUser.role}
//             onChange={handleChange}
//           />
//           <button type="submit">Create User</button>
//         </form>
//         {message && <p>{message}</p>}
//       </section>
//     </div>
//   );
// };

// export default AdminDashboard;
