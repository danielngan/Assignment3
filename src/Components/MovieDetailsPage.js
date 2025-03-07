import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetailsPage = () => {
    const { id, type } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const dataUrl = type === "movie" ? "/movies.json" : "/tv-shows.json";

        fetch(dataUrl)
            .then((res) => res.json())
            .then((data) => {
                const foundItem = data.movies?.find((m) => m.id.toString() === id) ||
                    data.tvshows?.find((t) => t.id.toString() === id);
                setItem(foundItem);
            })
            .catch((err) => console.error("Error loading details:", err));
    }, [id, type]);

    if (!item) return <p>Loading...</p>;

    return (
        <div className="details-page">
            <h2>{item.title}</h2>
            <img src={"../../" +item.image} alt={item.title} className="details-poster" />
            <p><strong>Type:</strong> {type === "movie" ? "Movie" : "TV Show"}</p>
            <p>{item.summary}</p>
            <p>{item.purchase_price}</p>
            <p>{item.rent_price}</p>
        </div>
    );
};

export default MovieDetailsPage;
