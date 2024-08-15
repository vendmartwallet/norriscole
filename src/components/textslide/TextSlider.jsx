import React, { useState, useEffect } from 'react';

const TextSlider = () => {
  const slides = [
    {
      text: "I can’t say enough good things about the professionalism and attention to detail that this company offers!!! They go above and beyond to make sure my house is clean!",
      author: "Lisa Dobbstaff",
    },
    {
      text: "Their cleaning services are top-notch! Every corner of my house was spotless. Highly recommend!",
      author: "John Smith",
    },
    {
      text: "Professional, reliable, and thorough. They consistently exceed my expectations.",
      author: "Sarah Johnson",
    },
    {
      text: "The best cleaning service I've ever used. My home has never looked better!",
      author: "Emily Davis",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="flex flex-col items-center justify-center h-[80vh] bg-[#1a1a1a]">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-[#FFFFFF] text-xl font-medium mb-4" data-aos="fade-right">WHAT THEY'RE SAYING</h2>
        <div className="border border-gray-300 p-10 bg-[#1a1a1a] text-[#FFFFFF] rounded-lg shadow-md" data-aos="fade-left">
          <p className="text-2xl italic">"{slides[currentSlide].text}"</p>
          <p className="text-lg mt-4 text-[#FF3F8E]">- {slides[currentSlide].author}</p>
        </div>
      </div>
    </div>
  );
};

export default TextSlider;
