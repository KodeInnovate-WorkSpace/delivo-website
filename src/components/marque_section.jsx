import React from 'react';
import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
    return (
        <div className="overflow-hidden whitespace-nowrap my-8">
            <h1 className="text-2xl text-center font-bold lg:text-5xl mb-8 lg:mb-14">Our Restaurant Partners</h1>

            <Marquee>
                {/* Using Array.from to create an array of logos */}
                {Array.from({ length: 17 }, (_, index) => (
                    <img
                        key={index + 1} // Start index from 1
                        src={`/restaurant_logo/logo${index + 1}.jpg`}
                        alt={`Partner Logo ${index + 1}`}
                        className="w-16 md:w-32 lg:w-44 object-contain mx-4"
                    />
                ))}
            </Marquee>
        </div>
    );
};


export default MarqueeSection;
