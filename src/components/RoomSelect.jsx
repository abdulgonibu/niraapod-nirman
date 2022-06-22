import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MobileNav from "../common/MobileNav";
import Nav from "../common/Nav";

class RoomSelect extends Component {
    render() {
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
                    <div className=" shadow text-black px-20 mx-auto destination-list container hidden md:block">
                        <form action="" className=" ">
                            <div className="grid grid-cols-5">
                                <div className=" p-2 relative ">

                                    <input type="text"
                                        className="focus:outline-none  py-2 rounded-md w-full pl-7 placeholder:text-sm"
                                        placeholder="Enter a destination " />
                                    <i className="fa-solid fa-magnifying-glass absolute top-5 left-3 text-gray-400"></i>

                                </div>
                                <div className=" p-2  ">

                                    <input type="text" id="datepicker2" value="06/07/2022"
                                        className="datepicker px-4 py-2 focus:outline-none placeholder:text-sm border rounded-md w-full date" />
                                </div>


                                <div className=" p-2  ">

                                    <input type="text" id="datepicker2" value="06/07/2022"
                                        className="datepicker px-4 py-2 focus:outline-none placeholder:text-sm border rounded-md w-full date" />
                                </div>
                                <div className=" p-2   rounded-r-lg">

                                    <select name="" className="  w-full py-2.5 rounded bg-gray-50">
                                        <option value="">3 Traveler</option>
                                        <option value="">4 Traveler</option>
                                    </select>
                                </div>
                                <div className=" p-2 ">
                                    <input type="button" value="Search"
                                        className="bg-[#ed7d2b] py-2 text-slate-50  w-full rounded-lg text-lg font-medium cursor-pointer" />
                                </div>
                            </div>


                        </form>
                    </div>
                </nav>
                <div className="container py-10 text-left">
                    <h1 className="text-xl text-center md:text-left py-2">Sayeman Beach Resort</h1>
                    <p className="md:text-sm text-center md:text-left text-xs"> Marine Drive Road,
                        Kolatali, Cox's Bazar, Bangladesh</p>
                    <div className="flex md:flex-row flex-col gap-2 py-5">
                        <div className="basis-30%">
                            <img src="assets/images/room/1.png" className="h-full w-full" alt="" />
                        </div>
                        <div className="grid grid-cols-3 gap-2 basis-70%">
                            <img src="assets/images/room/2.png" className="" alt="" />
                            <img src="assets/images/room/3.png" className="" alt="" />


                            <img src="assets/images/room/4.png" className="" alt="" />
                            <img src="assets/images/room/5.png" className="" alt="" />

                            <img src="assets/images/room/6.png" className="" alt="" />
                            <img src="assets/images/room/7.png" className="" alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between border border-gray-300 p-4 text-gray-600">
                        <ul className="grid md:grid-cols-5 grid-cols-3 md:gap-10 gap-5 md:mb-0 mb-5">
                            <li className='overview cursor-pointer' >Overview</li>
                            <li className='room cursor-pointer'>Rooms</li>
                            <li className='facilities cursor-pointer'>Facilities</li>
                            <li><a href="">Reviews</a></li>
                            <li><a href="">Policies</a></li>
                        </ul>
                        <ul className="flex flex-col md:flex-row gap-5 md:gap-10 md:items-start  items-center  justify-center">
                            <div className="flex gap-1 md:text-base text-2xl">
                                <img src="assets/images/bangladesh-taka-currency-symbol-vector-30023410.jpg" className="w-5 h-5" alt="" />
                                <p>5,550</p>
                            </div>

                            <li className='text-center bg-[#4b81fb] p-1 py-1 cursor-pointer  text-sm md:text-normal px-4 rounded text-white viewDeal'>View This Deal</li>
                        </ul>

                    </div>

                    {/* Overview */}
                    <div className='overview-show'>
                        <div className="flex md:flex-row flex-col gap-2">
                            <div className="basis-[75%]  ">
                                <div className="border border-gray-300 mt-5">

                                    <h1 className="pl-5 py-2 text-lg font-bold text-left">Highlights</h1>
                                    <div className="grid md:grid-cols-5 p-2 gap-5 pl-5 mt-3 md:mt-0">
                                        <div className="flex md:flex-wrap md:items-center md:justify-center md:flex-col gap-2 text-center space-y-2">
                                            <img src="assets/images/vector/Vector.png" className="w-10" alt="" />
                                            <p className="md:text-sm text-xs">430 meters to public
                                                transportation</p>
                                        </div>
                                        <div className="flex md:flex-wrap md:items-center md:justify-center md:flex-col gap-2 text-center space-y-2">
                                            <img src="assets/images/vector/Vector (1).png" className="w-5" alt="" />
                                            <p className="md:text-sm text-xs">Check-in[24 hours]</p>
                                        </div>
                                        <div className="flex md:flex-wrap md:items-center md:justify-center md:flex-col gap-2 text-center space-y-2">
                                            <img src="assets/images/vector/Group 38.png" className="w-5" alt="" />
                                            <p className="md:text-sm text-xs">Airport transfer</p>
                                        </div>
                                        <div className="flex md:flex-wrap md:items-center md:justify-center md:flex-col gap-2 text-center space-y-2">
                                            <img src="assets/images/vector/Vector (2).png" className="w-5" alt="" />
                                            <p className="md:text-sm text-xs">Excelent Breakfast</p>
                                        </div>
                                        <div className="flex md:flex-wrap md:items-center md:justify-center md:flex-col gap-2 text-center space-y-2">
                                            <img src="assets/images/vector/Vector (3).png" className="w-5" alt="" />
                                            <p className="md:text-sm text-xs">Excelent View</p>
                                        </div>




                                    </div>
                                </div>


                                <div className="border border-gray-300  my-5">
                                    <p className="m-2 text-sm text-justify">The car parking and the Wi-Fi are always free, so you can stay
                                        in touch
                                        and come and
                                        go as
                                        you
                                        please.
                                        Conveniently situated in the Mactan Island part of Cebu, this property puts you close to
                                        attractions
                                        and
                                        interesting dining options. Don't leave before paying a visit to the famous Basilica De Sto.
                                        Nino.
                                        Massage, restaurant and fitness center are among the special facilities that will enhance your
                                        stay
                                        with
                                        on-site convenience.</p>
                                </div>
                            </div>
                            <div className="basis-[25%] border border-gray-300 my-5">
                                <div className="text-center p-1 px-3 basis-[30%]">
                                    <div className=" flex justify-between px-2">
                                        <h4 className="text-[#450303] text-lg font-medium">Excellent</h4>
                                        <div className="relative">
                                            <img src="assets/images/resort/Union.png" className=" " alt="" />
                                            <p className="absolute top-1 text-sm ">8.1</p>
                                        </div>
                                    </div>
                                    <p className="text-[12px] text-gray-400 flex justify-start text-left pl-2">8,257 reviews</p>
                                    <p className="border-2 p-[2px] border-gray-300 rounded-md text-gray-500 mr-20 my-2 font-normal">
                                        Housekeeping
                                        <span className="text-[#49d3ff] text-sm ml-1">201</span> <i
                                            className="fa-solid fa-thumbs-up text-[#49d3ff]"></i>
                                    </p>
                                    <p className="border-2 p-[2px] border-gray-300 rounded-md text-gray-500 mr-20 mb-2 font-normal">
                                        Food & Dining
                                        <span className="text-[#49d3ff] text-sm ml-1">201</span> <i
                                            className="fa-solid fa-thumbs-up text-[#49d3ff]"></i>
                                    </p>

                                    <p
                                        className="border-2 p-[2px] border-gray-300 rounded-md text-left text-gray-500 mr-[60px] mb-2 font-normal">
                                        Children’s Activity
                                        <span className="text-[#49d3ff] text-sm ml-1">201</span> <i
                                            className="fa-solid fa-thumbs-up text-[#49d3ff]"></i>
                                    </p>

                                    <p className="border p-1 border-gray-300 rounded-md text-gray-500 text-left  font-normal">
                                        Had a great experience.<br />
                                        <span className="text-sm">Tamanna - 5 May 2022</span>

                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-2">
                            <div className="basis-[75%]">
                                <div className=" rounded-sm border border-gray-400">
                                    <ul className="flex justify-between px-10 items-center text-center p-2 border-b border-gray-400">
                                        <li><a href="">Staff Vaccination</a></li>
                                        <li><a href="">Hygiene plus</a></li>
                                    </ul>
                                    <div>
                                        <p className="ml-10 text-gray-700 my-2">This property has self-selected and self-certified the
                                            following
                                            hygiene
                                            measures.Learn
                                            more</p>
                                        <div className="mx-10 border border-gray-400 flex flex-col md:flex-row gap-1 mb-5 rounded p-2">
                                            <div className='text-center flex items-center justify-center'>
                                                <img src="assets/images/vector/emojione-monotone_syringe.png" alt="" className='h-20 md:w-full md:h-full w-20  ' />
                                            </div>
                                            <div className="">
                                                <h1 className="md:text-lg font-medium py-1">100% of staff fully vaccinated</h1>
                                                <p className='text-justify text-xs'>100% of on-site staff have received all necessary vaccination shots for COVID-19.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-sm border border-gray-400 mt-5">
                                    <p className='text-center md:text-left md:text-base text-sm p-2 md:p-0'>This property has self-selected and self-certified the following hygiene measures.Learn more</p>
                                    <div className="grid md:grid-cols-3 gap-10 p-5">
                                        <div className="bg-gray-200 flex gap-3 p-3 rounded-md">
                                            <img src="assets/images/vector/1 (1).png" className="w-6 h-6 mt-3" alt="" />
                                            <div>
                                                <p className="font-semibold">Safety Features</p>
                                                <div className="flex gap-1 py-1">
                                                    <span className="text-green-300"><i className="fa-solid fa-check"></i></span>
                                                    <p className="text-xs ">
                                                        Staff trained in
                                                        safety
                                                        protocol</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-200 flex gap-3 p-3 rounded-md">
                                            <img src="assets/images/vector/1 (3).png" className="w-6 h-6 mt-3" alt="" />
                                            <div>
                                                <p className="font-semibold text-sm">Preventative Equipment</p>
                                                <div className="flex gap-1 pt-1 text-xs">
                                                    <span className="text-green-300"><i className="fa-solid fa-check"></i></span>
                                                    <p className="text-sm ">
                                                        Hand sanitizer

                                                    </p>
                                                </div>
                                                <div className="flex gap-1 ">
                                                    <span className="text-green-300"><i className="fa-solid fa-check"></i></span>
                                                    <p className="text-sm ">
                                                        Free face masks</p>
                                                </div>
                                                <div className="flex gap-1 ">
                                                    <span className="text-green-300"><i className="fa-solid fa-check"></i></span>
                                                    <p className="text-sm ">
                                                        Sterilizing equipment</p>
                                                </div>

                                            </div>

                                        </div>
                                        <div className="bg-gray-200 flex gap-3 p-3 rounded-md">
                                            <img src="assets/images/vector/1 (2).png" className="w-6 h-6 mt-3" alt="" />
                                            <div>
                                                <p className="font-semibold">Health and Medical</p>
                                                <div className="flex gap-1 pt-1 text-xs">
                                                    <span className="text-green-300"><i className="fa-solid fa-check"></i></span>
                                                    <p className="text-xs ">   First aid kit
                                                    </p>


                                                </div>
                                                <div className="flex gap-1 ">
                                                    <span className="text-green-300"><i className="fa-solid fa-check"></i></span>
                                                    <p className="text-xs">
                                                        Doctor/nurse on call</p>
                                                </div>


                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-sm border border-gray-400 py-4 mt-2 px-5">
                                    <h2 className='text-center pb-2 md:text-left md:pb-0'>Facilities</h2>

                                    <div className="grid md:grid-cols-5 grid-cols-2 gap-4">
                                        <div className="flex gap-1 py-1">
                                            <span className="text-xs"><i className="fa-solid fa-check"></i></span>
                                            <p className="text-xs ">
                                                Airport transfer</p>
                                        </div>
                                        <div className="flex gap-1 py-1">
                                            <span className="text-xs"><i className="fa-solid fa-check"></i></span>
                                            <p className="text-xs ">
                                                Bicycle rental</p>
                                        </div>
                                        <div className="flex gap-1 py-1">
                                            <span className="text-xs"><i className="fa-solid fa-check"></i></span>
                                            <p className="text-xs ">
                                                Car parking</p>
                                        </div>
                                        <div className="flex gap-1 py-1">
                                            <span className="text-xs"><i className="fa-solid fa-check"></i></span>
                                            <p className="text-xs ">
                                                Swimming pool [indoor]</p>
                                        </div>
                                        <div className="flex gap-1 py-1">
                                            <span className="text-xs"><i className="fa-solid fa-check"></i></span>
                                            <p className="text-xs ">
                                                Kid’s club</p>
                                        </div>
                                        <div className="flex gap-1 py-1">
                                            <span className="text-xs"><i className="fa-solid fa-check"></i></span>
                                            <p className="text-xs ">
                                                Shuttle service</p>
                                        </div>
                                        <div className="flex gap-1 py-1">
                                            <span className="text-xs"><i className="fa-solid fa-check"></i></span>
                                            <p className="text-xs ">
                                                Laundry</p>
                                        </div>
                                        <div className="flex gap-1 py-1">
                                            <span className="text-xs"><i className="fa-solid fa-check"></i></span>
                                            <p className="text-xs ">
                                                Gym</p>
                                        </div>
                                        <div className="flex gap-1 py-1">
                                            <span className="text-xs"><i className="fa-solid fa-check"></i></span>
                                            <p className="text-xs ">
                                                Spa</p>
                                        </div>
                                        <div className="flex gap-1 py-1">
                                            <span className="text-xs"><i className="fa-solid fa-check"></i></span>
                                            <p className="text-xs ">
                                                Free Wi-Fi in all rooms!</p>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div className="basis-[25%] border border-gray-300 ">
                                <div className="m-2">
                                    <img src="assets/images/googleMap.jpg" alt="" />

                                </div>

                                <div className="flex gap-3 m-2">
                                    <p className="border w-8 h-8 text-center flex items-center justify-center rounded-full mt-1">8.1</p>

                                    <div className="">
                                        <p className="font-medium">Excelent</p>
                                        <p className="text-xs">Location rating score</p>
                                    </div>

                                </div>
                                <div className="p-2 flex gap-2 ">
                                    <i className="fa-solid fa-location-dot text-gray-500"></i>
                                    <p className="font-medium text-sm">Excelent Location</p>
                                </div>
                                <div className="border-b-2 border-gray-400 mx-2">
                                </div>
                                <div className="m-2 flex justify-between">
                                    <div className="flex gap-2">
                                        <i className="fa-solid fa-car text-sm text-gray-500 mt-1"></i>
                                        <p className="text-sm text-gray-500">Parking </p>
                                    </div>
                                    <div>
                                        <p className="text-green-500">Free</p>
                                    </div>

                                </div>
                                <div className="border-b-2 border-gray-400 mx-2">
                                </div>
                                <div className="m-2 text-gray-600">
                                    <h5 className="font-medium">Popular landmarks</h5>
                                    <div className="flex justify-between mb-1 mt-1 text-xs">
                                        <p>Contrary to popular belief</p>
                                        <p>301 m</p>
                                    </div>
                                    <div className="flex justify-between mb-1 text-xs">
                                        <p>Contrary to popular belief</p>
                                        <p>151 m</p>
                                    </div>
                                    <div className="flex justify-between mb-1 text-xs">
                                        <p>Contrary to popular belief</p>
                                        <p>254 m</p>
                                    </div>
                                    <div className="flex justify-between mb-1 text-xs">
                                        <p>Contrary to popular belief</p>
                                        <p>236 m</p>
                                    </div>
                                    <div className="flex justify-between mb-1 text-xs">
                                        <p>Location name</p>
                                        <p>321 m</p>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                    {/* room Deatails*/}
                    <div className='room-show hidden'>
                        <h2 className="py-3 text-gray-700">7 room types I 18 room offers</h2>
                        <div className="">
                            {/* City view */}
                            <h2 className="py-3 text-gray-700 border border-gray-400 pl-5 text-center md:text-left font-semibold">City view</h2>

                            <div className="flex flex-col md:flex-row md:border-l border  md:border-b border-gray-400">
                                <div className="basis-[15%] w-full p-2">
                                    <img src="assets/images/room/1.png" className="w-full" alt="" />

                                    <div className="grid grid-cols-2 gap-1 mt-1 mb-2 md:mb-0">
                                        <img src="assets/images/room/1.png" className="" alt="" />
                                        <img src="assets/images/room/1.png" className="" alt="" />
                                    </div>
                                    <p className="text-xs text-green-300 text-center">Room photos & details</p>

                                    <div className="my-2">
                                        <div className="flex gap-2">
                                            <img src="assets/images/vector/w (1).png" className="text-xs h-3 mt-[1px]" alt="" />
                                            <p className="text-xs">Free Wi-Fi</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <img src="assets/images/vector/w (4).png" className="text-xs h-3 mt-[1px]" alt="" />
                                            <p className="text-xs">
                                                2 queen beds
                                            </p>
                                        </div>
                                        <div className="flex gap-2">
                                            <img src="assets/images/vector/3.png" className="text-xs h-3 mt-[1px]" alt="" />
                                            <p className="text-xs">Room size: 30 m²/323 ft²</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <img src="assets/images/vector/w (3).png" className="text-xs h-3 mt-[1px]" alt="" />
                                            <p className="text-xs"> Non-smoking</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <img src="assets/images/vector/w (2).png" className="text-xs h-3 mt-[1px]" alt="" />
                                            <p className="text-xs"> Shower</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <img src="assets/images/vector/1.png" className="text-xs h-3 mt-[1px]" alt="" />
                                            <p className="text-xs">
                                                Balcony/terrace
                                            </p>
                                        </div>
                                        <div className="flex gap-2">
                                            <img src="assets/images/vector/2.png" className="text-xs h-3 mt-[1px]" alt="" />
                                            <p className="text-xs"> Partial sea view
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="basis-[85%] w-full">
                                    <div className="flex flex-col md:flex-row shadow">
                                        <div className="border-l border-b  border-gray-400 basis-[35%] ">

                                            <p className="bg-gray-100  p-2 rounded-sm  border-b border-gray-400 w-full">Benefits</p>
                                            <div className="p-2">
                                                <p className="bg-[#ff9c00] p-2 text-white text-sm">Lowest price available!</p>
                                                <p>Your price includes:</p>

                                                <div className="my-5">
                                                    <div className="flex gap-1 py-1">
                                                        <span className="text-green-300"><i className="fa-solid fa-check"></i></span>
                                                        <p className="text-xs ">
                                                            Breakfast incluted</p>
                                                    </div>
                                                    <div className="flex gap-1 py-1">
                                                        <span className="text-green-300"><i className="fa-solid fa-check"></i></span>
                                                        <div>
                                                            <p className="text-xs ">
                                                                Parking, Coffee & tea, Express check-in,<br />
                                                                Free WiFi, Drinking water</p>
                                                        </div>

                                                    </div>
                                                    <div className="flex gap-1 py-1">
                                                        <span className="text-green-300"><i className="fa-solid fa-check"></i></span>
                                                        <p className="text-xs ">
                                                            Free cancellation before July 24, 2022</p>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>

                                        <div className="border-l border-b border-gray-400 basis-[10%] text-center">
                                            <p className="bg-gray-100   p-2 rounded-sm  border-b border-gray-400 w-full">Guests</p>
                                            <div className="flex justify-center items-center text-center p-2">
                                                <img src="assets/images/vector/4.png" className="h-5  " alt="" />
                                            </div>

                                        </div>
                                        <div className="border-l border-b border-gray-400 basis-[20%] text-center">
                                            <p className="bg-gray-100  p-2 rounded-sm  border-b border-gray-400 w-full">Price per night</p>

                                            <div className="text-center">
                                                <del>BDT 7906</del>
                                                <h1 className="font-bold">BDT 5821</h1>
                                                <p className="text-xs  md:text-right bg-red-500 md:ml-16 mt-5 text-white">SAVE 40% TODAY</p>
                                            </div>

                                        </div>

                                        <div className="border-l border-b border-r-0 border-gray-400 basis-[15%]">
                                            <p className="bg-gray-100  p-2 rounded-sm border-b border-gray-400 w-full text-center md:text-right">Most
                                                Booked</p>
                                            <div className="flex items-center justify-center py-8">
                                                <p className="bg-gray-300 rounded-sm p-1 text-center w-10 h-8">1</p>

                                            </div>
                                        </div>
                                        <div className="border-r border-b border-gray-400 basis-[20%] relative">
                                            <p className="bg-gray-100  p-5 rounded-sm  border-b border-gray-400 w-full"></p>
                                            <div className="flex justify-center p-10 border-l border-gray-400">

                                                <div className=" p-3 space-y-10">
                                                    <div className="bg-[#4b81fb] p-3 text-white px-8 rounded-sm border border-[#4b81fb]">
                                                        <Link to="/order-confirm">Reserve</Link>
                                                    </div>
                                                    <div className="border p-3 text-center text-white  rounded-sm border-[#4b81fb]">
                                                        <a href="" className="text-[#4b81fb]">Add To Cart</a>
                                                    </div>
                                                    <div className="bg-[#e8fbe6] p-1 text-center text-white  rounded-sm ">
                                                        <p className="font-semibold text-green-400">No Risk</p>
                                                        <a href="" className="text-xs text-teal-300">No Cancellation fee!</a>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    <div className="flex flex-col md:flex-row mt-5 shadow">
                                        <div className="border-l border-t border-gray-400 basis-[35%] ">

                                            <div className="p-2">
                                                <p className="bg-[#ff9c00] p-2 text-white text-sm">Lowest price available!</p>
                                                <p>Your price includes:</p>

                                                <div className="my-5">
                                                    <div className="flex gap-1 py-1">
                                                        <span className="text-green-300"><i className="fa-solid fa-check"></i></span>
                                                        <p className="text-xs ">
                                                            Breakfast incluted</p>
                                                    </div>
                                                    <div className="flex gap-1 py-1">
                                                        <span className="text-green-300"><i className="fa-solid fa-check"></i></span>
                                                        <div>
                                                            <p className="text-xs ">
                                                                Parking, Coffee & tea, Express check-in,<br />
                                                                Free WiFi, Drinking water</p>
                                                        </div>

                                                    </div>
                                                    <div className="flex gap-1 py-1">
                                                        <span className="text-green-300"><i className="fa-solid fa-check"></i></span>
                                                        <p className="text-xs ">
                                                            Free cancellation before July 24, 2022</p>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>

                                        <div className="border-l border-t border-gray-400 basis-[10%]">
                                            <div className="flex justify-center items-center text-center p-2">
                                                <img src="assets/images/vector/4.png" className="h-5" alt="" />
                                            </div>

                                        </div>
                                        <div className="border-l border-t border-gray-400 basis-[20%] text-center">

                                            <div className="text-center">
                                                <del>BDT 7906</del>
                                                <h1 className="font-bold">BDT 5821</h1>
                                                <p className="text-xs md:text-right bg-red-500 md:ml-16 mt-5 text-white">SAVE 40% TODAY</p>
                                            </div>

                                        </div>

                                        <div className="border-l border-t border-r-0 border-gray-400 basis-[15%]">

                                            <div className="flex items-center justify-center py-8">
                                                <p className="bg-gray-300 rounded-sm p-1 text-center w-10 h-8">1</p>

                                            </div>
                                        </div>
                                        <div className="border-r border-t  border-gray-400 basis-[20%] relative">
                                            <div className="flex justify-center p-10 border-l border-gray-400">

                                                <div className=" p-3 space-y-10">
                                                    <div className="bg-[#4b81fb] p-3 text-white px-8 rounded-sm border border-[#4b81fb]">
                                                        <Link to="/order-confirm">Reserve</Link>

                                                    </div>
                                                    <div className="border p-3 text-center text-white  rounded-sm border-[#4b81fb]">
                                                        <a href="" className="text-[#4b81fb]">Add To Cart</a>
                                                    </div>
                                                    <div className="bg-[#e8fbe6] p-1 text-center text-white  rounded-sm ">
                                                        <p className="font-semibold text-green-400">No Risk</p>
                                                        <a href="" className="text-xs text-teal-300">No Cancellation fee!</a>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Garden view */}
                        <div className=" mt-5 ">
                            <h2 className="py-3 font-semibold text-gray-700 border border-gray-400 pl-5">Garden view</h2>

