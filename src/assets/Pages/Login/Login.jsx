import React, { useState } from "react";
import { IoEyeOutline , IoEyeOffOutline } from "react-icons/io5";
import LoginImg01 from "../../../assets/Pages/loginImg.png"
import { useNavigate } from "react-router-dom";

function Login() {

  const [showPassword, setShowPassword] = useState(false);
   const [loginError, setLoginError] =useState('')
//    const navigate = useNavigate()


   const handleSubmit = e =>{
    e.preventDefault();

 
    const email =e.target.email.value;
  
    const password =e.target.password.value;
    const Users = {email, password}
    console.log(Users)
    // console.log(name,email,photo,password)
    e.target.reset();

    // reseat error
    setLoginError(" ")
   

    if(password.length < 6 ){
        setLoginError("Password should be at least 6 characters")

    }
    else if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)){
        setLoginError("Password should have at least one spacial character")

    }
    else if(!/[A-Z]/.test(password)){
        setLoginError("Password should have at least one uppercase")

    }
    else if(!/[a-z]/.test(password)){
        setLoginError("Password should have at least one Lowercase")

    }
    
    else if(!/\d/.test(password)){
        setLoginError("Password should have at least one numerice")

    }

    // navigate home page
    // navigate('/')
}
  return (
    <div className="flex items-center gap-6 justify-evenly md:flex-row flex-col mt-10 ">
      <div className="">
        <img src={LoginImg01} alt="" />
      
      </div>
      <div className="space-y-6 mt-16">
        <h1 className="font-bold text-5xl">Login to Account</h1>
        <p className="text-[#364636] text-[14px]">
          Please enter your email and password to continue
        </p>
        <form onSubmit={handleSubmit} action="">
          <div className="space-y-6">
            <div className="text-[#364636]">
              <span className="text-[#364636] mb-1"> Email </span> <br />
              <input
                type="email"
                                
                name="email" 
                className="w-full border border-[#8CAB91] rounded-sm p-1 "
                placeholder="Asadujjaman@gmail.com"
              />{" "}
              <br />
            </div>

            <div className="relative text-[#364636] ">
              <span className="text-[#364636] mb-1"> Password </span> <br />
              <input
                type={showPassword ? "text" : "password"}

                name="password"
                className=" w-full border  border-[#8CAB91] rounded-sm p-1 "
                placeholder="********"
              />
              <div className="absolute top-8 right-4 "
              
              onClick={() => setShowPassword(!showPassword)}>
           


              {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </div>
              <br />
            </div>
            <div className="space-y-6">
              <div className="flex justify-between">
                <div className="flex gap-1">
                  <input type="checkbox" name="agree" value="yes" />
                  <p className="text-[#6A6D7C]"> Remember Password</p>
                </div>
                <div>
                  <p path="/" className="text-[#FF0000]">
                    Forgot Password?
                  </p>
                </div>
              </div>

              <div className="justify-center flex">
                <button className=" text-center   items-center bg-[#8CAB91] w-4/5 uppercase text-[16px] text-[#FAF1E6] rounded-[20px] py-2" type="button " name="submit" id=""  
                 
                > login  </button>
              </div>
              {
                loginError && <p className="text-red-400"> {loginError}</p> 
              }
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}


export default Login;