// import React, { useEffect, useState } from "react";
// // import "./MoviePage.css";
// import {Router, useNavigate} from "react-router-dom";
//
// const MoviesPage = () => {
//     const [movies, setMovies] = useState([]);
//     const navigate = useNavigate();
//
//
//     useEffect(() => {
//         // Fetch movies from the fake API
//         fetch("moviepage.json")
//             .then((response) => response.json())
//             .then((data) => setMovies(data.movies))
//             .catch((error) => console.error("Error fetching movies:", error));
//
//         // Fetch TV Shows from the fake API
//         // fetch("http://localhost:5000/tvShows")
//         //     .then((response) => response.json())
//         //     .then((data) => setTvShows(data))
//         //     .catch((error) => console.error("Error fetching TV shows:", error));
//     }, []);
//
//     const handleMovieClick = (movieId) => {
//         navigate(`/movie/${movieId}`);
//     };
//
//     return (
//         <Router>
//         <div className="grid-container">
//             {movies.map((movie) => (
//                 <div key={movie.id} className="grid-item">
//                     <button className="movie-button" onClick={handleMovieClick(movie.id)}>
//                         <img src={`/${movie.image}`} alt={movie.title} className="movie-image"
//                              onError={(e) => console.error("Image failed to load:", e.target.src)}/>
//                     </button>
//                         <p className="caption">{movie.caption}</p>
//
//                 </div>
//                 ))}
//         </div>
//         </Router>
//     )
// };
//
// export default MoviesPage;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MoviesTVPage.css"; // Reuse same CSS for both pages

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const apiUrl =  "/api/movies/getMoviesOnly";

        fetch(apiUrl, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Movies data:", data);
                for (const movieIx in data) {
                    console.log("Movie:", data[movieIx]);
                }
                setMovies(data)
            })
            .catch((err) => console.error("Error loading movies:", err));
    }, []);

    return (
        <div className="movies-tv-page">
            <h2 className="page-title">Movies</h2>

            <div className="grid-container">
                {movies && movies.map((movie) => (
                    <div
                        key={movie.id}
                        className="grid-item"
                        onClick={() => navigate(`/details/${movie.id}`)}
                    >
                        <img src={movie.largePosterPath} alt={movie.title} className="poster" />
                        <p className="title">{movie.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MoviesPage;
