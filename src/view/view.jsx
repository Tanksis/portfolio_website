import React from "react";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import { Route, Routes } from "react-router-dom";
import "./view.css";

export default function View() {
    return (
        <div className="view">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<h1>Projects</h1>} />
            </Routes>
        </div>
    );
};