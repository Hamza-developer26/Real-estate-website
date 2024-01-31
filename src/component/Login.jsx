import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const Login = () => {
    const [email , setEmail] = useState()
    const [password , setPassword] = useState()

    const handleButton = () => {
        if(email.trim()=== '' || password.trim()=== ''){
            alert('Please fill in both email and passwords. ')
        }else{
            alert(`Logging in with Email: ${email}, Password: ${password}`)
        }
    }
  return (
    <div className="bg-primary font-poppins">
      <div>
        <div className="text-center text-white text-3xl">Login</div>
        {/* <div className="gradient w-[50px] h-[5px] relative left-[650px] -top-  "></div> */}
      </div>
      <div className="inputs flex flex-col items-center justify-center h-[400px] space-y-10">
        <div className="input flex w-[480px] h-[80px] items-center glass rounded-full">
          <MdEmail className="text-white m-10" size={22} />
          <input
            type="email"
            placeholder="E-mail"
            className="bg-transparent border-none outline-none text-white text-[20px]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input flex w-[480px] h-[80px] items-center glass rounded-full">
          <RiLockPasswordLine className="text-white m-10 " size={22} />
          <input
            type="password"
            placeholder="Password"
            className="bg-transparent border-none outline-none text-white text-[20px]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
        </div>
        <div className="forgot-password text-white text-center">
        Lost Password?{" "}
        <span className="text-blue-500 font-semibold cursor-pointer">Click here?</span>
      </div>
      <button className='text-white gradient p-4 font-medium' onClick={handleButton}>Go to LOGIN</button>
      </div>
      
    </div>
  );
};

export default Login;
