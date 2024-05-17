import "./App.css";
import { useState } from "react";
import Hero from "./component/Hero";
import WhatWeDo from "./component/WhatWeDo";
import ContactUs from "./component/ContactUs";
import Footer from "./component/Footer";
import CountUp from "react-countup";
import Navbar from "./component/Navbar";


function App() {
  const [isLoading, setIsLoading] = useState(true);

 
  const LoadPage = () => {
    return (
      <div className="bg-[#141414] flex justify-center items-center h-screen">
        <div className="flex items-center w-full">
          <div className="h-1 w-[35%] bg-white animate__animated animate__bounce animate__faster"/>{" "}
          <CountUp
            className="text-[36px] md:text-[64px] xl:text-[90px] text-[#37B34A] font-medium w-[30%] text-center animate__animated animate__bounce animate__faster"
            start={0}
            end={100}
            duration={3}
            separator=" "
            // decimals={4}
            decimal=","
            // prefix="EUR "
            suffix=" %"
            onEnd={() => setIsLoading(false)}
            onStart={() => console.log("Started! 💨")}
          />
          <div className="h-1 w-[35%] bg-white"/>
        </div>
      </div>
    );
  };
  return (
    <div className="">
      

      {isLoading ? (
        <LoadPage />
      ) : (
        <>
        <Navbar/>
          <Hero />
          <WhatWeDo />
          <ContactUs />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
