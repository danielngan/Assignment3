// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
//import "./Header.css"; // Optional: Add styling

const theHeader = () => {
    return (
        <header>
            <h1>My Website</h1>
            <nav>
                <ul>
                    <li><Link to="/">Movies</Link></li>
                    <li><Link to="/">TV</Link></li>
                    <li><Link to="/about">Sign Up</Link></li>
                    <li><Link to="/contact">Login</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default theHeader;
