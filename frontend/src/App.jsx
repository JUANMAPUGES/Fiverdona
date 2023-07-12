import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import SignUp from "./pages/sign-up/SignUp";
import SignUpAvatar from "./pages/sign-up-avatar/SignUpAvatar";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardSearch from "./pages/dashboard-search/DashboardSearch";
import NotFound from "./pages/not-found/NotFound";
/* import NavBar from "./components/shared/nav-bar/NavBar"; */
import Servicios from "./pages/servicios/Servicios";
import "./index.css";

function App() {
  return (
    <div className="app">
      {/*  <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="avatar" element={<SignUpAvatar />} />
        <Route path="servicios/:id" element={<Servicios />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="search" element={<DashboardSearch />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