                            <div className="flex flex-col md:flex-row md:border-l border  md:border-b border-gray-400">
                                <div className="basis-[15%] w-full p-2">
                                    <img src="assets/images/room/1.png" className="w-full" alt="" />

                                    <div className="grid grid-cols-2 gap-1 mt-1 mb-2 md:mb-0">
                                        <img src="assets/images/room/1.png" className="" alt="" />
                                        <img src="assets/images/room/1.png" className="" alt="" />
                                    </div>
                                    <p className="text-xs text-green-300 text-center">Room photos & details</p>

                                    <div className="my-2">
                                        <div className="flex gap-2">
                                            <img src="assets/images/vector/w (1).png" className="text-xs h-3 mt-[1px]" alt="" />
                                            <p className="text-xs">Free Wi-Fi</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <img src="assets/images/vector/w (4).png" className="text-xs h-3 mt-[1px]" alt="" />
                                            <p className="text-xs">
                                                2 queen beds



                                            </p>
                                        </div>
                                        <div className="flex gap-2">
                                            <img src="assets/images/vector/3.png" className="text-xs h-3 mt-[1px]" alt="" />
                                            <p className="text-xs">Room size: 30 m²/323 ft²</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <img src="assets/images/vector/w (3).png" className="text-xs h-3 mt-[1px]" alt="" />
                                            <p className="text-xs"> Non-smoking</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <img src="assets/images/vector/w (2).png" className="text-xs h-3 mt-[1px]" alt="" />
                                            <p className="text-xs"> Shower</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <img src="assets/images/vector/1.png" className="text-xs h-3 mt-[1px]" alt="" />
                                            <p className="text-xs">
                                                Balcony/terrace
                                            </p>
                                        </div>
                                        <div className="flex gap-2">
                                            <img src="assets/images/vector/2.png" className="text-xs h-3 mt-[1px]" alt="" />
                                            <p className="text-xs"> Partial sea view
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="basis-[85%] w-full">
                                    <div className="flex flex-col md:flex-row shadow">
                                        <div className="border-l border-b  border-gray-400 basis-[35%] ">

