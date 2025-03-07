import React from "react";
import HeroSection from "./HeroSection";
import FeaturedMoviesSection from "./FeaturedMoviesSection";
import FeaturedTVShowsSection from "./FeaturedTVShowsSection";
import ContentSection from "./ContentSection";

const Home = () => {
    return (
        <div>
            <div className="hero-section">
                <HeroSection />
            </div>
            <div className="featured-movies-section">
                <FeaturedMoviesSection />
            </div>
            <div className="featured-tv-section">
                <FeaturedTVShowsSection />
            </div>
            <div className="content-section">
                <ContentSection />
            </div>
        </div>
    );
};

export default Home;
