import './App.css';
import './Components/theHeader.js';
import './Components/slideshow';
import './Components/MovieGallery';
import './Components/TVGallery';

import ImageSlideshow from "./Components/slideshow";
import MovieGallery from "./Components/MovieGallery";
import TVGallery from "./Components/TVGallery";
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from "react-router-dom";

const login = () => {
    return (
        <>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username"/>

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password"/>

                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default login;