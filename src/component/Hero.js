import React from "react";
import Navbar from "./Navbar";
import ScrollAnimation from "react-animate-on-scroll";

const Hero = () => {
  return (
    <>
      <div
        className="bg-[url(../public/robothandmobile.png)]   md:bg-[url(../public/robothand.png)]  
    bg-no-repeat h-[778px]  md:h-[850px]   lg:h-[963px] bg-[#141414] bg-opacity-80 bg-cover  "
      >
        {/* <img
          src="./robothand.png"
          loading="lazy"
          alt=""
          className="absolute top-0 left-0 right-0 h-full w-full object-cover -z-10"
        /> */}
        {/* <Navbar /> */}
        <ScrollAnimation animateIn="fadeIn">
          <p className="text-[#3cb54e]  animate__animated animate__bounce animate__slow text-sm md:text-[16px] lg:text-[20px] text-center pt-[280px] md:pt-[250px] lg:pt-[300px]">
            Crosswirex where Innovation Meets Security
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" duration={3}>
          <div className="flex flex-col mb-[32px]">
            <h1 class="bg-gradient-to-r from-[#37B34A]  to-white inline-block text-transparent bg-clip-text leading-tight text-[32px] md:text-[56px] lg:text-[70px] font-bold text-center">
              Unlocking Innovation,
            </h1>
            <h1 class="bg-gradient-to-r from-[#37B34A] from-0% to-white to-100% inline-block text-transparent bg-clip-text text-[32px] md:text-[56px] leading-tight lg:text-[70px] font-bold text-center">
              Ensuring Protection
            </h1>
          </div>
        </ScrollAnimation>

        <p className="text-white text-base max-w-[674px] text-center mx-auto">
          Empower your business with forward-thinking solutions while
          safeguarding your digital assets. Let’s innovate securely together
        </p>

        {/* <div class="flex items-center justify-center mt-[40px]">
        <div class="h-[89px] w-[545px] rounded-xl bg-gradient-to-r from-[#37B34A] from-0% to-white to-100% p-1">
          <div class="flex h-full w-full rounded-xl items-center justify-center bg-[#2c2b2b]  back">
            <h1 class="text-2xl font-bold text-white">
              Discuss your project with us
            </h1>
          </div>
        </div>
      </div> */}
        <ScrollAnimation animateIn="fadeInUp" duration={3}>
          <button className="text-white  md:hidden mx-auto text-base bg-[#3AB44D] mt-[30px]  font-bold rounded-lg py-[17px] px-[18px] max-w-[286px]  flex gap-3 items-center">
            Discuss your project with us
          </button>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" duration={3}>
          <a href="#contact">
            <div class=" hidden md:block box-3 relative py-[28px] font-bold max-w-[545px] mt-[30px]  mx-auto text-center text-white before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-[#37B34A] before:to-[#ffffff] before:p-1 before:content-[''] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude]">
              Discuss your project with us
            </div>
          </a>
        </ScrollAnimation>

        <div className="hidden bg-[#000000] bg-opacity-60 py-[32px] rounded-lg md:flex justify-around items-center mt-[140px] max-w-[1025px] mx-auto">
          <div>
            <img src="/logo1.png" alt="" className="" />
          </div>
          <div>
            <img src="/logo2.png" alt="" className="h-[30px]" />
          </div>
          <div>
            <img src="/logo3.png" alt="" className="h-[30px]" />
          </div>
          <div>
            <img src="/logo4.png" alt="" className="h-[50px] w-[50px]" />
          </div>
        </div>
      </div>
      <div className="bg-[#000000] md:hidden bg-opacity-60 py-[32px] flex justify-around items-center  mx-auto">
        <div>
          <img src="/logo1.png" alt="" className="h-[17px] w-[100px]" />
        </div>
        <div>
          <img src="/logo2.png" alt="" className="h-[17px] w-[97px]" />
        </div>
        <div>
          <img src="/logo3.png" alt="" className="h-[16px] w-[100px]" />
        </div>
        <div>
          <img src="/logo4.png" alt="" className="h-[20px] w-[20px]" />
        </div>
      </div>
    </>
  );
};

export default Hero;
