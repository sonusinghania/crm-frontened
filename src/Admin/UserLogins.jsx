// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const UserLogin = ({ onUserLogin }) => {
//   const [credentials, setCredentials] = useState({
//     username: "",
//     password: "",
//   });
//   const [error, setError] = useState("");
//   const navigate = useNavigate(); // Use navigate for redirection

//   const handleChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/user/login",
//         credentials
//       );

//       // If login successful, trigger onUserLogin and navigate to dashboard
//       onUserLogin(response.data.user);
//       setError("");
//       navigate("/admin-dashboard"); // Redirect to admin dashboard after login
//     } catch (err) {
//       setError("Invalid credentials");
//     }
//   };

//   return (
//     <div>
//       <h1>Welcome To Globalb2b Mart CRM Dashboard</h1>
//       <h2>Users Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="username"
//           placeholder="Username"
//           onChange={handleChange}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handleChange}
//         />
//         <button type="submit">Login</button>
//       </form>
//       {error && <p>{error}</p>}
//     </div>
//   );
// };

// export default UserLogin;
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const UserLogin = ({ onUserLogin }) => {
//   const [credentials, setCredentials] = useState({
//     username: "",
//     password: "",
//   });
//   const [error, setError] = useState("");
//   const [userType, setUserType] = useState("admin"); // Set default userType to admin
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     let url = "";
//   //     if (userType === "admin") {
//   //       url = "http://localhost:5000/api/user/login"; // Admin login
//   //     } else {
//   //       url = "http://localhost:5000/api/agents/login"; // Agent login
//   //     }

//   //     const response = await axios.post(url, credentials);

//   //     // If login successful, trigger onUserLogin and navigate accordingly
//   //     onUserLogin(userType);
//   //     setError("");

//   //     if (userType === "admin") {
//   //       navigate("/admin-dashboard");
//   //     } else {
//   //       navigate("/agent-dashboard");
//   //     }
//   //   } catch (err) {
//   //     setError("Invalid credentials");
//   //   }
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       let url =
//         userType === "admin"
//           ? "http://localhost:5000/api/user/login"
//           : "http://localhost:5000/api/agents/login";

//       const response = await axios.post(url, credentials);

//       // Store user data after successful login
//       localStorage.setItem(
//         "loggedInUser",
//         JSON.stringify({ username: credentials.username, userType })
//       );

//       // Trigger onUserLogin and navigate
//       onUserLogin(userType);
//       setError("");
//       navigate(userType === "admin" ? "/admin-dashboard" : "/agent-dashboard");
//     } catch (err) {
//       setError("Invalid credentials");
//     }
//   };
//   return (
//     <div>
//       <h1>Welcome To Globalb2b Mart CRM Dashboard</h1>
//       <h2>Users Login</h2>
//       <form onSubmit={handleSubmit}>
//         <select onChange={(e) => setUserType(e.target.value)}>
//           <option value="admin">Admin</option>
//           <option value="agent">Agent</option>
//         </select>

//         <input
//           type="text"
//           name="username"
//           placeholder="Username"
//           onChange={handleChange}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handleChange}
//         />
//         <button type="submit">Login</button>
//       </form>
//       {error && <p>{error}</p>}
//     </div>
//   );
// };

// export default UserLogin;

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./AdminDashboard.css"; // Assuming your external CSS file is named UserLogin.css

// const UserLogin = ({ onUserLogin }) => {
//   const [credentials, setCredentials] = useState({
//     username: "",
//     password: "",
//   });
//   const [error, setError] = useState("");
//   const [userType, setUserType] = useState("admin"); // Set default userType to admin
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       let url =
//         userType === "admin"
//           ? "http://localhost:5000/api/user/login"
//           : "http://localhost:5000/api/agents/login";

//       const response = await axios.post(url, credentials);

//       // Store user data after successful login
//       localStorage.setItem(
//         "loggedInUser",
//         JSON.stringify({ username: credentials.username, userType })
//       );

//       // Trigger onUserLogin and navigate
//       onUserLogin(userType);
//       setError("");
//       navigate(userType === "admin" ? "/admin-dashboard" : "/agent-dashboard");
//     } catch (err) {
//       setError("Invalid credentials");
//     }
//   };

//   return (
//     <div className="login-container">
//       <img src="./assets/logo.png" alt="Logo" className="login-logo" />
//       <h1 className="login-title">Welcome To Globalb2b Mart CRM Dashboard</h1>
//       <h2 className="login-subtitle">Users Login</h2>
//       <form onSubmit={handleSubmit} className="login-form">
//         <select
//           onChange={(e) => setUserType(e.target.value)}
//           className="login-select"
//         >
//           <option value="admin">Admin</option>
//           <option value="agent">Agent</option>
//         </select>
//         <input
//           type="text"
//           name="username"
//           placeholder="Username"
//           onChange={handleChange}
//           className="login-input"
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handleChange}
//           className="login-input"
//         />
//         <button type="submit" className="login-button">
//           Login
//         </button>
//       </form>
//       {error && <p className="login-error">{error}</p>}
//     </div>
//   );
// };

// export default UserLogin;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

const UserLogin = ({ onUserLogin }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [userType, setUserType] = useState("admin");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let url =
        userType === "admin"
          ? "http://localhost:5000/api/user/login"
          : "http://localhost:5000/api/agents/login";

      const response = await axios.post(url, credentials);

      // Store user data after successful login
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ username: credentials.username, userType })
      );

      // Trigger onUserLogin and navigate
      onUserLogin(userType);
      setError("");
      navigate(userType === "admin" ? "/admin-dashboard" : "/agent-dashboard");
    } catch (err) {
      // Check for approval-related error from server response
      if (err.response && err.response.status === 403) {
        setError(
          "Your account is not approved by admin. Please contact admin."
        );
      } else {
        setError("Invalid credentials");
      }
    }
  };

  return (
    <div className="login-container">
      <img src="./assets/logo.png" alt="Logo" className="login-logo" />
      <h1 className="login-title">Welcome To Globalb2b Mart CRM Dashboard</h1>
      <h2 className="login-subtitle">Users Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <select
          onChange={(e) => setUserType(e.target.value)}
          className="login-select"
        >
          <option value="admin">Admin</option>
          <option value="agent">Agent</option>
        </select>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className="login-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="login-input"
        />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      {error && <p className="login-error">{error}</p>}
    </div>
  );
};

export default UserLogin;