                                            <p className="bg-gray-100  p-2 rounded-sm  border-b border-gray-400 w-full">Benefits</p>
                                            <div className="p-2">
                                                <p className="bg-[#ff9c00] p-2 text-white text-sm">Lowest price available!</p>
                                                <p>Your price includes:</p>

                                                <div className="my-5">
                                                    <div className="flex gap-1 py-1">
                                                        <span className="text-green-300"><i className="fa-solid fa-check"></i></span>
                                                        <p className="text-xs ">
                                                            Breakfast incluted</p>
                                                    </div>
                                                    <div className="flex gap-1 py-1">
                                                        <span className="text-green-300"><i className="fa-solid fa-check"></i></span>
                                                        <div>
                                                            <p className="text-xs ">
                                                                Parking, Coffee & tea, Express check-in,<br />
                                                                Free WiFi, Drinking water</p>
                                                        </div>

                                                    </div>
                                                    <div className="flex gap-1 py-1">
                                                        <span className="text-green-300"><i className="fa-solid fa-check"></i></span>
                                                        <p className="text-xs ">
                                                            Free cancellation before July 24, 2022</p>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>

                                        <div className="border-l border-b border-gray-400 basis-[10%] text-center">
                                            <p className="bg-gray-100   p-2 rounded-sm  border-b border-gray-400 w-full">Guests</p>
                                            <div className="flex justify-center items-center text-center p-2">
                                                <img src="assets/images/vector/4.png" className="h-5  " alt="" />
                                            </div>

