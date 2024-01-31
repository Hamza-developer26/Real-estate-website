import React, { useState } from "react";
import { Link } from "react-router-dom";
import Realtor from "../assets/Realtor.png";
import Button from "../things/Button";

function Navbar() {
  const [activeLink, setActivelink] = useState(" ");

  const handlelink = (link) => {
    setActivelink(link);
  };
  return (
    <nav className="bg-primary flex ">
      <img src={Realtor} alt="" className="w-[250px] h-[185px]" />
      <ul className="text-white font-poppins  flex gap-10 py-10 mx-[200px]">
        <li>
          <Link
            to="/"
            className={`${
              activeLink === "/" ? "gradient-text font-semibold" : "text-white"
            }`}
            onClick={()=>{
              handlelink('/')
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={`${
              activeLink === "/about" ? "gradient-text font-semibold" : "text-white"
            }`}
            onClick={()=>{
              handlelink('/about')
            }}>About</Link>
        </li>
        <li>
          <Link to="/services" className={`${
              activeLink === "/services" ? "gradient-text font-semibold" : "text-white"
            }`}
            onClick={()=>{
              handlelink('/services')
            }}>Services</Link>
        </li>
        <li>
          <Link to="/customers" className={`${
              activeLink === "/customers" ? "gradient-text font-semibold" : "text-white"
            }`}
            onClick={()=>{
              handlelink('/customers')
            }}>Customers</Link>
        </li>
      </ul>
      <Button />
    </nav>
  );
}

export default Navbar;
