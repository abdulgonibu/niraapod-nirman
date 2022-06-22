import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MobileNav from "../common/MobileNav";
import Nav from "../common/Nav";


class Signup extends Component {
    render() {
        return (
            <div>
                <MobileNav />

                <div>
                    <nav className="bg-[#00294d]">
                        <div className="hidden md:block">
                            <Nav
                                home="Home"
                                Explore="Explore"
                                Help="Help"
                            />
                        </div>
                    </nav>

                    <div className="bg-[#fcfcfc] container md:mt-20 md:w-[650px] shadow-lg p-10 md:p-20">
                        <form className="md:mt-5">
                            <p className="md:py-5 text-[#7a003c] font-medium">Sing in</p>
                            <div className="space-y-4">
                                <div className="relative">

                                    <input type="text"
                                        className="border border-gray-200 rounded-sm p-3 border-l-[#7a003c] border-l-2 w-full shadow-sm outline-none text-sm  pl-8 focus:outline-none"
                                        placeholder="Your Name" />
                                    <i className="fa-solid fa-user absolute top-1 left-2 mt-2.5 text-gray-400"></i>
                                </div>
                                <div className="relative">

                                    <input type="text"
                                        className="border border-gray-200 rounded-sm p-3 border-l-[#7a003c] border-l-2 w-full shadow-sm outline-none text-sm  pl-8 focus:outline-none"
                                        placeholder="Mobile " />
                                    <i className="fa-solid fa-phone absolute top-1 left-2 mt-2.5 text-gray-400"></i>
                                </div>
                                <div className="relative">

                                    <input type="text"
                                        className="border border-gray-200 rounded-sm p-3 border-l-[#7a003c] border-l-2 w-full shadow-sm outline-none text-sm  pl-8 focus:outline-none"
                                        placeholder="Your user ID or e-mail" />

                                    <i className="fa-solid fa-envelope-circle-check h-16 absolute text-gray-400 top-1 left-2 mt-2.5"></i>
                                </div>

                                <div className="relative">
                                    <input type="password"
                                        className="border border-gray-200 rounded-sm p-3  border-l-[#7a003c] border-l-2 w-full shadow-sm text-sm  pl-8 focus:outline-none"
                                        placeholder="Your password " />

                                    <i className="fa-solid fa-key absolute top-1 left-2 mt-2.5 text-gray-400"></i>

                                </div>
                                <div className="relative">
                                    <input type="password"
                                        className="border border-gray-200 rounded-sm p-3  border-l-[#7a003c] border-l-2 w-full shadow-sm text-sm  pl-8 focus:outline-none"
                                        placeholder="Confarm your password   " />

                                    <i className="fa-solid fa-key absolute top-1 left-2 mt-2.5 text-gray-400"></i>

                                </div>

                                <div className="flex gap-2 mt-5">
                                    <input type="checkbox" name="" id="" className="mt-1" />
                                    <p className="">I agree to the Terms  Conditions</p>
                                </div>
                                <div
                                    className="text-lg font-medium py-2 mt-5 bg-[#7a003c] w-full text-center text-white rounded-sm shadow-sm">
                                    <a href="" className="">Sign Up</a>
                                </div>

                                <div className="text-center py-2">
                                    Already have an account? <span className="text-[#7a003c] font-medium"> <Link to="/singin">Sign in</Link></span>
                                </div>

                            </div>

                        </form>


                    </div>

                </div>
            </div>
        )
    }
}

export default Signup