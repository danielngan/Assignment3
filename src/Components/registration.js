// import './App.css';
// import './Components/Header';
// import './Components/slideshow';
// import './Components/MovieGallery';
// import './Components/TVGallery';

// import Hero from "./Components/slideshow";
// import MovieGallery from "./Components/MovieGallery";
// import TVGallery from "./Components/TVGallery";
// import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from "react-router-dom";

const registration = () => {
    return (
        <>
            <form>
                <label htmlFor="first name">First name:</label>
                <input type="text" id="first name" name="first name"/>

                <label htmlFor="last name">Last name:</label>
                <input type="text" id="last name" name="last name"/>

                <label htmlFor="email">email:</label>
                <input type="text" id="email" name="email"/>

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password"/>

                <button type="submit">Sign up</button>
            </form>
        </>
    )
}
export default registration;
