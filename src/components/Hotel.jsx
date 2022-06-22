import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MobileNav from "../common/MobileNav";
import Nav from "../common/Nav";

const Hotel = () => {

    return (
        <div>
            <MobileNav />
            <nav className="md:bg-[#00294d] bg-no-repeat md:pb-5">

                <div className="hidden md:block">
                    <Nav
                        home="Home"
                        Explore="Explore"
                        Help="Help"
                    />
                </div>

                <div className="shadow text-black px-20 mx-auto hidden md:block">
                    <form action="" className="container ">

                        <div className="grid grid-cols-5">
                            <div className=" p-2 relative w-full">
                                <input type="text"
                                    className="focus:outline-none  py-2 rounded-md w-full pl-7 placeholder:text-sm"
                                    placeholder="Enter a destination " />
                                <i className="fa-solid fa-magnifying-glass absolute text-sm top-4  left-3 text-gray-400"></i>
                            </div>
                            <div className=" p-2">

                                <input type="text" id="datepicker2" value="06/07/2022"
                                    className="datepicker px-4 py-2 focus:outline-none placeholder:text-sm border rounded-md w-full date" />
                            </div>
                            <div className=" p-2">

                                <input type="text" id="datepicker2" value="06/07/2022"
                                    className="datepicker px-4 py-2 focus:outline-none placeholder:text-sm border rounded-md w-full date" />
                            </div>
                            <div className=" p-2 py-2">
                                <select name="" className="bg-gray-200  w-full py-3 rounded">
                                    <option value="">3 Traveler</option>
                                    <option value="">4 Traveler</option>
                                </select>
                            </div>
                            <div className=" p-2">
                                <input type="button" value="Search"
                                    className="bg-[#ed7d2b] py-2 text-slate-50  w-full rounded-lg text-lg font-medium cursor-pointer" />
                            </div>
                        </div>


                    </form>
                </div>
            </nav>

            <div className="container flex md:flex-row flex-col gap-5 py-10 text-left">
                <div className="shadow  basis-1/4 ">
                    <img src="assets/images/googleMap.jpg" alt="" />

                    <p className="py-2 text-center w-ful">Popular filters for Chattogram </p>
                    <p className="border-t py-2 w-full"></p>
                    <div className="text-center">
                        <label for="" className="text-center">Price Range</label><br />
                        <input type="range" className="w-full" />
                        <p className="text-[10px]">BDT 1000 - BDT 9000+</p>
                        <p className="border-b py-2 w-full"></p>
                    </div>
                    <div className="px-5 text-gray-700">
                        <h1 className=" my-2 text-gray-700">Accommodation Type</h1>
                        <input type="checkbox" className="font-thin" name="" id="" /> <label for="">Hotel</label><br />
                        <input type="checkbox" className="font-thin" name="" id="" /><label for="" className="ml-1">Hotel
                            Resort</label>
                    </div>
                    <p className="border-b py-2 w-full"></p>
                    <div className="px-5 text-gray-700 font-normal">
                        <h1 className=" my-2 text-gray-700 text-center">Amenities</h1>
                        <input type="checkbox" className="font-thin" name="" id="" /> <label for="">Free wifi</label><br />
                        <input type="checkbox" className="font-thin" name="" id="" /><label for="" className="ml-1">Breakfast
                            included</label><br />
                        <input type="checkbox" className="font-thin" name="" id="" /><label for="" className="ml-1">Breakfast
                            Pool</label><br />
                        <input type="checkbox" className="font-thin" name="" id="" /><label for="" className="ml-1">Breakfast
                            Free Parking</label>
                    </div>
                    <p className="border-b py-2 w-full"></p>
                    <div className="px-2">
                        <p className="text-center py-5">Star Rating</p>
                        <input type="checkbox" name="" id="" /> <span className="text-[#ffa820]"> <i className="fa-solid fa-star"></i><i
                            className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                                className="fa-solid fa-star"></i></span><br />
                        <input type="checkbox" name="" id="" /> <span className="text-[#ffa820]"> <i className="fa-solid fa-star"></i><i
                            className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                                className="fa-solid fa-star"></i></span><br />
                        <input type="checkbox" name="" id="" /> <span className="text-[#ffa820]"> <i className="fa-solid fa-star"></i><i
                            className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></span><br />
                        <input type="checkbox" name="" id="" /> <span className="text-[#ffa820]" > <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i></span><br />
                        <input type="checkbox" name="" id="" /> <span className="text-[#ffa820]"> <i
                            className="fa-solid fa-star"></i></span><br />
                    </div>
                </div>

                <div className=" basis-3/4 ">
                    <div className="grid md:grid-cols-6 grid-cols-2 gap-2 md:border-2 border-gray-300 py-3  rounded-sm px-2 text-center bg-gray-100">
                        <div className="md:border-r-2 border md:p-0 p-2 md:border-0 border-gray-300">

                            <p>Sort</p>
                        </div>
                        <div className="md:border-r-2 border p-2 md:p-0 md:border-0 border-gray-300">
                            <p>Best Match</p>
                        </div>
                        <div className="md:border-r-2 border p-2 md:p-0 md:border-0 border-gray-300">
                            <p>Top reviewed</p>
                        </div>
                        <div className="md:border-r-2 border p-2 md:p-0 md:border-0  border-gray-300">
                            <p>Lowest price first</p>
                        </div>
                        <div className="md:border-r-2 border p-2 md:p-0 md:border-0 border-gray-300">
                            <p>Distance</p>
                        </div>
                        <div className="md:border-0 border p-2 md:p-0 border-gray-300">
                            <p>Other deals</p>
                        </div>
                    </div>

                    <div className="flex md:flex-row flex-col my-10 gap-2 bg-[#f9f9f9]">
                        <div className="rounded-sm basis-[30%]">
                            <div className="photo-viewer-wrapper w-full">
                                <div id="photo-viewer" className='relative'>
                                    <img src="assets/images/resort/2.png" alt="" className="w-full" />
                                    <div className="px-2 absolute bottom-2 right-1">
                                        <span className="text-[#eeb04c]"> <i className="fa-solid fa-star"></i><i
                                            className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                                                className="fa-solid fa-star"></i></span><br />
                                    </div>
                                </div>

                                <div className="thumbnails grid grid-cols-3  gap-2">
                                    <img data-text="IMG1" className="thumb activeimg mt-1 md:w-20" src="assets/images/resort/1.png" alt="" />
                                    <img data-text="IMG2" className="thumb mt-1 md:w-20" src="assets/images/resort/3.png" alt="" />
                                    <img data-text="IMG3" className="thumb mt-1 md:w-20" src="assets/images/resort/1.png" alt="" />

                                </div>
                            </div>
                        </div>
                        <div className="border-r p-1 basis-[40%]">
                            <h1 className="text-[#450303] text-lg font-medium">Sayeman Beach Resort</h1>
                            <p className="text-[#450303]">Resort Hotel</p>
                            <div className="flex text-gray-400">
                                <i className="fa-solid fa-location-dot"></i>
                                <address> Marine Drive Road,
                                    Kolatali, Cox's Bazar</address>
                            </div>
                            <p className='text-blue-400'><i class="fa-solid fa-umbrella-beach text-sm"></i> Near Beach</p>
                            <ul className="mt-5 flex gap-1 text-sm">
                                <li className="shadow border bg-gray-50 px-2"><a href="" className="">Breakfast</a>
                                </li>
                                <li className="shadow border bg-gray-50 px-2"><a href="" className="">Fitness Center</a>
                                </li>
                                <li className="shadow border bg-gray-50 px-2"><a href="" className="">Parking </a>
                                </li>
                                <li className="shadow border bg-gray-50 px-2">+2</li>
                            </ul>
                        </div>
                        <div className="text-center p-2 basis-[30%] mt-3 md:mt-0">
                            <div className=" flex justify-between px-10 md:mb-0 mb-5">
                                <h4 className="text-[#450303]">Excellent</h4>
                                <div className="relative">
                                    <img src="assets/images/resort/Union.png" className=" w-6" alt="" />
                                    <p className="absolute top-1 text-sm ">8.1</p>
                                </div>
                            </div>
                            <p className="text-[12px] text-gray-400">8,257 reviews</p>
                            <h1 className="text-lg text-[#450303] font-medium">BDT 7,550</h1>
                            <p className="text-[12px] text-gray-400">For 1 room per night</p>
                            <p className="text-sm py-5">Additional discount for selected
                                payment methods*</p>
                            <div
                                className="flex bg-[#26aed6] items-center gap-1 text-white mx-5 justify-center md:w-28 text-sm py-1 text-center  rounded-md ml-12">
                                <Link to="/room-select">Select room</Link><i className="fa-solid fa-angle-right"></i>

                            </div>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col my-10 gap-2 bg-[#f9f9f9]">
                        <div className="rounded-sm basis-[30%]">
                            <div className="photo-viewer-wrapper w-full">
                                <div id="photo-viewer" className='relative'>
                                    <img src="assets/images/resort/2.png" alt="" className="w-full" />
                                    <div className="px-2 absolute bottom-2 right-1">
                                        <span className="text-[#eeb04c]"> <i className="fa-solid fa-star"></i><i
                                            className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                                                className="fa-solid fa-star"></i></span><br />
                                    </div>
                                </div>

                                <div className="thumbnails grid grid-cols-3  gap-2">
                                    <img data-text="IMG1" className="thumb activeimg mt-1 md:w-20" src="assets/images/resort/1.png" alt="" />
                                    <img data-text="IMG2" className="thumb mt-1 md:w-20" src="assets/images/resort/3.png" alt="" />
                                    <img data-text="IMG3" className="thumb mt-1 md:w-20" src="assets/images/resort/1.png" alt="" />

                                </div>
                            </div>
                        </div>
                        <div className="border-r p-1 basis-[40%]">
                            <h1 className="text-[#450303] text-lg font-medium">Sayeman Beach Resort</h1>
                            <p className="text-[#450303]">Resort Hotel</p>
                            <div className="flex text-gray-400">
                                <i className="fa-solid fa-location-dot"></i>
                                <address> Marine Drive Road,
                                    Kolatali, Cox's Bazar</address>
                            </div>
                            <p className='text-blue-400'><i class="fa-solid fa-umbrella-beach text-sm"></i> Near Beach</p>
                            <ul className="mt-5 flex gap-1 text-sm">
                                <li className="shadow border bg-gray-50 px-2"><a href="" className="">Breakfast</a>
                                </li>
                                <li className="shadow border bg-gray-50 px-2"><a href="" className="">Fitness Center</a>
                                </li>
                                <li className="shadow border bg-gray-50 px-2"><a href="" className="">Parking </a>
                                </li>
                                <li className="shadow border bg-gray-50 px-2">+2</li>
                            </ul>
                        </div>
                        <div className="text-center p-2 basis-[30%] mt-3 md:mt-0">
                            <div className=" flex justify-between px-10 md:mb-0 mb-5">
                                <h4 className="text-[#450303]">Excellent</h4>
                                <div className="relative">
                                    <img src="assets/images/resort/Union.png" className=" w-6" alt="" />
                                    <p className="absolute top-1 text-sm ">8.1</p>
                                </div>
                            </div>
                            <p className="text-[12px] text-gray-400">8,257 reviews</p>
                            <h1 className="text-lg text-[#450303] font-medium">BDT 7,550</h1>
                            <p className="text-[12px] text-gray-400">For 1 room per night</p>
                            <p className="text-sm py-5">Additional discount for selected
                                payment methods*</p>
                            <div
                                className="flex bg-[#26aed6] items-center gap-1 text-white mx-5 justify-center md:w-28 text-sm py-1 text-center  rounded-md ml-12">
                                <Link to="/room-select">Select room</Link><i className="fa-solid fa-angle-right"></i>

                            </div>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col my-10 gap-2 bg-[#f9f9f9]">
                        <div className="rounded-sm basis-[30%]">
                            <div className="photo-viewer-wrapper w-full">
                                <div id="photo-viewer" className='relative'>
                                    <img src="assets/images/resort/2.png" alt="" className="w-full" />
                                    <div className="px-2 absolute bottom-2 right-1">
                                        <span className="text-[#eeb04c]"> <i className="fa-solid fa-star"></i><i
                                            className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                                                className="fa-solid fa-star"></i></span><br />
                                    </div>
                                </div>

                                <div className="thumbnails grid grid-cols-3  gap-2">
                                    <img data-text="IMG1" className="thumb activeimg mt-1 md:w-20" src="assets/images/resort/1.png" alt="" />
                                    <img data-text="IMG2" className="thumb mt-1 md:w-20" src="assets/images/resort/3.png" alt="" />
                                    <img data-text="IMG3" className="thumb mt-1 md:w-20" src="assets/images/resort/1.png" alt="" />

                                </div>
                            </div>
                        </div>
                        <div className="border-r p-1 basis-[40%]">
                            <h1 className="text-[#450303] text-lg font-medium">Sayeman Beach Resort</h1>
                            <p className="text-[#450303]">Resort Hotel</p>
                            <div className="flex text-gray-400">
                                <i className="fa-solid fa-location-dot"></i>
                                <address> Marine Drive Road,
                                    Kolatali, Cox's Bazar</address>
                            </div>
                            <p className='text-blue-400'><i class="fa-solid fa-umbrella-beach text-sm"></i> Near Beach</p>
                            <ul className="mt-5 flex gap-1 text-sm">
                                <li className="shadow border bg-gray-50 px-2"><a href="" className="">Breakfast</a>
                                </li>
                                <li className="shadow border bg-gray-50 px-2"><a href="" className="">Fitness Center</a>
                                </li>
                                <li className="shadow border bg-gray-50 px-2"><a href="" className="">Parking </a>
                                </li>
                                <li className="shadow border bg-gray-50 px-2">+2</li>
                            </ul>
                        </div>
                        <div className="text-center p-2 basis-[30%] mt-3 md:mt-0">
                            <div className=" flex justify-between px-10 md:mb-0 mb-5">
                                <h4 className="text-[#450303]">Excellent</h4>
                                <div className="relative">
                                    <img src="assets/images/resort/Union.png" className=" w-6" alt="" />
                                    <p className="absolute top-1 text-sm ">8.1</p>
                                </div>
                            </div>
                            <p className="text-[12px] text-gray-400">8,257 reviews</p>
                            <h1 className="text-lg text-[#450303] font-medium">BDT 7,550</h1>
                            <p className="text-[12px] text-gray-400">For 1 room per night</p>
                            <p className="text-sm py-5">Additional discount for selected
                                payment methods*</p>
                            <div
                                className="flex bg-[#26aed6] items-center gap-1 text-white mx-5 justify-center md:w-28 text-sm py-1 text-center  rounded-md ml-12">
                                <Link to="/room-select">Select room</Link><i className="fa-solid fa-angle-right"></i>

                            </div>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col my-10 gap-2 bg-[#f9f9f9]">
                        <div className="rounded-sm basis-[30%]">
                            <div className="photo-viewer-wrapper w-full">
                                <div id="photo-viewer" className='relative'>
                                    <img src="assets/images/resort/2.png" alt="" className="w-full" />
                                    <div className="px-2 absolute bottom-2 right-1">
                                        <span className="text-[#eeb04c]"> <i className="fa-solid fa-star"></i><i
                                            className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                                                className="fa-solid fa-star"></i></span><br />
                                    </div>
                                </div>

                                <div className="thumbnails grid grid-cols-3  gap-2">
                                    <img data-text="IMG1" className="thumb activeimg mt-1 md:w-20" src="assets/images/resort/1.png" alt="" />
                                    <img data-text="IMG2" className="thumb mt-1 md:w-20" src="assets/images/resort/3.png" alt="" />
                                    <img data-text="IMG3" className="thumb mt-1 md:w-20" src="assets/images/resort/1.png" alt="" />

                                </div>
                            </div>
                        </div>
                        <div className="border-r p-1 basis-[40%]">
                            <h1 className="text-[#450303] text-lg font-medium">Sayeman Beach Resort</h1>
                            <p className="text-[#450303]">Resort Hotel</p>
                            <div className="flex text-gray-400">
                                <i className="fa-solid fa-location-dot"></i>
                                <address> Marine Drive Road,
                                    Kolatali, Cox's Bazar</address>
                            </div>
                            <p className='text-blue-400'><i class="fa-solid fa-umbrella-beach text-sm"></i> Near Beach</p>
                            <ul className="mt-5 flex gap-1 text-sm">
                                <li className="shadow border bg-gray-50 px-2"><a href="" className="">Breakfast</a>
                                </li>
                                <li className="shadow border bg-gray-50 px-2"><a href="" className="">Fitness Center</a>
                                </li>
                                <li className="shadow border bg-gray-50 px-2"><a href="" className="">Parking </a>
                                </li>
                                <li className="shadow border bg-gray-50 px-2">+2</li>
                            </ul>
                        </div>
                        <div className="text-center p-2 basis-[30%] mt-3 md:mt-0">
                            <div className=" flex justify-between px-10 md:mb-0 mb-5">
                                <h4 className="text-[#450303]">Excellent</h4>
                                <div className="relative">
                                    <img src="assets/images/resort/Union.png" className=" w-6" alt="" />
                                    <p className="absolute top-1 text-sm ">8.1</p>
                                </div>
                            </div>
                            <p className="text-[12px] text-gray-400">8,257 reviews</p>
                            <h1 className="text-lg text-[#450303] font-medium">BDT 7,550</h1>
                            <p className="text-[12px] text-gray-400">For 1 room per night</p>
                            <p className="text-sm py-5">Additional discount for selected
                                payment methods*</p>
                            <div
                                className="flex bg-[#26aed6] items-center gap-1 text-white mx-5 justify-center md:w-28 text-sm py-1 text-center  rounded-md ml-12">
                                <Link to="/room-select">Select room</Link><i className="fa-solid fa-angle-right"></i>

                            </div>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col my-10 gap-2 bg-[#f9f9f9]">
                        <div className="rounded-sm basis-[30%]">
                            <div className="photo-viewer-wrapper w-full">
                                <div id="photo-viewer" className='relative'>
                                    <img src="assets/images/resort/2.png" alt="" className="w-full" />
                                    <div className="px-2 absolute bottom-2 right-1">
                                        <span className="text-[#eeb04c]"> <i className="fa-solid fa-star"></i><i
                                            className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                                                className="fa-solid fa-star"></i></span><br />
                                    </div>
                                </div>

                                <div className="thumbnails grid grid-cols-3  gap-2">
                                    <img data-text="IMG1" className="thumb activeimg mt-1 md:w-20" src="assets/images/resort/1.png" alt="" />
                                    <img data-text="IMG2" className="thumb mt-1 md:w-20" src="assets/images/resort/3.png" alt="" />
                                    <img data-text="IMG3" className="thumb mt-1 md:w-20" src="assets/images/resort/1.png" alt="" />

                                </div>
                            </div>
                        </div>
                        <div className="border-r p-1 basis-[40%]">
                            <h1 className="text-[#450303] text-lg font-medium">Sayeman Beach Resort</h1>
                            <p className="text-[#450303]">Resort Hotel</p>
                            <div className="flex text-gray-400">
                                <i className="fa-solid fa-location-dot"></i>
                                <address> Marine Drive Road,
                                    Kolatali, Cox's Bazar</address>
                            </div>
                            <p className='text-blue-400'><i class="fa-solid fa-umbrella-beach text-sm"></i> Near Beach</p>
                            <ul className="mt-5 flex gap-1 text-sm">
                                <li className="shadow border bg-gray-50 px-2"><a href="" className="">Breakfast</a>
                                </li>
                                <li className="shadow border bg-gray-50 px-2"><a href="" className="">Fitness Center</a>
                                </li>
                                <li className="shadow border bg-gray-50 px-2"><a href="" className="">Parking </a>
                                </li>
                                <li className="shadow border bg-gray-50 px-2">+2</li>
                            </ul>
                        </div>
                        <div className="text-center p-2 basis-[30%] mt-3 md:mt-0">
                            <div className=" flex justify-between px-10 md:mb-0 mb-5">
                                <h4 className="text-[#450303]">Excellent</h4>
                                <div className="relative">
                                    <img src="assets/images/resort/Union.png" className=" w-6" alt="" />
                                    <p className="absolute top-1 text-sm ">8.1</p>
                                </div>
                            </div>
                            <p className="text-[12px] text-gray-400">8,257 reviews</p>
                            <h1 className="text-lg text-[#450303] font-medium">BDT 7,550</h1>
                            <p className="text-[12px] text-gray-400">For 1 room per night</p>
                            <p className="text-sm py-5">Additional discount for selected
                                payment methods*</p>
                            <div
                                className="flex bg-[#26aed6] items-center gap-1 text-white mx-5 justify-center md:w-28 text-sm py-1 text-center  rounded-md ml-12">
                                <Link to="/room-select">Select room</Link><i className="fa-solid fa-angle-right"></i>

                            </div>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col my-10 gap-2 bg-[#f9f9f9]">
                        <div className="rounded-sm basis-[30%]">
                            <div className="photo-viewer-wrapper w-full">
                                <div id="photo-viewer" className='relative'>
                                    <img src="assets/images/resort/2.png" alt="" className="w-full" />
                                    <div className="px-2 absolute bottom-2 right-1">
                                        <span className="text-[#eeb04c]"> <i className="fa-solid fa-star"></i><i
                                            className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                                                className="fa-solid fa-star"></i></span><br />
                                    </div>
                                </div>

                                <div className="thumbnails grid grid-cols-3  gap-2">
                                    <img data-text="IMG1" className="thumb activeimg mt-1 md:w-20" src="assets/images/resort/1.png" alt="" />
                                    <img data-text="IMG2" className="thumb mt-1 md:w-20" src="assets/images/resort/3.png" alt="" />
                                    <img data-text="IMG3" className="thumb mt-1 md:w-20" src="assets/images/resort/1.png" alt="" />

                                </div>
                            </div>
                        </div>
                        <div className="border-r p-1 basis-[40%]">
                            <h1 className="text-[#450303] text-lg font-medium">Sayeman Beach Resort</h1>
                            <p className="text-[#450303]">Resort Hotel</p>
                            <div className="flex text-gray-400">
                                <i className="fa-solid fa-location-dot"></i>
                                <address> Marine Drive Road,
                                    Kolatali, Cox's Bazar</address>
                            </div>
                            <p className='text-blue-400'><i class="fa-solid fa-umbrella-beach text-sm"></i> Near Beach</p>
                            <ul className="mt-5 flex gap-1 text-sm">
                                <li className="shadow border bg-gray-50 px-2"><a href="" className="">Breakfast</a>
                                </li>
                                <li className="shadow border bg-gray-50 px-2"><a href="" className="">Fitness Center</a>
                                </li>
                                <li className="shadow border bg-gray-50 px-2"><a href="" className="">Parking </a>
                                </li>
                                <li className="shadow border bg-gray-50 px-2">+2</li>
                            </ul>
                        </div>
                        <div className="text-center p-2 basis-[30%] mt-3 md:mt-0">
                            <div className=" flex justify-between px-10 md:mb-0 mb-5">
                                <h4 className="text-[#450303]">Excellent</h4>
                                <div className="relative">
                                    <img src="assets/images/resort/Union.png" className=" w-6" alt="" />
                                    <p className="absolute top-1 text-sm ">8.1</p>
                                </div>
                            </div>
                            <p className="text-[12px] text-gray-400">8,257 reviews</p>
                            <h1 className="text-lg text-[#450303] font-medium">BDT 7,550</h1>
                            <p className="text-[12px] text-gray-400">For 1 room per night</p>
                            <p className="text-sm py-5">Additional discount for selected
                                payment methods*</p>
                            <div
                                className="flex bg-[#26aed6] items-center gap-1 text-white mx-5 justify-center md:w-28 text-sm py-1 text-center  rounded-md ml-12">
                                <Link to="/room-select">Select room</Link><i className="fa-solid fa-angle-right"></i>

                            </div>
                        </div>
                    </div>


                </div>
            </div>


        </div >


    );
}


export default Hotel;