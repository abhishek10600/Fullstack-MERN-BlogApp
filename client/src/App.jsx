import React, { useContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import BlogsPage from "./pages/BlogsPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import axios from "axios";
import { UserContext } from "./context/UserContext";

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
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
