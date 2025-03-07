
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const FeaturedMoviesSection = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("/movies.json") // Load movie data
            .then((res) => res.json())
            .then((data) => {
                const featuredMovies = data.movies.filter(movie => movie.featured); // Filter only featured movies
                setMovies(featuredMovies);
            })
            .catch(err => console.error("Error loading movies:", err));
    }, []);

    return (
        <div className="featured-movies-section w-100">
            <h2 className="section-title">Featured Movies</h2>
            <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={5}
                navigation
                loop={true}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 5 }
                }}
                className="movie-swiper"
            >
                {movies.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <div className="movie-card">
                            <img src={movie.image} alt={movie.title} className="movie-poster" />
                            <div className="movie-overlay">
                                <p className="movie-title">{movie.title}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default FeaturedMoviesSection;
