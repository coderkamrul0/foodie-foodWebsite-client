import React, { useState, useEffect } from 'react';
import items from '../../../public/reviews.json'
import ReactStars from "react-rating-stars-component";


const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % items.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div className="relative overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out transform">
        {items.map((item, index) => (
          <div
            key={index}
            className={`w-[50%] flex-shrink-0 h-[300px] bg-cover bg-center transform transition-transform duration-500 ease-in-out ${
              (index === currentSlide || (index + 1) % items.length === currentSlide) &&
              index < items.length - 1
                ? 'translate-x-0'
                : 'translate-x-full'
            }`}
            style={{
              backgroundImage: `url(${item.image})`,
              transform: `translateX(-${(currentSlide % (items.length - 1)) * 100}%)`,
            }}
          >
            <div className="absolute inset-0  opacity-50 border rounded-lg"></div>
            <div className="absolute  left-0 p-4 ">
              <div className='py-10 md:flex justify-between'>
                <div className='flex gap-2'>
                    <img src={item.customer_image} className='h-16 w-16 rounded-full' alt="" />
                    <p className='font-bold'>{item.customer_name}</p>
                </div>
                <div>
                <ReactStars
                value={4}
                count={5}
                size={24}
                activeColor="#ffd700"
              />
                </div>
              </div>
              <p className='text-gray-500'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
