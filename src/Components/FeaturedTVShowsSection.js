import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const FeaturedTVShowsSection = () => {
    const [tvShows, setTvShows] = useState([]);

    useEffect(() => {
        fetch("/api/movies/getFeaturedTVShows", {
            method: "GET",
        }) // Load TV show data
            .then((res) => res.json())
            .then((data) => {
                //const featuredShows = data.tvshows.filter(show => show.featured); // Filter only featured TV shows
                setTvShows(data);
            })
            .catch(err => console.error("Error loading TV shows:", err));
    }, []);

    return (
        <div className="featured-tv-section w-100">
            <h2 className="section-title">Featured TV Shows</h2>
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
                className="tv-swiper"
            >
                {tvShows.map((show) => (
                    <SwiperSlide key={show.id}>
                        <div className="tv-card">
                            <img src={show.smallPosterPath} alt={show.title} className="tv-poster" />
                            <div className="tv-overlay">
                                <p className="tv-title">{show.title}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default FeaturedTVShowsSection;