                                        </div>
                                        <div className="border-l border-b border-gray-400 basis-[20%] text-center">
                                            <p className="bg-gray-100  p-2 rounded-sm  border-b border-gray-400 w-full">Price per night</p>

                                            <div className="text-center">
                                                <del>BDT 7906</del>
                                                <h1 className="font-bold">BDT 5821</h1>
                                                <p className="text-xs  md:text-right bg-red-500 md:ml-16 mt-5 text-white">SAVE 40% TODAY</p>
                                            </div>

                                        </div>

                                        <div className="border-l border-b border-r-0 border-gray-400 basis-[15%]">
                                            <p className="bg-gray-100  p-2 rounded-sm border-b border-gray-400 w-full text-center md:text-right">Most
                                                Booked</p>
                                            <div className="flex items-center justify-center py-8">
                                                <p className="bg-gray-300 rounded-sm p-1 text-center w-10 h-8">1</p>

                                            </div>
                                        </div>
                                        <div className="border-r border-b border-gray-400 basis-[20%] relative">
                                            <p className="bg-gray-100  p-5 rounded-sm  border-b border-gray-400 w-full"></p>
                                            <div className="flex justify-center p-10 border-l border-gray-400">

                                                <div className=" p-3 space-y-10">
                                                    <div className="bg-[#4b81fb] p-3 text-white px-8 rounded-sm border border-[#4b81fb]">
                                                        <Link to="/order-confirm">Reserve</Link>
                                                    </div>
                                                    <div className="border p-3 text-center text-white  rounded-sm border-[#4b81fb]">
                                                        <a href="" className="text-[#4b81fb]">Add To Cart</a>
                                                    </div>
                                                    <div className="bg-[#e8fbe6] p-1 text-center text-white  rounded-sm ">
                                                        <p className="font-semibold text-green-400">No Risk</p>
                                                        <a href="" className="text-xs text-teal-300">No Cancellation fee!</a>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    <div className="flex flex-col md:flex-row mt-5 shadow">
                                        <div className="border-l border-t border-gray-400 basis-[35%] ">

