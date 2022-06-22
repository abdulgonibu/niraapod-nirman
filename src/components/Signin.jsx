import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MobileNav from "../common/MobileNav";
import Nav from "../common/Nav";


class Signin extends Component {
    render() {
        return (
            <div>
                <MobileNav />

                <nav className="bg-[#00294d]">
                    <div className="hidden md:block">
                        <Nav
                            home="Home"
                            Explore="Explore"
                            Help="Help"
                        />
                    </div>

                </nav>
                <div className="bg-[#fcfcfc] container py-10 md:mt-20 md:w-[650px] w-full shadow-lg px-5 md:p-20">
                    <div className="">
                        <div className="flex gap-2 border-2 border-gray-200 p-2 bg-gray-100  shadow-sm text-center justify-center">
                            <div className="text-red-500 w-6 h-6">
                                <i className="fa-brands fa-google"></i>
                            </div>
                            <div>
                                Log in with Google
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-gray-400 mt-5 w-full relative">
                        <p
                            className="px-6 absolute bg-[#fcfcfc] -top-3 flex items-center text-center right-[47%] left-[48%] justify-center">
                            Or</p>
                    </div>
                    <form className="mt-5">
                        <p className="py-5 text-[#7a003c] font-medium">Sing in</p>

                        <div className="relative">

                            <input type="text"
                                className="border border-gray-200 rounded-sm p-3 border-l-[#7a003c] border-l-2 w-full shadow-sm outline-none text-sm  pl-8 focus:outline-none"
                                placeholder="Your user ID or e-mail" />

                            <i className="fa-solid fa-envelope-circle-check h-16 absolute top-1 left-1 mt-2.5"></i>
                        </div>


                        <div className="relative">
                            <input type="password"
                                className="border border-gray-200 rounded-sm p-3 mt-7 border-l-[#7a003c] border-l-2 w-full shadow-sm text-sm  pl-8 focus:outline-none"
                                placeholder="Your password " />

                            <i className="fa-solid fa-key absolute top-8 left-1 mt-2.5"></i>


                        </div>
                        <div className="text-right py-2">
                            <Link to="/forgot-password">Forgot password?</Link>
                        </div>

                        <div className="text-lg font-medium py-2 mt-5 bg-[#7a003c] w-full text-center text-white rounded-sm shadow-sm">

                            <a href="" className=" ">Sign in</a>
                        </div>

                        <div className="text-center py-2">
                            Don’t have an account?   <span className="text-[#7a003c] font-medium"><Link to="/singup">Sign up</Link></span>
                        </div>



                    </form>


                </div>
            </div>
        )
    }
}

export default Signin