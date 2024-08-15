import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import About from "../about/About";
import Services from "../services/Services";
import ChatBot from "../../components/chatbot/ChatBot";
import Testimonial from "../testimonial/Testimonial";
import ContactUs from "../contactUs/ContactUs";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
      easing: "ease", // Easing function for the animation
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div className=" overflow-hidden">
      <Navbar />
      <Hero />
      <ChatBot />
      <About />
      <Services />
      <Testimonial />
      <ContactUs />
    </div>
  );
};

export default Home;