                                            <div className="p-2">
                                                <p className="bg-[#ff9c00] p-2 text-white text-sm">Lowest price available!</p>
                                                <p>Your price includes:</p>

                                                <div className="my-5">
                                                    <div className="flex gap-1 py-1">
                                                        <span className="text-green-300"><i className="fa-solid fa-check"></i></span>
                                                        <p className="text-xs ">
                                                            Breakfast incluted</p>
                                                    </div>
                                                    <div className="flex gap-1 py-1">
                                                        <span className="text-green-300"><i className="fa-solid fa-check"></i></span>
                                                        <div>
                                                            <p className="text-xs ">
                                                                Parking, Coffee & tea, Express check-in,<br />
                                                                Free WiFi, Drinking water</p>
                                                        </div>

                                                    </div>
                                                    <div className="flex gap-1 py-1">
                                                        <span className="text-green-300"><i className="fa-solid fa-check"></i></span>
                                                        <p className="text-xs ">
                                                            Free cancellation before July 24, 2022</p>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>

                                        <div className="border-l border-t border-gray-400 basis-[10%]">
                                            <div className="flex justify-center items-center text-center p-2">
                                                <img src="assets/images/vector/4.png" className="h-5" alt="" />
                                            </div>

                                        </div>
                                        <div className="border-l border-t border-gray-400 basis-[20%] text-center">

