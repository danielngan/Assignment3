import React, { useEffect, useState } from "react";
import {Router, useParams} from "react-router-dom";


const MovieDetail = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch("moviepage.json")
            .then((response) => response.json())
            .then((data) => {
                const selectedMovie = data.movies.find((m) => m.id.toString() === id);
                setMovie(selectedMovie);
            })
            .catch((error) => console.error("Error fetching movie details:", error));
    }, [id]);

    return (

        <div className="movie-details-container">
            <h1>{movie.title}</h1>
            <img src={`/${movie.image}`} alt={movie.title} className="movie-image"/>
            <p className="summary">{movie.summary}</p>
        </div>

    );
}

export default MovieDetail;