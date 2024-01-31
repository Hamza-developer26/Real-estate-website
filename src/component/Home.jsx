import React from "react";
import Header from "../assets/Header.png";
import Mobile from "../assets/mobile.png"
import Button2 from "../things/Button2";

const Home = () => {
  return (
    <section className="bg-primary px-16 p-4 flex justify-center">
      <div className="space-y-3 ">
        <h1 className="text-white font-poppins font-medium text-[40px] mb-4">
          Lorem Ipsum Dolor <br /> Sit Amet Ut Morbi <br /> Suspendisse.
        </h1>
        <p className="text-white font-poppins font-light">
          Lorem ipsum dolor sit amet consectetur. Quis feugiat vel 
          <br />
          consectetur nulla tincidunt vestibulum ac feugiat faucibus.
        </p>
        <Button2 />
        
      </div>
      <div className="relative ml-[150px] mx-[20px]">
        
        <img src={Header} alt="" className="max-h-96" />
        <img src={Mobile} alt="" className="relative left-[350px] -top-[200px] shadow-xl" />
      </div>
      
    </section>
  );
};

export default Home;
