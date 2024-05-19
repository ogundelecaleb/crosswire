import React from "react";
import ScrollAnimation from "react-animate-on-scroll";


const WhatWeDo = () => {
  return (
    <div className="bg-[#1E1E1E] relative py-[29px] md:py-[36px] lg:pt-[40px]  lg:pb-[120px] px-[34px]">
       <ScrollAnimation animateIn="fadeInUp" duration={2}>
      <h2 className="text-[24px] md:text-[28px] lg:text-[34px] text-[#929292] font-bold text-center mb-2">
        What We Do
      </h2></ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp" duration={2}>
      <p className="text-[#a2a2a2] text-sm md:text-base text-center max-w-[584px] mx-auto ">
        At CrossWirex Limited, we specialize in delivering comprehensive tech
        solutions and robust security services to propel your business forward.
      </p>
      </ScrollAnimation>
      <img src="./line1.png" alt="" className="absolute top-[142px]  xl:left-[10%] hidden xl:block"/>
      <img src="./line2.png" alt="" className="absolute bottom-[55px]   xl:left-[10%] hidden xl:block"/>
      <img src="./line3.png" alt="" className="absolute bottom-[55px]   xl:right-[10%] hidden xl:block"/>

      <div className="flex flex-col justify-center md:grid grid-cols-2  gap-[32px] md:max-w-[744px]   lg:max-w-[944px] mx-auto mt-[31px] md:mt-[51px] lg:mt-[90px]">

        
        <div className="py-[16px] px-[19px] bg-[#424141] bg-opacity-20 md:bg-transparent rounded-lg md:max-w-[363px] mx-auto">
          <div className="bg-[#424141] rounded-lg h-[46px] w-[46px] md:h-[66px] md:w-[66px] mx-auto  md:mx-0 flex justify-center items-center mb-4 md:mb-2 ">
            <img src="/icon1.png" alt="icon" className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] " />
          </div>
          <h3 className="text-white text-[20px] md:text-[24px] md:text-left  text-center ">
          
            Design & Development Excellence
          </h3>
          <p className="text-sm mt-4 text-[#a2a2a2] text-justify">
            Transform your ideas into reality with our expert product design and
            UI/UX bootcamps. Elevate your online presence with our seamless
            website and mobile app development services
          </p>
        </div>

        <div className="py-[16px] px-[19px] bg-[#424141] bg-opacity-20 md:bg-transparent rounded-lg md:max-w-[363px] mx-auto">
        <div className="bg-[#424141] rounded-lg h-[46px] w-[46px] md:h-[66px] md:w-[66px] mx-auto  md:mx-0 flex justify-center items-center mb-4 md:mb-2 ">
            <img src="/icon2.png" alt="icon" className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] " />
          </div>
          <h3 className="text-white text-[20px] md:text-[24px]  md:text-left  text-center ">
            
            Security Solutions
          </h3>
          <p className="text-sm mt-4 text-[#a2a2a2] text-justify">
            Safeguard your digital assets with confidence. Our information
            /Cyber security governance, risk, and compliance consulting ensure
            meticulous implementation, audit, and certification to industry
            standards, including ISO 27001, 22301, 27017, and more.
          </p>
        </div>
        <div className="py-[16px] px-[19px] bg-[#424141] bg-opacity-20 md:bg-transparent rounded-lg md:max-w-[363px] mx-auto">
        <div className="bg-[#424141] rounded-lg h-[46px] w-[46px] md:h-[66px] md:w-[66px] mx-auto  md:mx-0 flex justify-center items-center mb-4 md:mb-2 ">
            <img src="/icon3.png" alt="icon" className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] "  />
          </div>
          <h3 className="text-white text-[20px] md:text-[24px]  md:text-left  text-center ">
            {" "}
            Empowerment Through Education{" "}
          </h3>
          <p className="text-sm mt-4 text-[#a2a2a2] text-justify">
            Equip your team with the knowledge and skills they need to defend
            against evolving threats. Our cybersecurity awareness training
            enlightens and empowers, fostering a culture of vigilance within
            your organization.
          </p>
        </div>
        <div className="py-[16px] px-[19px] bg-[#424141] bg-opacity-20 md:bg-transparent rounded-lg md:max-w-[363px] mx-auto">
        <div className="bg-[#424141] rounded-lg h-[46px] w-[46px] md:h-[66px] md:w-[66px] mx-auto  md:mx-0 flex justify-center items-center mb-4 md:mb-2 ">
            <img src="/icon4.png" alt="icon" className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] "  />
          </div>
          <h3 className="text-white text-[20px] md:text-[24px]  md:text-left  text-center ">
            Policy Development & Compliance
          </h3>
          <p className="text-sm mt-4 text-[#a2a2a2] text-justify">
            Navigate regulatory complexities with ease. We offer cybersecurity
            policy development services and guide you through GDPR and NDPA
            compliance, ensuring your data protection measures meet and exceed
            requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
