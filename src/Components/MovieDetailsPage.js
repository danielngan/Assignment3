import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetailsPage = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        console.log("Fetching details for ID:", id);
        const dataUrl = `/api/movies/getMovieById?id=${id}`;

        fetch(dataUrl, {
            method: "GET",

        })
            .then((res) => res.json())
            .then((data) => {
                //const foundItem = data.movies?.find((m) => m.id.toString() === id) ||
                    //data.tvshows?.find((t) => t.id.toString() === id);
                setItem(data);
            })
            .catch((err) => console.error("Error loading details:", err));
    }, [id]);

    if (!item) return <p>Loading...</p>;

    return (
        <div className="details-page">
            <h2>{item.title}</h2>
            <img src={item.smallPosterPath} alt={item.title} className="details-poster"/>
            <img src={item.largePosterPath} alt={item.title} className="details-poster"/>
            {/*<p><strong>Type:</strong> {type === "movie" ? "Movie" : "TV Show"}</p>*/}

            <p>Purchase Price: ${item.outrightPrice}</p>
            <p>Rental Price: ${item.rentPrice}</p>
            <p>{item.id}</p>
            <p>{item.synopsis}</p>
        </div>
    );
};

export default MovieDetailsPage;

//testing
