import React from "react";
import { MdChat } from "react-icons/md";

const ChatBot = () => {
  return (
    <>
      <div className="animate-bounce bg-[#FF3F8E] text-white flex items-center gap-3 py-3 px-5 fixed z-50 bottom-8 hover:cursor-pointer right-10 rounded-lg w-fit">
        <MdChat color="white" size="30" />
        <p> Contact Us</p>
      </div>
    </>
  );
};

export default ChatBot;
