// import React, { useEffect, useState } from "react";
// // import "./MoviePage.css";
//
// const TVShowsPage = () => {
//     const [tv, setTV] = useState([]);
//
//
//     useEffect(() => {
//         // Fetch movies from the fake API
//         fetch("TVPage.json")
//             .then((response) => response.json())
//             .then((data) => setTV(data.tvshows))
//             .catch((error) => console.error("Error fetching movies:", error));
//
//         // Fetch TV Shows from the fake API
//         // fetch("http://localhost:5000/tvShows")
//         //     .then((response) => response.json())
//         //     .then((data) => setTvShows(data))
//         //     .catch((error) => console.error("Error fetching TV shows:", error));
//     }, []);
//
//     return (
//         <>
//             <div className="grid-container">
//                 {tv.map((tv) => (
//                     <div key={tv.id} className="grid-item">
//                         <button className="movie-button" >
//                             <img src={`/${tv.image}`} alt={tv.title} className="movie-image"
//                                  onError={(e) => console.error("Image failed to load:", e.target.src)}/>
//                         </button>
//                         <p className="caption">{tv.caption}</p>
//
//                     </div>
//                 ))}
//             </div>
//         </>
//     )
// };
//
// export default TVShowsPage;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MoviesTVPage.css"; // Reuse same CSS for both pages

const TVShowsPage = () => {
    const [tvShows, setTvShows] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("/tv-shows.json")
            .then((res) => res.json())
            .then((data) => setTvShows(data.tvshows))
            .catch((err) => console.error("Error loading TV shows:", err));
    }, []);

    return (
        <div className="movies-tv-page">
            <h2 className="page-title">TV Shows</h2>

            <div className="grid-container">
                {tvShows.map((show) => (
                    <div
                        key={show.id}
                        className="grid-item"
                        onClick={() => navigate(`/details/tv/${show.id}`)}
                    >
                        <img src={show.image} alt={show.title} className="poster" />
                        <p className="title">{show.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TVShowsPage;
