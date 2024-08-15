import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images from the assets folder
import image1 from "../../assets/hero1.jpg";
import image2 from "../../assets/hero2.jpg";
import image3 from "../../assets/hero3.jpg";
import image4 from "../../assets/hero4.jpg";
import image5 from "../../assets/hero5.jpg";
import image6 from "../../assets/hero6.jpg";
import image7 from "../../assets/hero7.jpg";
import image8 from "../../assets/hero8.jpg";

// import image1 from '../../assets/hero1.jpg';

// import image1 from '../../assets/hero1';

const HeroCarousel = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <div className="hero-carousel " data-aos="fade-up">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <div
              className="h-[90vh] bg-cover bg-center flex items-center mx-auto"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="text-center p-8 rounded-lg bg-white opacity-80">
                <h1
                  className="text-4xl font-bold text-pink-600 mb-4"
                  data-aos="fade-down"
                >
                  Sparkling Clean, Every Time
                </h1>
                <p className="text-[#4d2033da] text-lg mb-8 lg:w-[70%] mx-auto" data-aos="fade-up">
                  "Leave the dirt to us! Our professional cleaners ensure your
                  space sparkles, giving you the peace of mind you deserve.
                  Whether it’s your home or office, our reliable and experienced
                  team is dedicated to making your environment pristine and
                  welcoming. Trust us to handle the mess so you can focus on
                  what truly matters."
                </p>
                <a
                  href="#"
                  className="bg-pink-600 text-white font-bold py-2 px-6 rounded hover:bg-pink-700 transition" 
                  data-aos="fade-left">
                  BOOK NOW
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