                                            <div className="text-center">
                                                <del>BDT 7906</del>
                                                <h1 className="font-bold">BDT 5821</h1>
                                                <p className="text-xs md:text-right bg-red-500 md:ml-16 mt-5 text-white">SAVE 40% TODAY</p>
                                            </div>

                                        </div>

                                        <div className="border-l border-t border-r-0 border-gray-400 basis-[15%]">

                                            <div className="flex items-center justify-center py-8">
                                                <p className="bg-gray-300 rounded-sm p-1 text-center w-10 h-8">1</p>

                                            </div>
                                        </div>
                                        <div className="border-r border-t  border-gray-400 basis-[20%] relative">
                                            <div className="flex justify-center p-10 border-l border-gray-400">

                                                <div className=" p-3 space-y-10">
                                                    <div className="bg-[#4b81fb] p-3 text-white px-8 rounded-sm border border-[#4b81fb]">
                                                        <Link to="/order-confirm">Reserve</Link>
                                                    </div>
                                                    <div className="border p-3 text-center text-white  rounded-sm border-[#4b81fb]">
                                                        <a href="" className="text-[#4b81fb]">Add To Cart</a>
                                                    </div>
                                                    <div className="bg-[#e8fbe6] p-1 text-center text-white  rounded-sm ">
                                                        <p className="font-semibold text-green-400">No Risk</p>
                                                        <a href="" className="text-xs text-teal-300">No Cancellation fee!</a>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-200 p-2 mt-5">
                            <div className="grid md:grid-cols-2">
                                <div className="grid md:grid-cols-2 gap-10 md:border-r border-gray-700">
                                    <img src="assets/images/room/1.png" className="w-full" alt="" />
                                    <div className="md:mt-20 text-left" >
                                        <h1 className="font-semibold text-lg">Double Twin </h1>
                                        <p className="text-pink-600">Last booked 3 hours ago</p>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row mt-4 md:p-3">
                                    <p
                                        className=" flex basis-[30%] text-center justify-center items-center border-pink-600 border-2 text-pink-600 w-full md:mx-5 md:py-0 py-3 md:my-12">
                                        Sold
                                        out</p>
                                    <p className="p-5 basis-[70%] md:mt-10">This property is in high demand - book an available room while you can.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Palm sea view Family */}
                        <div className=" mt-5 ">
                            <h2 className="py-3 font-semibold text-gray-700 border border-gray-400 pl-5">Palm sea view Family</h2>

                            <div className="flex flex-col md:flex-row md:border-l border  md:border-b border-gray-400">
                                <div className="basis-[15%] w-full p-2">
                                    <img src="assets/images/room/1.png" className="w-full" alt="" />

                                    <div className="grid grid-cols-2 gap-1 mt-1 mb-2 md:mb-0">
                                        <img src="assets/images/room/1.png" className="" alt="" />
                                        <img src="assets/images/room/1.png" className="" alt="" />
                                    </div>
                                    <p className="text-xs text-green-300 text-center">Room photos & details</p>

                                    <div className="my-2">
                                        <div className="flex gap-2">
                                            <img src="assets/images/vector/w (1).png" className="text-xs h-3 mt-[1px]" alt="" />
                                            <p className="text-xs">Free Wi-Fi</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <img src="assets/images/vector/w (4).png" className="text-xs h-3 mt-[1px]" alt="" />
                                            <p className="text-xs">
                                                2 queen beds
                                            </p>
                                        </div>
                                        <div className="flex gap-2">
                                            <img src="assets/images/vector/3.png" className="text-xs h-3 mt-[1px]" alt="" />
                                            <p className="text-xs">Room size: 30 m²/323 ft²</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <img src="assets/images/vector/w (3).png" className="text-xs h-3 mt-[1px]" alt="" />
                                            <p className="text-xs"> Non-smoking</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <img src="assets/images/vector/w (2).png" className="text-xs h-3 mt-[1px]" alt="" />
                                            <p className="text-xs"> Shower</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <img src="assets/images/vector/1.png" className="text-xs h-3 mt-[1px]" alt="" />
                                            <p className="text-xs">
                                                Balcony/terrace
                                            </p>
                                        </div>
                                        <div className="flex gap-2">
                                            <img src="assets/images/vector/2.png" className="text-xs h-3 mt-[1px]" alt="" />
                                            <p className="text-xs"> Partial sea view
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="basis-[85%] w-full">
                                    <div className="flex flex-col md:flex-row shadow">
                                        <div className="border-l border-b  border-gray-400 basis-[35%] ">

                                            <p className="bg-gray-100  p-2 rounded-sm  border-b border-gray-400 w-full">Benefits</p>
                                            <div className="p-2">
                                                <p className="bg-[#ff9c00] p-2 text-white text-sm">Lowest price available!</p>
                                                <p>Your price includes:</p>

                                                <div className="my-5">
                                                    <div className="flex gap-1 py-1">
                                                        <span className="text-green-300"><i className="fa-solid fa-check"></i></span>
                                                        <p className="text-xs ">
                                                            Breakfast incluted</p>
                                                    </div>
                                                    <div className="flex gap-1 py-1">
                                                        <span className="text-green-300"><i className="fa-solid fa-check"></i></span>
                                                        <div>
                                                            <p className="text-xs ">
                                                                Parking, Coffee & tea, Express check-in,<br />
                                                                Free WiFi, Drinking water</p>
                                                        </div>

                                                    </div>
                                                    <div className="flex gap-1 py-1">
                                                        <span className="text-green-300"><i className="fa-solid fa-check"></i></span>
                                                        <p className="text-xs ">
                                                            Free cancellation before July 24, 2022</p>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>

                                        <div className="border-l border-b border-gray-400 basis-[10%] text-center">
                                            <p className="bg-gray-100   p-2 rounded-sm  border-b border-gray-400 w-full">Guests</p>
                                            <div className="flex justify-center items-center text-center p-2">
                                                <img src="assets/images/vector/4.png" className="h-5  " alt="" />
                                            </div>

                                        </div>
                                        <div className="border-l border-b border-gray-400 basis-[20%] text-center">
                                            <p className="bg-gray-100  p-2 rounded-sm  border-b border-gray-400 w-full">Price per night</p>

                                            <div className="text-center">
                                                <del>BDT 7906</del>
                                                <h1 className="font-bold">BDT 5821</h1>
                                                <p className="text-xs  md:text-right bg-red-500 md:ml-16 mt-5 text-white">SAVE 40% TODAY</p>
                                            </div>

                                        </div>

                                        <div className="border-l border-b border-r-0 border-gray-400 basis-[15%]">
                                            <p className="bg-gray-100  p-2 rounded-sm border-b border-gray-400 w-full text-center md:text-right">Most
                                                Booked</p>
                                            <div className="flex items-center justify-center py-8">
                                                <p className="bg-gray-300 rounded-sm p-1 text-center w-10 h-8">1</p>

                                            </div>
                                        </div>
                                        <div className="border-r border-b border-gray-400 basis-[20%] relative">
                                            <p className="bg-gray-100  p-5 rounded-sm  border-b border-gray-400 w-full"></p>
                                            <div className="flex justify-center p-10 border-l border-gray-400">

                                                <div className=" p-3 space-y-10">
                                                    <div className="bg-[#4b81fb] p-3 text-white px-8 rounded-sm border border-[#4b81fb]">
                                                        <Link to="/order-confirm">Reserve</Link>
                                                    </div>
                                                    <div className="border p-3 text-center text-white  rounded-sm border-[#4b81fb]">
                                                        <a href="" className="text-[#4b81fb]">Add To Cart</a>
                                                    </div>
                                                    <div className="bg-[#e8fbe6] p-1 text-center text-white  rounded-sm ">
                                                        <p className="font-semibold text-green-400">No Risk</p>
                                                        <a href="" className="text-xs text-teal-300">No Cancellation fee!</a>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    <div className="flex flex-col md:flex-row mt-5 shadow">
                                        <div className="border-l border-t border-gray-400 basis-[35%] ">

                                            <div className="p-2">
                                                <p className="bg-[#ff9c00] p-2 text-white text-sm">Lowest price available!</p>
                                                <p>Your price includes:</p>

                                                <div className="my-5">
                                                    <div className="flex gap-1 py-1">
                                                        <span className="text-green-300"><i className="fa-solid fa-check"></i></span>
                                                        <p className="text-xs ">
                                                            Breakfast incluted</p>
                                                    </div>
                                                    <div className="flex gap-1 py-1">
                                                        <span className="text-green-300"><i className="fa-solid fa-check"></i></span>
                                                        <div>
                                                            <p className="text-xs ">
                                                                Parking, Coffee & tea, Express check-in,<br />
                                                                Free WiFi, Drinking water</p>
                                                        </div>

                                                    </div>
                                                    <div className="flex gap-1 py-1">
                                                        <span className="text-green-300"><i className="fa-solid fa-check"></i></span>
                                                        <p className="text-xs ">
                                                            Free cancellation before July 24, 2022</p>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>

                                        <div className="border-l border-t border-gray-400 basis-[10%]">
                                            <div className="flex justify-center items-center text-center p-2">
                                                <img src="assets/images/vector/4.png" className="h-5" alt="" />
                                            </div>

                                        </div>
                                        <div className="border-l border-t border-gray-400 basis-[20%] text-center">

                                            <div className="text-center">
                                                <del>BDT 7906</del>
                                                <h1 className="font-bold">BDT 5821</h1>
                                                <p className="text-xs md:text-right bg-red-500 md:ml-16 mt-5 text-white">SAVE 40% TODAY</p>
                                            </div>

                                        </div>

                                        <div className="border-l border-t border-r-0 border-gray-400 basis-[15%]">

                                            <div className="flex items-center justify-center py-8">
                                                <p className="bg-gray-300 rounded-sm p-1 text-center w-10 h-8">1</p>

                                            </div>
                                        </div>
                                        <div className="border-r border-t  border-gray-400 basis-[20%] relative">
                                            <div className="flex justify-center p-10 border-l border-gray-400">

                                                <div className=" p-3 space-y-10">
                                                    <div className="bg-[#4b81fb] p-3 text-white px-8 rounded-sm border border-[#4b81fb]">
                                                        <Link to="/order-confirm">Reserve</Link>
                                                    </div>
                                                    <div className="border p-3 text-center text-white  rounded-sm border-[#4b81fb]">
                                                        <a href="" className="text-[#4b81fb]">Add To Cart</a>
                                                    </div>
                                                    <div className="bg-[#e8fbe6] p-1 text-center text-white  rounded-sm ">
                                                        <p className="font-semibold text-green-400">No Risk</p>
                                                        <a href="" className="text-xs text-teal-300">No Cancellation fee!</a>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 facilities-show hidden">
                        <h2 className="font-semibold text-lg py-5">Amenities and facilities</h2>
                        <div className="grid md:grid-cols-3 gap-5">
                            <div>
                                <h3 className="font-semibold">Internet Access</h3>
                                <div className="flex gap-2">
                                    <img src="assets/images/vector/w (1).png" className="text-xs h-3 mt-[1px]" alt="" />
                                    <p className="text-xs">Free wifi in all rooms</p>
                                </div>
                                <div className="flex gap-2">
                                    <img src="assets/images/vector/w (1).png" className="text-xs h-3 mt-[1px]" alt="" />
                                    <p className="text-xs">Wifi in public areas</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold py-5">Ways to relax</h3>
                                    <div className="flex gap-2">
                                        <img src="assets/images/vector/w (1).png" className="text-xs h-3 mt-[1px]" alt="" />
                                        <p className="text-xs">Garden</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <img src="assets/images/vector/w (1).png" className="text-xs h-3 mt-[1px]" alt="" />
                                        <p className="text-xs">Swimming pool</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-semibold">Cleanliness and safety

                                </h3>
                                <div className="flex gap-2">
                                    <img src="assets/images/vector/frame.png" className="text-xs h-3 mt-[1px]" alt="" />
                                    <p className="text-xs"> Anti-viral cleaning products
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <img src="assets/images/vector/frame.png" className="text-xs h-3 mt-[1px]" alt="" />
                                    <p className="text-xs">Temperature check for guests and staff</p>
                                </div>
                                <div className="flex gap-2">
                                    <img src="assets/images/vector/frame.png" className="text-xs h-3 mt-[1px]" alt="" />
                                    <p className="text-xs">Staff trained in safety protocol</p>
                                </div>
                                <div className="flex gap-2">
                                    <img src="assets/images/vector/frame.png" className="text-xs h-3 mt-[1px]" alt="" />
                                    <p className="text-xs"> Safe dining setup</p>
                                </div>
                                <div className="flex gap-2">
                                    <img src="assets/images/vector/frame.png" className="text-xs h-3 mt-[1px]" alt="" />
                                    <p className="text-xs"> Rooms sanitized between stays</p>
                                </div>
                                <div className="flex gap-2">
                                    <img src="assets/images/vector/frame.png" className="text-xs h-3 mt-[1px]" alt="" />
                                    <p className="text-xs"> Room sanitization opt-out available</p>
                                </div>
                                <div className="flex gap-2">
                                    <img src="assets/images/vector/frame.png" className="text-xs h-3 mt-[1px]" alt="" />
                                    <p className="text-xs">Physical distancing of at least 1 meter</p>
                                </div>
                                <div className="flex gap-2">
                                    <img src="assets/images/vector/frame.png" className="text-xs h-3 mt-[1px]" alt="" />
                                    <p className="text-xs">Hot water linen and laundry washing</p>
                                </div>
                                <div className="flex gap-2">
                                    <img src="assets/images/vector/frame.png" className="text-xs h-3 mt-[1px]" alt="" />
                                    <p className="text-xs">Hand sanitizer</p>
                                </div>
                                <div className="flex gap-2">
                                    <img src="assets/images/vector/frame.png" className="text-xs h-3 mt-[1px]" alt="" />
                                    <p className="text-xs">Guest rooms seal after sanitization</p>
                                </div>
                                <div className="flex gap-2">
                                    <img src="assets/images/vector/frame.png" className="text-xs h-3 mt-[1px]" alt="" />
                                    <p className="text-xs">Daily disinfection in common areas</p>
                                </div>
                                <div className="flex gap-2">
                                    <img src="assets/images/vector/frame.png" className="text-xs h-3 mt-[1px]" alt="" />
                                    <p className="text-xs">Daily disinfection in all rooms</p>
                                </div>
                                <div className="flex gap-2">
                                    <img src="assets/images/vector/frame.png" className="text-xs h-3 mt-[1px]" alt="" />
                                    <p className="text-xs">Body thermometer</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-semibold">Services and conveniences

                                </h3>
                                <div className="flex gap-2">
                                    <img src="assets/images/vector/frame.png" className="text-xs h-3 mt-[1px]" alt="" />
                                    <p className="text-xs"> Daily housekeeping
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <img src="assets/images/vector/frame.png" className="text-xs h-3 mt-[1px]" alt="" />
                                    <p className="text-xs">Elevator</p>
                                </div>
                                <div className="flex gap-2">
                                    <img src="assets/images/vector/frame.png" className="text-xs h-3 mt-[1px]" alt="" />
                                    <p className="text-xs">Laundry Service</p>
                                </div>
                                <div className="flex gap-2">
                                    <img src="assets/images/vector/frame.png" className="text-xs h-3 mt-[1px]" alt="" />
                                    <p className="text-xs"> Invoice provided</p>
                                </div>
                                <div className="flex gap-2">
                                    <img src="assets/images/vector/frame.png" className="text-xs h-3 mt-[1px]" alt="" />
                                    <p className="text-xs"> Smoking area</p>
                                </div>

                                <div className="mt-8">
                                    <h3 className="font-semibold">Services and conveniences
                                    </h3>
                                    <div className="flex gap-2">
                                        <img src="assets/images/vector/frame.png" className="text-xs h-3 mt-[1px]" alt="" />
                                        <p className="text-xs"> CCTV in common areas

                                        </p>
                                    </div>
                                    <div className="flex gap-2">
                                        <img src="assets/images/vector/frame.png" className="text-xs h-3 mt-[1px]" alt="" />
                                        <p className="text-xs">Fire extinguisher</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <img src="assets/images/vector/frame.png" className="text-xs h-3 mt-[1px]" alt="" />
                                        <p className="text-xs">Front desk [24-hour]</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <img src="assets/images/vector/frame.png" className="text-xs h-3 mt-[1px]" alt="" />
                                        <p className="text-xs"> Security [24-hour]</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <img src="assets/images/vector/frame.png" className="text-xs h-3 mt-[1px]" alt="" />
                                        <p className="text-xs"> Soundproof rooms</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RoomSelect;