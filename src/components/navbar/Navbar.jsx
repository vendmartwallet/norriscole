import React, { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import Logo from "../../assets/colelogonew.png";
import { Link as ScrollLink } from "react-scroll";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!showModal);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <div className="flex sticky top-0 z-50 bg-[#F3FEFF] h-22 pr-6 lg:px-16 justify-between items-center border-b shadow-custom-pink ">
      <div className="logo">
        <img src={Logo} alt="" width="97" height="30" />
      </div>

      <div className="navs hidden lg:block">
        <ul className="flex items-center justify-center text-base font-light gap-12">
          <li className=" hover:border-b-2 hover:border-[#FF3F8E] transition-all hover:cursor-pointer">
            <ScrollLink
              to="Home"
              spy={true}
              smooth={true}
              offset={30}
              onClick={toggleNav}
              duration={500}
            >
              Home
            </ScrollLink>
          </li>
          <li className=" hover:border-b-2 hover:border-[#FF3F8E] transition-all hover:cursor-pointer">
            <ScrollLink
              to="About"
              spy={true}
              smooth={true}
              offset={30}
              onClick={toggleNav}
              duration={500}
            >
              About
            </ScrollLink>
          </li>
          <li className=" hover:border-b-2 hover:border-[#FF3F8E] transition-all hover:cursor-pointer">
            <ScrollLink
              to="Services"
              spy={true}
              smooth={true}
              offset={30}
              onClick={toggleNav}
              duration={500}
            >
              {" "}
              Services
            </ScrollLink>
          </li>
          <li className=" hover:border-b-2 hover:border-[#FF3F8E] transition-all hover:cursor-pointer">
            <ScrollLink
              to="Testimonial"
              spy={true}
              smooth={true}
              offset={30}
              onClick={toggleNav}
              duration={500}
            >
              Testimonial
            </ScrollLink>
          </li>
          <li className=" hover:border-b-2 hover:border-[#FF3F8E] transition-all hover:cursor-pointer">
            <ScrollLink
              to="Contact"
              spy={true}
              smooth={true}
              offset={30}
              onClick={toggleNav}
              duration={500}
            >
              Contact
            </ScrollLink>
          </li>
          <li className=" hover:border-b-2 hover:border-[#FF3F8E] transition-all hover:cursor-copy">
            81-468-82781
          </li>
        </ul>
      </div>

      <div className="menu block lg:hidden" onClick={toggleNav}>
        <IoMenuSharp size="35" />
      </div>

      {isNavOpen && (
        <div
          // data-aos="fade-up"
          // data-aos-duration="1000"
          className={`fixed sidebar bg-white pr-3 lg:hidden overflow-scroll z-[99999] inset-y-0 left-0 w-64 transition-transform border-none duration-300 ease-in-out transform ${
            isNavOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          data-aos="fade-right"
        >
          <div className=" flex justify-between items-center pt-5">
            <div className="logo w-[40%] md:w-[35%]">
              <img src={Logo} alt="" />
            </div>

            <div>
              <button
                onClick={closeNav}
                className=" focus:outline-none rounded"
              >
                <IoClose size="30" color="black" />
              </button>
            </div>
          </div>

          <div className="navs mt-5">
            <ul className="flex flex-col px-4 justify-center text-base font-normal gap-8">
              <li className=" hover:border-b-2 hover:border-[#FF3F8E] transition-all hover:cursor-pointer">
                <ScrollLink
                  to="Home"
                  spy={true}
                  smooth={true}
                  offset={30}
                  onClick={toggleNav}
                  duration={500}
                >
                  Home
                </ScrollLink>
              </li>
              <li className=" hover:border-b-2 hover:border-[#FF3F8E] transition-all hover:cursor-pointer">
                <ScrollLink
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={30}
                  onClick={toggleNav}
                  duration={500}
                >
                  About
                </ScrollLink>
              </li>
              <li className=" hover:border-b-2 hover:border-[#FF3F8E] transition-all hover:cursor-pointer">
                <ScrollLink
                  to="Services"
                  spy={true}
                  smooth={true}
                  offset={30}
                  onClick={toggleNav}
                  duration={500}
                >
                  {" "}
                  Services
                </ScrollLink>
              </li>
              <li className=" hover:border-b-2 hover:border-[#FF3F8E] transition-all hover:cursor-pointer">
                <ScrollLink
                  to="Testimonial"
                  spy={true}
                  smooth={true}
                  offset={30}
                  onClick={toggleNav}
                  duration={500}
                >
                  Testimonial
                </ScrollLink>
              </li>
              <li className=" hover:border-b-2 hover:border-[#FF3F8E] transition-all hover:cursor-pointer">
                <ScrollLink
                  to="Contact"
                  spy={true}
                  smooth={true}
                  offset={30}
                  onClick={toggleNav}
                  duration={500}
                >
                  Contact
                </ScrollLink>
              </li>
              <li className=" hover:border-b-2 hover:border-[#FF3F8E] transition-all hover:cursor-copy">
                81-468-82781
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
