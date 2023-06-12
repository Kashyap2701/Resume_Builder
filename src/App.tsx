import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Login from "./Pages/Auth/Login";
import { Signup } from "./Pages/Auth/Signup";
import CreateResume from "./Pages/Create Resume/CreateResume";
import Home from "./Pages/Home/Home";
import { MyResumes } from "./Pages/My Resume/MyResumes";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/my-resumes" element={<MyResumes />} />
        <Route path="/create-resume" element={<CreateResume />} />
      </Routes>
    </div>
  );
}

export default App;
