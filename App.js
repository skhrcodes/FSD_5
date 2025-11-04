import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TaskList from "./TaskList";
import About from "./About";
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <h2>Task Manager</h2>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
