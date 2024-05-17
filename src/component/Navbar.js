import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#141313] sticky top-0 w-full z-20 py-[30px] md:py-[36px] px-[16px] sm:px-[20px] md:px-[40px] lg:px-[64px] xl:px-[72px] shadow-lg">
      <div className="flex justify-center md:justify-between">
       
        <img
          src="./logo.png"
          alt="logo"
          loading="lazy"
          className="h-[24px] md:h-[40px] w-[120px] md:w-[190px] "
        />
        <div className="hidden md:flex gap-3">
          <button className="text-white text-base">Home</button>
          <button className="text-white text-base">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
