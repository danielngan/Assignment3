import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function SearchBar() {
    const [word, setWord] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`/api/movies/search?title=${word}` );

            if (!response.ok) {
                throw new Error('Failed to fetch results');
            }

            const data = await response.json(); // parse JSON response
            setResults(data); // store results
        } catch (err) {
            console.error('Error fetching results:', err);
        }
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            <ul>
                {results.map((movie) => (
                    <React.Fragment >
                        <img src={movie.largePosterPath} alt={movie.title} className="poster" />
                        <img src={movie.smallPosterPath} alt={movie.title} className="poster" />
                        <li>{movie.synopsis}</li>
                        <li>Rental Price: {movie.rentPrice}</li>
                        <li>Sold Price: {movie.outrightPrice}</li>
                    </React.Fragment>
                ))}
            </ul>
        </div>
    );
}

export default SearchBar;