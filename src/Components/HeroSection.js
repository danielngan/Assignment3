import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSection = () => {
    const [banners, setBanners] = useState([]);

    useEffect(() => {
        fetch("/hero.json")
            .then((res) => res.json())
            .then((data) => setBanners(data))
            .catch((err) => console.error("Error loading banners:", err));
    }, []);

    return (
        <div className="container-fluid p-0">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                className="hero-swiper"
            >
                {banners.map((banner) => (
                    <SwiperSlide key={banner.id}>
                        <div
                            className="hero-slide"
                            style={{
                                backgroundImage: `url(${banner.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                height: "400px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-end",
                                alignItems: "center",
                                textAlign: "center",
                                padding: "20px",
                                color: "white",
                                position: "relative"
                            }}
                        >
                            <div className="caption-box">
                                <h2 className="fw-bold">{banner.title}</h2>
                                <p>{banner.subtitle}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroSection;
