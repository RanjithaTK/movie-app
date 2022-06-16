import React from "react";

import Login from "./components/Login";
import Home from "./components/Home";
import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
