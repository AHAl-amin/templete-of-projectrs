import React, { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import LoginImg01 from "../../../assets/Pages/loginImg.png"
import { Link } from "react-router-dom";

function SignUp() {

    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="flex items-center gap-6 justify-evenly md:flex-row flex-col mt-10 ">
            <div className="">
                <img src={LoginImg01} alt="" />

            </div>
            <div className="space-y-6 mt-16">
                <h1 className="font-bold text-5xl">Sign up</h1>
                <p className="text-[#364636] text-[14px]">
                    Please enter your valid information
                </p>
                <form action="">
                    <div className="space-y-6">
                        <div className="text-[#364636]">
                            <span className="text-[#364636] mb-1"> Your Name </span> <br />
                            <input
                                type="text"
                                namë="name"
                                className="w-full border border-[#8CAB91] rounded-sm p-1 "
                                placeholder="type your name" required
                            />{" "}
                            <br />
                        </div>
                        <div className="text-[#364636]">
                            <span className="text-[#364636] mb-1"> Email </span> <br />
                            <input
                                type="email"
                                namë="email"
                                className="w-full border border-[#8CAB91] rounded-sm p-1 "
                                placeholder="Asadujjaman@gmail.com" required
                            />{" "}
                            <br />
                        </div>

                        <div className="text-[#364636]">
                            <span className="text-[#364636] mb-1"> Photo URL </span> <br />
                            <input
                                type="text"
                                namë="photo"
                                className="w-full border border-[#8CAB91] rounded-sm p-1 "
                                placeholder="Photo URL" required
                            />{" "}
                            <br />
                        </div>

                        <div className="relative text-[#364636] ">
                            <span className="text-[#364636] mb-1"> Password </span> <br />
                            <input
                                type={showPassword ? "text" : "password"}
                                namë="password"
                                className=" w-full border  border-[#8CAB91] rounded-sm p-1 "
                                placeholder="********" required
                            />
                            <div className="absolute top-8 right-4 "

                                onClick={() => setShowPassword(!showPassword)}>



                                {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                            </div>
                            <br />
                        </div>
                        <div className="space-y-6">
                            <div className="flex justify-between gap-3">
                                <div className="flex gap-1">
                                    <input type="checkbox" name="agree" value="yes" />
                                    <p className="text-[#6A6D7C]"> Remember Password</p>
                                </div>
                                <div>
                                    <p path="/" className="text-[#FF0000]">
                                        <Link to="/forgetPassword">Forget Password?</Link>
                                    </p>
                                </div>
                            </div>

                            <div className="justify-center flex">
                                <button className=" text-center   items-center bg-[#8CAB91] w-4/5 uppercase text-[16px] text-[#FAF1E6] rounded-[20px] py-2" type="button " name="submit" id=""

                                > sing in  </button>
                            </div>
                            <p>Already have an account?Please <Link to='/login' className="text-blue-500 underline">Login</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}


export default SignUp;