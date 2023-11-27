import { useContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import BlogsPage from "./pages/BlogsPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import axios from "axios";
import { UserContext } from "./context/UserContext";
import Dashboard from "./pages/Dashboard";
import CreateBlog from "./pages/CreateBlog";
import EditBlog from "./pages/EditBlog";

const App = () => {
  const { setUser, setIsLoggedIn } = useContext(UserContext);
  const getUser = async () => {
    const res = await axios.get(
      "http://localhost:4000/api/v1/users/getProfile",
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    if (res.data.success === true) {
      setUser(res.data.user);
      setIsLoggedIn(true);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/createblog" element={<CreateBlog />} />
        <Route path="/dashboard/editblog/:id" element={<EditBlog />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
