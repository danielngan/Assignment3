import React from "react";

const actors = [
    { name: "Actor 1", img: "actor1.jpg" },
    { name: "Actor 2", img: "actor2.jpg" },
    { name: "Actor 3", img: "actor3.jpg" },
    { name: "Actor 4", img: "actor4.jpg" },
    { name: "Actor 5", img: "actor5.jpg" },
    { name: "Actor 6", img: "actor6.jpg" },
];

const ActorsSpotlight = () => {
    return (
        <div className="bg-[#0F1C2E] p-4 rounded-lg shadow-lg w-full max-w-5xl mx-auto">
            {/* Title Section */}
            <div className="text-white text-2xl font-bold px-4 py-2 flex items-center">
                <span className="text-yellow-400">●</span> ACTOR'S SPOTLIGHT
            </div>

            {/* Actor Images Section */}
            <div className="flex gap-3 overflow-x-auto scrollbar-hide p-4">
                {actors.map((actor, index) => (
                    <div key={index} className="relative w-32 h-44 rounded-lg overflow-hidden">
                        <img
                            src={actor.img}
                            alt={actor.name}
                            className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ActorsSpotlight;
