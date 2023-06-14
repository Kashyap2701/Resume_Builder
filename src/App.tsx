import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import CreateResume from "./Pages/Create Resume/CreateResume";
import Home from "./Pages/Home/Home";
import { MyResumes } from "./Pages/My Resume/MyResumes";
import EditProfile from "./Pages/Edit profile/EditProfile";
import ProtectedRoutes from "./Components/ProtectedRoutes";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/my-resumes"
          element={<ProtectedRoutes Component={MyResumes} />}
        />
        <Route
          path="/edit-profile"
          element={<ProtectedRoutes Component={EditProfile} />}
        />
        <Route
          path="/create-resume"
          element={<ProtectedRoutes Component={CreateResume} />}
        />
      </Routes>
    </div>
  );
}

export default App;
