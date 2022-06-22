import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MobileNav from "../common/MobileNav";
import Nav from "../common/Nav";

class Destination extends Component {
    render() {
        return (
            <div>
                <MobileNav />
                <nav className="md:bg-[#00294d] bg-no-repeat pb-5">

                    <div className="hidden md:block">
                        <Nav
                            home="Home"
                            Explore="Explore"
                            Help="Help"
                        />
                    </div>
                    <div className="shadow hidden md:block text-black px-20 mx-auto mt-2 container w-full">
                        <form action="" className="w-full">
                            <div className="flex flex-row w-full text-left ">
                                <div className="border border-solid border-gray-400 p-1 md:rounded-l basis-2/5 w-full bg-gray-50">
                                    <label htmlFor="from" className="text-xs text-slate-500 ">From</label>
                                    <select className="js-example-basic-multiple bg-gray-50 w-full border" name="state">
                                        <option className="w-full" value="">Dhaka</option>
                                        <option value="">Chattagram</option>
                                        <option value="">Sylhet</option>
                                    </select>
                                </div>
                                <div className="border border-l-0 border-solid border-gray-400 p-1 w-full rounded-r basis-2/5 bg-gray-50">
                                    <label htmlFor="from" className="text-xs text-slate-500">To</label>
                                    <select name="state" className="js-example-basic-multiple bg-gray-50 w-full border text-sm">
                                        <option value="">Chattagram</option>
                                        <option value="">CTG</option>
                                        <option value="">Sylhet</option>
                                    </select>
                                </div>
                                <button className="bg-[#ed7d2b]  ml-5 text-slate-50 w-full basis-1/5 text-lg font-medium cursor-pointer">Search</button>
                            </div>
                        </form>
                    </div>
                </nav>

                <div className="container flex md:flex-row flex-col gap-5 py-10 pb-10">
                    <div className="shadow basis-1/4  pb-5">
                        <img src="assets/images/googleMap.jpg" alt="" />
                        <p className="py-2 text-center w-ful">Popular filters for Chattogram </p>
                        <p className="border-t py-2 w-full"></p>
                        <div className="text-center">
                            <label for="" className="text-center">Price Range</label>
                            <input type="range" className="w-full" />
                            <p className="text-[10px]">BDT 1000 - BDT 9000+</p>
                            <p className="border-b py-2 w-full"></p>

                        </div>

                        <p className="border-b py-2 w-full"></p>

                        <div className="px-5 text-gray-700 font-normal text-left">
                            <h1 className=" my-2 text-gray-700 text-center font-semibold">Location highlights</h1>
                            <div className="grid text-gray-500">
                                <div className="flex ">
                                    <input type="checkbox" className="font-thin mr-2 mt-1" name="" id="" /> <label for="">Beaches</label>

                                </div>
                                <div className="flex ">
                                    <input type="checkbox" className="font-thin mr-2 mt-1" name="" id="" /> <label for="">Hills</label>

                                </div>
                                <div className="flex ">
                                    <input type="checkbox" className="font-thin mr-2 mt-1" name="" id="" /> <label for="">Adventure</label>

                                </div>
                                <div className="flex ">
                                    <input type="checkbox" className="font-thin mr-2 mt-1" name="" id="" /> <label for="">Religious interests</label>

                                </div>

                            </div>


                        </div>

                    </div>
                    <div className="basis-3/4 md:mt-0 mt-5">
                        <Link to="/car-select">
                            <div className="grid md:grid-cols-2 bg-gray-100 pb-5">
                                <div className="md:border-r border-gray-400 flex flex-col md:flex-row">
                                    <img src="assets/images/car/pngegg (1) 1.png" className="md:w-52 w-full p-2" alt="" />
                                    <div className="p-3">
                                        <h1 className="text-left text-gray-700 font-semibold">Dhaka to Chattogram - One way
                                            car service</h1>
                                        <div className="flex gap-2 mt-2 text-gray-600">
                                            <i class="fa-solid fa-location-dot mt-1"></i>
                                            <p>Dhaka</p>
                                        </div>
                                        <div className="flex gap-2 text-gray-600">
                                            <i class="fa-solid fa-clock mt-1 text-xs"></i>
                                            <p>6 hours</p>

                                        </div>
                                        <div className="text-left p-1 items-start gap-1 bg-gray-50 w-20 shadow rounded justify-start flex mt-5">
                                            <i class="fa-solid fa-share text-xs "></i>
                                            <p className="  text-xs ">Day Tour</p>
                                        </div>

                                    </div>
                                </div>
                                <div className="md:mt-6 md:text-center text-left md:px-0 px-4">
                                    <p className="text-lg font-bold text-gray-700"> ৳ 1125</p>
                                    <p className="text-lg font-bold text-gray-700"> ৳ 1125</p>
                                    <p className="text-gray-00 text-xs mt-1">per person</p>
                                    <p className="text-gray-00 text-xs mt-5">5% Disscount</p>
                                </div>
                            </div></Link>
                        <Link to="/car-select">
                            <div className="grid md:grid-cols-2 bg-gray-100 mt-3 pb-5">
                                <div className="border-r border-gray-400 flex flex-col md:flex-row">
                                    <img src="assets/images/topplace/Group 35 (1).png" className="md:w-52 w-ful p-2" alt="" />
                                    <div className="p-3">
                                        <h1 className="text-left text-gray-700 font-semibold">Dhaka to Chattogram - One way
                                            car service</h1>
                                        <div className="flex gap-2 mt-2 text-gray-600">
                                            <i class="fa-solid fa-location-dot mt-1"></i>
                                            <p>Dhaka</p>
                                        </div>
                                        <div className="flex gap-2 text-gray-600">
                                            <i class="fa-solid fa-clock mt-1 text-xs"></i>
                                            <p>6 hours</p>

                                        </div>
                                        <div className="text-left p-1 items-start gap-1 bg-gray-50 w-20 shadow rounded justify-start flex mt-5">
                                            <i class="fa-solid fa-share text-xs "></i>
                                            <p className="  text-xs ">Day Tour</p>
                                        </div>

                                    </div>
                                </div>
                                <div className="md:mt-6 md:text-center text-left md:px-0 px-4">
                                    <p className="text-lg font-bold text-gray-700"> ৳ 1125</p>
                                    <p className="text-lg font-bold text-gray-700"> ৳ 1125</p>
                                    <p className="text-gray-00 text-xs mt-1">per person</p>
                                    <p className="text-gray-00 text-xs mt-5">5% Disscount</p>
                                </div>
                            </div></Link>

                    </div>
                </div>
            </div>

        )
    }

}
export default Destination

