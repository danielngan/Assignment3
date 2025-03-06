import React, { useEffect, useState } from "react";
import "./MoviePage.css";
import {Router, useNavigate} from "react-router-dom";

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        // Fetch movies from the fake API
        fetch("moviepage.json")
            .then((response) => response.json())
            .then((data) => setMovies(data.movies))
            .catch((error) => console.error("Error fetching movies:", error));

        // Fetch TV Shows from the fake API
        // fetch("http://localhost:5000/tvShows")
        //     .then((response) => response.json())
        //     .then((data) => setTvShows(data))
        //     .catch((error) => console.error("Error fetching TV shows:", error));
    }, []);

    const handleMovieClick = (movieId) => {
        navigate(`/movie/${movieId}`);
    };

    return (
        <Router>
        <div className="grid-container">
            {movies.map((movie) => (
                <div key={movie.id} className="grid-item">
                    <button className="movie-button" onClick={handleMovieClick(movie.id)}>
                        <img src={`/${movie.image}`} alt={movie.title} className="movie-image"
                             onError={(e) => console.error("Image failed to load:", e.target.src)}/>
                    </button>
                        <p className="caption">{movie.caption}</p>

                </div>
                ))}
        </div>
        </Router>
    )
};

export default MoviesPage;
