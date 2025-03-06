import React, { useEffect, useState } from "react";
import "./MoviePage.css";

const TVPage = () => {
    const [tv, setTV] = useState([]);


    useEffect(() => {
        // Fetch movies from the fake API
        fetch("TVPage.json")
            .then((response) => response.json())
            .then((data) => setTV(data.tvshows))
            .catch((error) => console.error("Error fetching movies:", error));

        // Fetch TV Shows from the fake API
        // fetch("http://localhost:5000/tvShows")
        //     .then((response) => response.json())
        //     .then((data) => setTvShows(data))
        //     .catch((error) => console.error("Error fetching TV shows:", error));
    }, []);

    return (
        <>
            <div className="grid-container">
                {tv.map((tv) => (
                    <div key={tv.id} className="grid-item">
                        <button className="movie-button" >
                            <img src={`/${tv.image}`} alt={tv.title} className="movie-image"
                                 onError={(e) => console.error("Image failed to load:", e.target.src)}/>
                        </button>
                        <p className="caption">{tv.caption}</p>

                    </div>
                ))}
            </div>
        </>
    )
};

export default TVPage;
