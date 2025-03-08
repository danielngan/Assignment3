import React from "react";
import "../Content.css";

const actors = [
    { name: "Movie 1", img: "download.jpeg" },
    { name: "Movie 2", img: "download1.jpeg" },
    { name: "Movie 3", img: "download2.jpeg" },
    { name: "Movie 4", img: "download3.jpeg" },
];

const ContentSection = () => {
    return (
        <div >
            {/* Title Section */}
            <div >
                <span >●</span> See our new movies
            </div>

            {/* Actor Images Section */}
            <div className={"content-section"}>
                {actors.map((actor, index) => (
                    <div key={index} className="relative w-32 h-44 rounded-lg overflow-hidden">
                        <img
                            src={actor.img}

                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContentSection;
