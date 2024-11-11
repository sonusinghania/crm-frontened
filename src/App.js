// import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate,
// } from "react-router-dom";
// import UserLogin from "./Admin/UserLogins";
// import AdminDashboard from "./Admin/AdminDashboard";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleUserLogin = (user) => {
//     // Set authentication state to true upon successful login
//     setIsAuthenticated(true);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           {/* Route for Login Page */}
//           <Route
//             path="/login"
//             element={<UserLogin onUserLogin={handleUserLogin} />}
//           />

//           {/* Protected Route for Admin Dashboard */}
//           <Route
//             path="/admin-dashboard"
//             element={
//               isAuthenticated ? (
//                 <AdminDashboard />
//               ) : (
//                 // Redirect to login page if not authenticated
//                 <Navigate to="/login" replace />
//               )
//             }
//           />

//           {/* Redirect root to login */}
//           <Route path="/" element={<Navigate to="/login" />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import UserLogin from "./Admin/UserLogins";
import AdminDashboard from "./Admin/AdminDashboard";
import AgentDashboard from "./Agent/AgentDashboard"; // Import the agent dashboard

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState(""); // Track the user type

  const handleUserLogin = (type) => {
    // Set authentication state to true and set userType upon successful login
    setIsAuthenticated(true);
    setUserType(type);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for Login Page */}
          <Route
            path="/login"
            element={<UserLogin onUserLogin={handleUserLogin} />}
          />

          {/* Protected Route for Admin Dashboard */}
          <Route
            path="/admin-dashboard"
            element={
              isAuthenticated && userType === "admin" ? (
                <AdminDashboard />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* Protected Route for Agent Dashboard */}
          <Route
            path="/agent-dashboard"
            element={
              isAuthenticated && userType === "agent" ? (
                <AgentDashboard />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* Redirect root to login */}
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
