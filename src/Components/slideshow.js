import React, { useEffect, useState } from "react";

const ImageSlideshow = () => {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        fetch("movies.json")
            .then((response) => response.json())
            .then((data) => setImages(data.movies)) // ✅ Fixed: Access "photos" array
            .catch((error) => console.error("Error fetching images:", error));
    }, []);

    useEffect(() => {
        if (images.length === 0) return; // Prevent interval from running if no images

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images]);

    return (
        <div>
            <h2>Slideshow</h2>
            {
                <img
                    src={images[currentIndex].url}
                    alt={images[currentIndex].caption} // ✅ Fixed: Use "caption"
                    width="600"
                />
            }
        </div>
    );
};

export default ImageSlideshow;
