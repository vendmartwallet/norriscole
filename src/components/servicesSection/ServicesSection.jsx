import React from "react";

const ServicesSection = () => {
  return (
    <>
      <div className="px-6 lg:px-0 mt-24 overflow-x-hidden">
        <div className=" flex flex-col gap-7 text-center">
          <h1 className=" font-semibold text-4xl" data-aos="fade-right">
            Specialized Service Excellence
          </h1>
          <p className=" text-xlg font-light text-[#]" data-aos="fade-left">What We Provide</p>
        </div>
        <div className="flex flex-col gap-5 lg:gap-0">
        <div className="mt-16 lg:flex gap-5 lg:gap-0">
          <div className="imgbg flex flex-col gap-4 items-center justify-center h-[50vh] lg:w-[25%]" data-aos="fade-up">
            <h1 className=" font-semibold text-xl">RESIDENTIAL CLEANING</h1>
            <p className="text-[#424845]">Exceptional Service</p>
          </div>
          <div className="imgbg3 h-[50vh] lg:w-[25%]" data-aos="fade-up"></div>
          <div className="imgbg flex flex-col gap-4 items-center justify-center h-[50vh] lg:w-[25%]" data-aos="fade-up">
            <h1 className=" font-semibold text-xl">BOUTIQUE SERVICES</h1>
            <p className="text-[#424845]">Satisfaction Guaranteed</p>
          </div>
          <div className="imgbg4 h-[50vh] lg:w-[25%]" data-aos="fade-up"></div>
        </div>
        <div className=" lg:flex gap-5 lg:gap-0">
          <div className="imgbg5 h-[50vh] lg:w-[25%]" data-aos="fade-up"></div>
          <div className="imgbg flex flex-col gap-4 items-center justify-center h-[50vh] lg:w-[25%]" data-aos="flip-up">
            <h1 className=" font-semibold text-xl">COMMERCIAL CLEANING</h1>
            <p className="text-[#424845]">Attention to Detail</p>
          </div>
          <div className="imgbg6 h-[50vh] lg:w-[25%]" data-aos="flip-down"></div>
          <div className="imgbg flex flex-col gap-4 items-center justify-center h-[50vh] lg:w-[25%]" data-aos="fade-up">
            <h1 className=" font-semibold text-xl text-center">
              MOVE-IN/MOVE-OUT <br /> CLEANING
            </h1>
            <p className="text-[#424845]">Start Fresh</p>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
