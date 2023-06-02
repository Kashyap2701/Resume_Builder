import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./Pages/Auth/Login";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
