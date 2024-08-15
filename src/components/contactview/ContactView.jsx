import React from 'react';

const ContactView = () => {
  return (
    <div className="bg-[#EC4999] p-10 lg:p-20 flex flex-col lg:flex-row items-start lg:items-center justify-between" data-aos="fade-up">
      {/* Left Side: Contact Information */}
      <div className="mb-10 lg:mb-0">
        <h2 className="text-3xl font-bold text-gray-800 mb-5">GET IN TOUCH</h2>
        <p className="text-gray-800">info@amazingspaceproclean.com</p>
        <p className="text-gray-800">81-468-82781</p>
        <p className="text-gray-800">Leland, NC</p>
      </div>

      {/* Right Side: Contact Form */}
      <form className="w-full lg:w-1/2 space-y-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <input
            type="text"
            placeholder="Name *"
            className="w-full border-b border-gray-800 bg-[#EC4999] text-gray-800 outline-none"
            required
          />
          <input
            type="text"
            placeholder="Phone"
            className="w-full border-b border-gray-800 bg-[#EC4999] text-gray-800 outline-none"
          />
        </div>
        <input
          type="text"
          placeholder="Address"
          className="w-full border-b border-gray-800 bg-[#EC4999] text-gray-800 outline-none"
        />
        <input
          type="email"
          placeholder="Email *"
          className="w-full border-b border-gray-800 bg-[#EC4999] text-gray-800 outline-none"
          required
        />
        <textarea
          placeholder="Message"
          className="w-full border-b border-gray-800 bg-[#EC4999] text-gray-800 outline-none"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="bg-transparent text-gray-800 py-2 px-4 border border-gray-800 hover:bg-gray-800 hover:text-white transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactView;
