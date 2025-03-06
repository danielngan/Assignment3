import React, { useState, useEffect } from "react";

function TVGallery() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch("/tvshow.json") // Fetching JSON from fake API
            .then((response) => response.json())
            .then((data) => setPhotos(data.photos)) // Set fetched data
            .catch((error) => console.error("Error fetching images:", error));
    }, []);

    return (
        <div>
            <h2>Movie Gallery</h2>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
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

export default TVGallery;
