import { Routes, Route } from "react-router-dom";
import Header from "./components/shared/Header/Header";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import UserProfilePage from "./pages/profile/UserProfilePage";
import Register from "./pages/register/Register";
import ServiceCreate from "./pages/ServiceCreatePage/ServiceCreatePage";
import NotFound from "./pages/not-found/NotFound";
import Footer from "./components/shared/Footer/Footer";
import CommentCreatePage from "./pages/CommentCreatePage/CommentCreatePage";
import ServicePage from "./pages/ServicePage/ServicePage";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<UserProfilePage />} />
        <Route path="register" element={<Register />} />

        <Route path="services/service/:id" element={<ServicePage />} />
        <Route path="services" element={<ServiceCreate />} />
        <Route path="services/:id/comment" element={<CommentCreatePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
