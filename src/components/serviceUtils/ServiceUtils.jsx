import React, { useEffect } from "react";
import { FaBroom, FaHandsHelping, FaRecycle, FaHome } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceUtils = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const services = [
    {
      icon: <FaBroom size={50} />,
      title: "Optimize Your Workflow",
      description:
        "Streamline your tasks and processes to achieve higher efficiency and productivity.",
    },
    {
      icon: <FaHandsHelping size={50} />,
      title: "Manage Projects Efficiently",
      description:
        "Access tools and resources to help you manage projects effectively from start to finish.",
    },
    {
      icon: <FaRecycle size={50} />,
      title: "Explore Career Opportunities",
      description:
        "Find job opportunities that align with your skills and career goals.",
    },
    {
      icon: <FaHome size={50} />,
      title: "Grow Your Network",
      description:
        "Connect with like-minded professionals and expand your industry network.",
    },
  ];

  return (
    <div className="py-10 px-5 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            data-aos="flip-up"
            className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="text-pink-500 mb-4">{service.icon}</div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceUtils;
