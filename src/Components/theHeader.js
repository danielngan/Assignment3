// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
//import "./Header.css"; // Optional: Add styling

const theHeader = () => {

    const navigate = useNavigate();
    return (
        <header style={styles.header}>
            <img src={"myassignmentlogo.jpg"} />
            <h1 style={styles.logo}>VULU</h1>
            <nav style={styles.nav}>
                <button style={styles.button} onClick={() => navigate("/register")}>Register</button>
                <button style={styles.button} onClick={() => navigate("/login")}>Login</button>
                <button style={styles.button} onClick={() => navigate("/MoviesPage")}>Movies</button>
                <button style={styles.button} onClick={() => navigate("/TVPage")}>TV</button>
            </nav>
        </header>
    );
};

const styles = {
    header: {
        display: "flex",             // Places items (logo + buttons) in a row
        justifyContent: "space-between", // Pushes logo left & buttons right
        alignItems: "center",        // Centers items vertically
        padding: "20px 40px",        // ✅ Adds space **inside the header**
        backgroundColor: "#333",
        color: "white",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
    }
};


export default theHeader;
