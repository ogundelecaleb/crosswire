import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#37B34A] to-[#184D20] text-white flex justify-between items-center px-[30px] py-[12px] ">
      <p className="text-sm text-white ">© CrossWirex 2024</p>
      <div className="flex gap-3">
        <SocialIcon url="https://twitter.com" bgColor="transparent" fgColor="white" className="h-[24px] w-[24px]]" />
        <SocialIcon url="https://instagram.com" bgColor="transparent" fgColor="white" className="h-[24px] w-[24px]]" />
      </div>
    </div>
  );
};

export default Footer;
