import Navbar from "./Navbar";
import Users from "./Users";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import User from "./User";
import { Route, Routes, useLocation } from "react-router-dom";
import Notfound from "./Notfound";
import Dashbord from "./Dashbord";
import { useState, useEffect } from "react";
import LogOut from "./LogOut";
import ProtectedRoute from "./ProtectedRoute"
const Page3 = () => {
  const location = useLocation();
  const hideNavbar = location.pathname.includes("/users/") && location.pathname.split("/").length > 3;
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser(true); {/* const response = await axios.post("api path",{token}) */}
    } else {
      setUser(null);
    }
  }, []); 

  
  const handleLogin = () => {
    setUser(true);
  };


  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      {!hideNavbar && <Navbar user={user} />} 
      <div className="container mt-3">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="users/:id" element={
              <ProtectedRoute user={user}> 
                <User />
              </ProtectedRoute>
            } />
          <Route path="logout" element={<LogOut onLogout={handleLogout} />} />
           <Route path="users" element={
              <ProtectedRoute user={user}> 
                <Users />
              </ProtectedRoute>
            } />
          <Route path="login" element={<Login onLogin={handleLogin} />} />
          <Route path="register" element={<Register />} />
          <Route path="dashbord" element={
              <ProtectedRoute user={user}> 
                <Dashbord />
              </ProtectedRoute>
            } />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </>
  );
};

export default Page3;