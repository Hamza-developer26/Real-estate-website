import React from "react";
import Realtor from "../assets/Realtor.png";
import { FaFacebookF ,FaYoutube, FaTwitter,FaInstagram,FaPhoneAlt, FaLocationArrow  } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <section className="bg-primary py-16 text-white font-poppins flex  items-center justify-center ">
      <div className="relative right-[50px]" >
        <img src={Realtor} alt={Realtor} className="w-[250px] h-[185px]  " />
        <p className="relative -top-[50px] px-14 text-[15px] ">
          Lorem ipsum dolor sit amet <br /> consectetur. Lobortis tellus hendrerit <br />
          tesque pellentesque hendrerit. <br /> Ac fringilla nec amet sed eget nunc.
        </p>
      </div>
      <div className="flex space-x-16 px-[60px] ">
      <div className="font-poppins text-white ">
        <h1 className="text-2xl font-medium py-4">Useful Links</h1>
        <ul className="space-y-4 cursor-pointer  ">
          <li className="hover:text-[#60B6F3] duration-500"><Link to="/">Home</Link></li>
          <li className="hover:text-[#60B6F3] duration-500">About</li>
          <li className="hover:text-[#60B6F3] duration-500">Services</li>
          <li className="hover:text-[#60B6F3] duration-500">Testimonials</li>
          <li className="hover:text-[#60B6F3] duration-500">Contact us</li>
        </ul>
      </div>
      <div className="relative left-[50px]">
        <h1 className="text-2xl font-medium py-4">Get In Touch</h1>
        <div className="flex">
        <div className="space-y-7 px-2 flex-wrap-reverse text-[#60B6F3]">
        <FaPhoneAlt size={20} />
        <IoMail size={20} />
        <FaLocationArrow size={20}/>
        </div>
        <div className="space-y-4">
          <p>0811-233-8899</p>
          <p>realtor@email.com</p>
          <p>Lorem ipsum dolor <br />sit amet consectetur.</p>
        </div>
        </div>
      </div>
      <div className="relative left-[80px]">
        <h1 className="text-2xl py-4 font-medium">Social Links</h1>
        <div className="flex gap-5 w-[200px] cursor-pointer text-[#60B6F3] ">
        <FaFacebookF size={20} />
        <FaYoutube size={20} />
        <FaTwitter size={20} />
        <FaInstagram size={20} />
        </div>
        {/* icons */}
      </div>
      
      </div>
    </section>
  );
};

export default Footer;
