"use client"
import React, { useState, useEffect } from 'react';

const Carousel = () => {

    const images = [
        '/slider-images/1.jpg',
        '/slider-images/2.jpg',
        '/slider-images/3.jpg',
        '/slider-images/4.jpg',
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 5 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-96 overflow-hidden my-10 rounded-xl shadow-lg">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}
        </div>
    );
}

export default Carousel;