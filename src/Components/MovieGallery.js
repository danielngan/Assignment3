import React, { useState, useEffect } from "react";

function MovieGallery() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch("movies.json") // Fetching JSON from fake API
            .then((response) => response.json())
            .then((data) => setPhotos(data.movies)) // Set fetched data
            .catch((error) => console.error("Error fetching images:", error));
    }, []);

    return (
        <div>
            <h2>Movie Gallery</h2>
            <div >
                {photos.map((photo) => (
                    <div key={photo.id} style={{ margin: "10px" }}>
                        <img
                            src={photo.url} // Use the URL from JSON

                            style={{ width: "200px", height: "300px", objectFit: "cover" }}
                        />

                    </div>
                ))}
            </div>
        </div>
    );
}

export default MovieGallery;
