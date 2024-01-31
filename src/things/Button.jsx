import React, { useState } from "react";
import { Link } from "react-router-dom";

const Button = () => {
  const [layer, setLayer] = useState("");
  const handlelayer = (link) => {
    setLayer(link);
  };
  return (
    <div className="font-poppins py-8 space-x-6 text-[15px]">
      <Link to="/login">
        <button
          className={`${
            layer === "/login"
              ? "text-white gradient  w-[100px] h-[40px] font-medium"
              : "text-white border-[2px]  w-[100px] h-[40px] border-[#60B6F3] font-medium"
          }`}
          onClick={() => {
            handlelayer("/login");
          }}
        >
          Login
        </button>
      </Link>
      <Link to="/signup">
        <button
          className={`${
            layer === "/signup"
              ? "text-white gradient  w-[100px] h-[40px] font-medium"
              : "text-white border-[2px]  w-[100px] h-[40px] border-[#60B6F3] font-medium"
          }`}
          onClick={() => {
            handlelayer("/signup");
          }}
        >
          Signup
        </button>
      </Link>
    </div>
  );
};

export default Button;
