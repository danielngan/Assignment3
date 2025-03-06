import logo from './logo.svg';
import './App.css';
import './Components/theHeader.js';
import './Components/slideshow';
import './Components/MovieGallery';
import './Components/TVGallery';

import ImageSlideshow from "./Components/slideshow";
import MovieGallery from "./Components/MovieGallery";
import TVGallery from "./Components/TVGallery";
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate(); // ✅ Hook for navigation

    return (
        <div>
            <h1>Welcome to My Movie App</h1>
            <button onClick={() => navigate("/movies")}>Go to Movies</button> {/* ✅ Button to switch pages */}
        </div>
    );
};



function App() {
  return (
      <Router>
    <div className="App">

          <ImageSlideshow style = {{ width: "200px", height: "200px", objectFit: "cover" }}></ImageSlideshow>

        <MovieGallery></MovieGallery>
        <TVGallery></TVGallery>
    </div>
      </Router>
  );
}

export default App;
