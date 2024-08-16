import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";

const Footer = () => {
  return (
    <div className=" flex flex-col items-center">
      <div className=" flex items-center flex-row justify-center gap-4 py-10">
        <div>
          <FaFacebookF size="20" color="#CE437D" />
        </div>
        <div>
          <FaXTwitter size="20" color="#CE437D" />
        </div>
        <div>
          <LuInstagram size="20" color="#CE437D" />
        </div>
      </div>

      <div className=" w-full bg-black text-white text-center py-10">
        <p>©2023 by Norriscole Professional Cleaning Services LLC.</p>
      </div>
    </div>
  );
};

export default Footer;
