import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Login from "./Pages/Auth/Login";
import { Signup } from "./Pages/Auth/Signup";
import CreateResume from "./Pages/Create Resume/CreateResume";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create-resume" element={<CreateResume />} />
      </Routes>
    </div>
  );
}

export default App;
