import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#37B34A] to-[#184D20] text-white flex justify-between items-center px-[30px] py-[12px] ">
      <p className="text-sm text-white ">© CrossWirex 2024</p>
      <div className="flex gap-3">
        <a href="https://www.linkedin.com/company/rosswirex/" target="_blank" rel="noreferrer">
          <img
            src="./linkedIn.png"
            alt="logo"
            loading="lazy"
            className="h-[24px] md:h-[40px] w-[24px] md:w-[40px] "
          />
        </a>
        <a href="https://x.com/crosswirex?s=11" target="_blank" rel="noreferrer">
          <img
            src="./twitter.png"
            alt="logo"
            loading="lazy"
            className="h-[24px] md:h-[40px] w-[24px] md:w-[40px] "
          />{" "}
        </a>
      </div>
    </div>
  );
};

export default Footer;
