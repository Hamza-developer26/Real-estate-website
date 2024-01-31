import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [first , setFirst ] = useState('')
    const [second , setSecond ] = useState('')
    const [password , setPassword ] = useState('')
    const [re , setRe ] = useState('')

    const handleSignup = () => {
        if(first.trim()==='' || second.trim()==='' || password.trim()==='' || re.trim()===''){
            alert('Fill all sections')
        }else{
            alert('Go to Login page')
        }
    }

  return (
          <div className="bg-primary font-poppins">
            <div>
              <div className="text-center text-white text-3xl">Sign Up</div>
              {/* <div className="gradient w-[50px] h-[5px] relative left-[650px] -top-  "></div> */}
            </div>
            <div className="inputs flex flex-col items-center justify-center h-[600px] space-y-10">
              <div className="input flex w-[480px] h-[80px] items-center glass rounded-full">
              <FaUser className="text-white m-10" size={22} />
                <input
                  type="text"
                  placeholder="First name"
                  className="bg-transparent border-none outline-none text-white text-[20px]"
                  value={first}
                  onChange={(e)=>setFirst(e.target.value)}
                />
              </div>
              <div className="input flex w-[480px] h-[80px] items-center glass rounded-full">
                <FaUser className="text-white m-10" size={22} />
                <input
                  type="text"
                  placeholder="Last name"
                  className="bg-transparent border-none outline-none text-white text-[20px]"
                  value={second}
                  onChange={(e)=>setSecond(e.target.value)}
                />
              </div>
              <div className="input flex w-[480px] h-[80px] items-center glass rounded-full">
                <RiLockPasswordLine className="text-white m-10 " size={22} />
                <input
                  type="password"
                  placeholder="Password"
                  className="bg-transparent border-none outline-none text-white text-[20px]"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
                
              </div>
              <div className="input flex w-[480px] h-[80px] items-center glass rounded-full">
                <RiLockPasswordLine className="text-white m-10 " size={22} />
                <input
                  type="password"
                  placeholder="Retype-Password"
                  className="bg-transparent border-none outline-none text-white text-[20px]"
                  value={re}
                  onChange={(e)=>setRe(e.target.value)}
                />
                
              </div>
            <button className='text-white gradient p-4 font-medium' onClick={handleSignup}>Go to LOGIN</button>
            </div>
            
            
          </div>
        );
      };

export default Signup