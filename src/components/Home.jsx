import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "../common/Nav";
import MobileNav from "../common/MobileNav";




class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: ""
        }
    }

    handleClick = (event) => {
        event.preventDefault();
        window.location.href = "/destination-search";
    };

    hotelClick = (event) => {
        event.preventDefault();
        window.location.href = "/hotel-search";
    };

    vehicleClick = (event) => {
        event.preventDefault();
        window.location.href = "/vehicle-select";
    };

    render() {
        return (
            <div className="text-left">
                {/* Mobile Navbar */}
                <div className="flex md:hidden justify-between items-center text-center container mx-auto py-4 bg-white shadow px-5 p-2.5 sticky top-0 z-50">
                    <Link to="/"><img src="assets/images/logo.png" alt="" className="w-40" /></Link>
                    <Link className="bg-[#575757] px-4 p-1 rounded-sm text-gray-50" to="/singin">Login</Link>
                </div>
                {/* Mobile Navbar End*/}

                {/* Banner Section */}
                <nav className="h-full  bg-center bg-no-repeat" style={{ backgroundImage: "url(assets/images/banner.png)" }}>

                    {/* PC Header Navbar */}
                    <div className="hidden md:block">
                        <Nav
                            home="Home"
                            Explore="Explore"
                            Help="Help"
                        />
                    </div>

                    {/* Banner Text */}
                    <div className="container mx-auto py-5 md:mt-44 text-center text-white">
                        <h1 className="md:text-3xl text-2xl font-bold">Planning for your next trip?</h1>
                        <p className="md:text-lg text-sm md:flex-row flex flex-col justify-center">Thinking of travelling somewhere soon? <span>Here are some options to help.</span> </p>
                    </div>
                    {/* Banner Text End*/}


                    {/* Search Start */}
                    <div className=" w-full mx-auto md:px-24 container rounded-md text-slate-50 md:mt-16">
                        <div className="bg-[#54d1bb] px-5 mdpx:-20 p-4">
                            <ul className="flex  justify-between clear-left w-full">
                                <li
                                    className="font-medium destination cursor-pointer focus:bg-white focus:underline focus:underline-offset-8">
                                    <i className="fa-solid fa-location-dot text-pink-500"></i>
                                    <span className="ml-1">Destination</span>
                                </li>

                                <li className="font-medium hotel cursor-pointer"><i className="fa-solid fa-hotel text-pink-500"></i> <span>Hotel</span>
                                </li>
                                <li className="font-medium vehicle cursor-pointer ml-1"><i className="fa-solid fa-car-side text-pink-500"></i>
                                    <span>Vehicle</span>
                                </li>
                            </ul>
                        </div>

                        {/* Destination Search Start */}
                        <div className="bg-gray-50 shadow text-black px-10 py-2 mx-auto destination-list">
                            <form action="" className="bg-gray-50  mx-auto">
                                <div className="grid grid-cols-2 md:grid-cols-6 mx-auto text-left">
                                    <div className="border border-solid border-gray-400 p-2 md:rounded-l w-full">
                                        <label htmlFor="from" className="text-sm text-slate-500">From</label>
                                        <select className="js-example-basic-multiple bg-gray-200 w-full" name="state">
                                            <option className="w-full" value="">Dhaka</option>
                                            <option value="">Chattagram</option>
                                            <option value="">Sylhet</option>
                                        </select>
                                    </div>
                                    <div className="border border-l-0 border-solid border-gray-400 p-2 w-full">
                                        <label htmlFor="from" className="text-sm text-slate-500">To</label>
                                        <select name="state" className="js-example-basic-multiple bg-gray-200 w-full">
                                            <option value="">Chattagram</option>
                                            <option value="">CTG</option>
                                            <option value="">Sylhet</option>
                                        </select>
                                    </div>
                                    <div className="border  md:border-l-0 border-solid border-gray-400 p-2 w-full">
                                        <label htmlFor="from" className="text-sm text-slate-500">Trip</label>
                                        <select name="" className="bg-gray-200 js-example-basic-multiple w-full py-1">
                                            <option value="">Return</option>
                                            <option value="">One Way</option>
                                        </select>
                                    </div>
                                    <div className="border md:border-l-0 border-solid border-gray-400 p-2 w-full">
                                        <label htmlFor="from" className="text-sm text-slate-500 ">Journey To Date</label>
                                        <input type="text" value="06/07/2022"
                                            className="datepicker px-4 py-[1px] focus:outline-none placeholder:text-sm border rounded-md w-full date" />
                                    </div>

                                    <div className="border md:border-l-0 border-solid border-gray-400 p-2 w-full">
                                        <label htmlFor="from" className="text-sm text-slate-500">Return Date</label>
                                        <input type="text" id="datepicker2" value="06/07/2022"
                                            className="datepicker px-4 py-[1px] focus:outline-none placeholder:text-sm border rounded-md w-full date" />
                                    </div>
                                    <div className="border border-l-0 border-solid border-gray-400 p-2 w-full md:rounded-r-lg">
                                        <label htmlFor="from" className=" text-sm text-slate-500 ">Traveler</label>
                                        <br />
                                        <select name="" className="bg-gray-200 js-example-basic-multiple w-full py-1">
                                            <option value="">3 Traveler</option>
                                            <option value="">4 Traveler</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex justify-center">

                                    <input type="button" value="Search"
                                        onClick={this.handleClick}
                                        className="bg-[#00294d] text-slate-50 p-1 px-14 rounded-lg text-lg font-medium cursor-pointer" />
                                </div>

                            </form>
                        </div>
                        {/* Destination Search End */}

                        {/* Hotel Search Start*/}
                        <div className="bg-gray-50 shadow-2xl text-black px-10 py-2 mx-auto hidden hotel-list text-left">
                            <form action="" className="bg-gray-50 ">
                                <div className="grid md:grid-cols-4 grid-cols-2">
                                    <div className="border border-solid border-gray-400 p-2 md:rounded-l-lg">
                                        <label htmlFor="from" className="text-sm text-slate-500">Hotel/Resort/Area</label> <br />
                                        <select className="js-example-basic-multiple bg-gray-200 w-full" name="state">
                                            <option value="">Chattogram</option>
                                            <option value="">Dhaka</option>
                                            <option value="">Sylhet</option>
                                        </select>
                                    </div>

                                    <div className="border border-l-0 border-solid border-gray-400 p-2 ">
                                        <label htmlFor="from" className="text-sm text-slate-500 ">Check in</label> <br />
                                        <input type="text" value="06/07/2022"
                                            className="datepicker px-4 py-[1px] focus:outline-none placeholder:text-sm border rounded-md w-full date cursor-pointer" />
                                    </div>

                                    <div className="border md:border-l-0 border-solid border-gray-400 p-2  ">
                                        <label htmlFor="from" className="text-sm text-slate-500">Check out</label> <br />
                                        <input type="text" value="06/07/2022"
                                            className="datepicker px-4 py-[1px] focus:outline-none placeholder:text-sm border rounded-md w-full date" />
                                    </div>
                                    <div className="border border-l-0 border-solid border-gray-400 p-2   md:rounded-r-lg">
                                        <label htmlFor="from" className=" text-sm text-slate-500 ">Guests</label>
                                        <br />
                                        <select name="" className="bg-gray-200 js-example-basic-multiple w-full py-1">
                                            <option value="">3 Guests</option>
                                            <option value="">4 Traveler</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <input type="button" value="Search" onClick={this.hotelClick}
                                        className="bg-[#00294d] text-slate-50 p-1 px-14 rounded-lg text-lg font-medium" />
                                </div>

                            </form>
                        </div>
                        {/* Hotel Search End*/}

                        {/* Vehicle Search Start*/}
                        <div className="bg-gray-50 shadow-2xl text-black px-10 py-2 mx-auto hidden vehicle-list text-left ">
                            <form action="" className="bg-gray-50 ">
                                <div className="grid md:grid-cols-4 grid-cols-2">
                                    <div className="border border-solid border-gray-400 p-2 md:rounded-l-lg ">
                                        <label htmlFor="from" className="text-sm text-slate-500">From</label> <br />
                                        <select className="js-example-basic-multiple bg-gray-200 w-full" name="state">
                                            <option value="">Dhaka</option>
                                            <option value="">Chattagram</option>
                                            <option value="">Sylhet</option>
                                        </select>
                                    </div>
                                    <div className="border border-l-0 border-solid border-gray-400 p-2  ">
                                        <label htmlFor="from" className="text-sm text-slate-500">To</label> <br />
                                        <select name="state" className="js-example-basic-multiple bg-gray-200 w-full">
                                            <option value="">Chattagram</option>
                                            <option value="">CTG</option>
                                            <option value="">Sylhet</option>
                                        </select>
                                    </div>


                                    <div className="border md:border-l-0 border-solid border-gray-400 p-2  ">
                                        <label htmlFor="from" className="text-sm text-slate-500">Journey By Date</label> <br />
                                        <input type="text" id="datepicker2" value="06/07/2022"
                                            className="datepicker px-4 py-[1px] focus:outline-none placeholder:text-sm border rounded-md w-full date" />
                                    </div>
                                    <div className="border border-l-0 border-solid border-gray-400 p-2   md:rounded-r-lg">
                                        <label htmlFor="from" className=" text-sm text-slate-500 ">Vehicle Type</label>
                                        <br />
                                        <select name="" className="bg-gray-200 js-example-basic-multiple w-full py-1">
                                            <option value="">3 Traveler</option>
                                            <option value="">4 Traveler</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <input type="button" value="Search" onClick={this.vehicleClick}
                                        className="bg-[#00294d] text-slate-50 p-1 px-14 rounded-lg text-lg font-medium cursor-pointer" />
                                </div>

                            </form>
                        </div>
                        {/* Vehicle Search End*/}
                    </div>
                    {/* Search End */}
                </nav>
                {/* Banner Section End*/}

                <div className="container mx-auto py-10">
                    <img src="assets/images/home.png" alt="" srcSet="" />
                </div>


                <div className="container">
                    <div className="grid md:grid-cols-2 md:py-5 md:gap-32">
                        <div>
                            <h2 className="py-2  texl-3xl font-semibold text-[#00294d] text-left"> Find Great Tourist places Right Here</h2>
                            <p className="text-justify mb-5 text-slate-900">Dummy text ever since the 1500s, when an unknown printer
                                took. A
                                galley of
                                type
                                and scrambled it to
                                make a type specimen book. It has survived not only five centuries. Dummy text ever since the 1500s,
                                when an unknown printer took. A galley of type.</p>
                            <a href="" className="bg-[#00294d] text-slate-100 p-2 mt-5 text-sm rounded-sm md:w-1/3 flex justify-center text-center">JOIN ADVENTURE</a>
                        </div>
                        <div className="py-2 md:py-0">
                            <h2 className="py-2 texl-3xl font-semibold text-[#00294d text-left"> Find Great Tourist places Right
                                Here</h2>
                            <p className="text-justify text-slate-900">Dummy text ever since the 1500s, when an unknown printer took. A
                                galley of type
                                and scrambled it to
                                make a type specimen book. It has survived not only five centuries. Dummy text ever since the 1500s,
                                when an unknown printer took. A galley of type.</p>
                        </div>

                    </div>
                </div>


                {/* Categories Section */}
                <section id="categories" className="mt-12">
                    <div className="container mx-auto">
                        <h2 className="font-medium my-5 text-left text-4xl">Browse Categories</h2>

                        <div className="grid md:grid-cols-4 grid-cols-2 gap-2 items-center text-center  pl-4 md:pl-0">
                            <div
                                className="transition basis-[45%] md:basis-[10.93%] bg-[#a9e8dd] md:py-3 cursor-pointer rounded mr-3 md:p-2.5 shadow-md hover:opacity-75 group hover:-translate-y-2">
                                <div className=" rounded-full m-0 mx-auto   md:h-36 md:p-2.5 scale-90 group-hover:scale-125">
                                    <img src="assets/images/TravelIcons/02.png" alt="" />
                                </div>
                                <h4 className="mt-4 md:mb-2 font-medium">
                                    Explore your Favourite destinations

                                </h4>

                            </div>

                            <div
                                className="transition basis-[45%] md:basis-[10.93%] bg-[#a9e8dd] cursor-pointer rounded shadow-md mr-3 p-5 hover:opacity-75 group hover:-translate-y-2 ">
                                <div className=" rounded-full m-0 mx-auto  md:h-32 p-2.5 scale-90 group-hover:scale-125">
                                    <img src="assets/images/TravelIcons/01.png" alt="" />
                                </div>
                                <h4 className="mt-4 mb-2 font-medium">
                                    Tour Packages
                                </h4>

                            </div>

                            <div
                                className="transition basis-[45%] md:basis-[10.93%] bg-[#a9e8dd] cursor-pointer rounded shadow-md mr-3 py-2 md:p-5 hover:opacity-75 group hover:-translate-y-2 ">
                                <div className=" rounded-full m-0 mx-auto  md:h-32 p-2.5 scale-90 group-hover:scale-125">
                                    <img src="assets/images/TravelIcons/03.png" alt="" />
                                </div>
                                <h4 className="mt-4 mb-2 font-medium">
                                    Travel Requirements
                                </h4>

                            </div>

                            <div
                                className="transition basis-[45%] md:basis-[10.93%] bg-[#a9e8dd] cursor-pointer rounded shadow-md mr-3 p-5 hover:opacity-75 group hover:-translate-y-2 ">
                                <div className=" rounded-full m-0 mx-auto  md:h-32 p-2.5 scale-90 group-hover:scale-125">
                                    <img src="assets/images/TravelIcons/04.png" alt="" />
                                </div>
                                <h4 className="mt-4 mb-2 font-medium">
                                    Offer Packages
                                </h4>

                            </div>


                        </div>
                    </div>
                </section>
                {/* Categories Section End*/}


                {/* Most Popular Hotels & Resorts */}

                <div className="container pb-10">
                    <section id="courses" className="mt-12">
                        <div className="container mx-auto">
                            <div className="flex justify-between">
                                <h1 className="md:text-2xl text-xs text-pink-600 md:text-center font-semibold py-2 md:py-3">Most Popular Hotels & Resorts</h1>
                                <div>
                                    <a href=""
                                        className="transition bg-white py-2 px-6 text-sm border rounded hover:bg-red-500 text-slate-900 hover:text-white">
                                        View More
                                    </a>
                                </div>
                            </div>

                            <div id="popular-course" className="bg-[#ddeef4] py-10">
                                <div className="course-item group">
                                    <div
                                        className="border border-gray-100 shadow-sm rounded mr-3 transition hover:shadow-md group-hover:opacity-75 bg-white">
                                        <img src="assets/images/popular/popular_hotel (1).png" alt=""
                                            className="w-full rounded rounded-b-none" />
                                        <div className="mt-3 p-3">


                                            <div className=" mb-4 text-xs">
                                                <h1 className="text-lg text-gray-900 font-medium">Sayeman Beach Resort</h1>
                                                <h2 className="text-sm text-gray-600  font-sm">
                                                    Marine Drive Road,Kolatali,Cox's Bazar
                                                </h2>

                                                <div className="flex justify-between mt-4">
                                                    <div>
                                                        <span className="bg-[#54d1bb] text-slate-50 p-1 rounded text-sm">
                                                            4.4/5
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="text-green-600">
                                                            Average
                                                        </span>
                                                        <span className="text-[11px]">(30 reviews)</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex mt-5">
                                                        <span className="mr-10 ">Form</span>

                                                        <div className="flex text-[#54d1bb] -ml-9">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                                                viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                                    d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg><span className="text-sm">8999.00</span>
                                                        </div>


                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>Per Night</span>
                                                        <p>See Details</p>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="course-item group">
                                    <div
                                        className="border border-gray-100 shadow-sm rounded mr-3 transition hover:shadow-md group-hover:opacity-75 bg-white">
                                        <img src="assets/images/popular/popular_hotel (2).png" alt=""
                                            className="w-full rounded rounded-b-none" />
                                        <div className="mt-3 p-3">


                                            <div className=" mb-4 text-xs">
                                                <h1 className="text-lg text-gray-900 font-medium">Dusai Resort & Spa</h1>
                                                <h2 className="text-sm text-gray-600  font-sm">
                                                    Niteshwer,
                                                    Giasnagar, Moulavibaza Bazar
                                                </h2>

                                                <div className="flex justify-between mt-4">
                                                    <div>
                                                        <span className="bg-[#54d1bb] text-slate-50 p-1 rounded text-sm">
                                                            4.4/5
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="text-green-600">
                                                            Average
                                                        </span>
                                                        <span className="text-[11px]">(30 reviews)</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex mt-5">
                                                        <span className="mr-10 ">Form</span>

                                                        <div className="flex text-[#54d1bb] -ml-9">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                                                viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                                    d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg><span className="text-sm">8999.00</span>
                                                        </div>


                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>Per Night</span>
                                                        <p>See Details</p>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="course-item group">
                                    <div
                                        className="border border-gray-100 shadow-sm rounded mr-3 transition hover:shadow-md group-hover:opacity-75 bg-white">
                                        <img src="assets/images/popular/popular_hotel (3).png" alt=""
                                            className="w-full rounded rounded-b-none" />
                                        <div className="mt-3 p-3">


                                            <div className=" mb-4 text-xs">
                                                <h1 className="text-lg text-gray-900 font-medium">Sarah Resort </h1>
                                                <h2 className="text-sm text-gray-600  font-sm">
                                                    Rajabari, Rajendrapur,
                                                    Sreepur, Gazipur
                                                </h2>

                                                <div className="flex justify-between mt-4">
                                                    <div>
                                                        <span className="bg-[#54d1bb] text-slate-50 p-1 rounded text-sm">
                                                            4.4/5
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="text-green-600">
                                                            Average
                                                        </span>
                                                        <span className="text-[11px]">(30 reviews)</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex mt-5">
                                                        <span className="mr-10 ">Form</span>

                                                        <div className="flex text-[#54d1bb] -ml-9">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                                                viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                                    d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg><span className="text-sm">8999.00</span>
                                                        </div>


                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>Per Night</span>
                                                        <p>See Details</p>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="course-item group">
                                    <div
                                        className="border border-gray-100 shadow-sm rounded mr-3 transition hover:shadow-md group-hover:opacity-75 bg-white">
                                        <img src="assets/images/popular/popular_hotel (1).png" alt=""
                                            className="w-full rounded rounded-b-none" />
                                        <div className="mt-3 p-3">


                                            <div className=" mb-4 text-xs">
                                                <h1 className="text-lg text-gray-900 font-medium">Sayeman Beach Resort</h1>
                                                <h2 className="text-sm text-gray-600  font-sm">
                                                    Marine Drive Road,Kolatali,Cox's Bazar
                                                </h2>

                                                <div className="flex justify-between mt-4">
                                                    <div>
                                                        <span className="bg-[#54d1bb] text-slate-50 p-1 rounded text-sm">
                                                            4.4/5
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="text-green-600">
                                                            Average
                                                        </span>
                                                        <span className="text-[11px]">(30 reviews)</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex mt-5">
                                                        <span className="mr-10 ">Form</span>

                                                        <div className="flex text-[#54d1bb] -ml-9">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                                                viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                                    d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg><span className="text-sm">8999.00</span>
                                                        </div>


                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>Per Night</span>
                                                        <p>See Details</p>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="course-item group">
                                    <div
                                        className="border border-gray-100 shadow-sm rounded mr-3 transition hover:shadow-md group-hover:opacity-75 bg-white">
                                        <img src="assets/images/popular/popular_hotel (1).png" alt=""
                                            className="w-full rounded rounded-b-none" />
                                        <div className="mt-3 p-3">


                                            <div className=" mb-4 text-xs">
                                                <h1 className="text-lg text-gray-900 font-medium">Sayeman Beach Resort</h1>
                                                <h2 className="text-sm text-gray-600  font-sm">
                                                    Marine Drive Road,Kolatali,Cox's Bazar
                                                </h2>

                                                <div className="flex justify-between mt-4">
                                                    <div>
                                                        <span className="bg-[#54d1bb] text-slate-50 p-1 rounded text-sm">
                                                            4.4/5
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="text-green-600">
                                                            Average
                                                        </span>
                                                        <span className="text-[11px]">(30 reviews)</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex mt-5">
                                                        <span className="mr-10 ">Form</span>

                                                        <div className="flex text-[#54d1bb] -ml-9">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                                                viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                                    d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg><span className="text-sm">8999.00</span>
                                                        </div>


                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>Per Night</span>
                                                        <p>See Details</p>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
                {/* Most Popular Hotels & Resorts End*/}

                <div className="container pb-10">
                    <section id="courses" className="mt-12">
                        <div className="container mx-auto">
                            <div className="flex justify-between">
                                <h1 className="md:text-2xl text-sm text-pink-600 text-center font-semibold py-2 md:py-3">Recommended Cars for Rentals</h1>
                                <div>
                                    <a href="courses.html"
                                        className="transition bg-white py-2 px-6 text-sm border rounded hover:bg-red-500 text-slate-900 hover:text-white">
                                        View More
                                    </a>
                                </div>
                            </div>

                            <div id="car" className="bg-[#ddeef4] py-10">
                                <div className="course-item group">
                                    <div
                                        className="border border-gray-100 shadow-sm rounded mr-3 transition hover:shadow-md group-hover:opacity-75 bg-white">
                                        <img src="assets/images/car/pngegg (1) 1.png" alt="" className="w-full rounded rounded-b-none" />
                                        <div className="mt-3 p-3">


                                            <div className=" mb-4 text-xs">
                                                <h1 className="text-lg text-gray-900 font-medium">Toyota Corolla or similar </h1>


                                                <div className="flex justify-between mt-4">
                                                    <div>
                                                        <span className="bg-[#54d1bb] text-slate-50 p-1 rounded text-sm">
                                                            4.4/5
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="text-green-600">
                                                            Average
                                                        </span>
                                                        <span className="text-[11px]">(30 reviews)</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex mt-5">
                                                        <span className="mr-10 ">Form</span>

                                                        <div className="flex text-[#54d1bb] -ml-9">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                                                viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                                    d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg><span className="text-sm">8999.00</span>
                                                        </div>


                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>Per Night</span>
                                                        <p>See Details</p>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="course-item group">
                                    <div
                                        className="border border-gray-100 shadow-sm rounded mr-3 transition hover:shadow-md group-hover:opacity-75 bg-white">
                                        <img src="assets/images/car/pngegg 1.png" alt="" className="w-full rounded rounded-b-none" />
                                        <div className="mt-3 p-3">
                                            <div className=" mb-4 text-xs">
                                                <h1 className="text-lg text-gray-900 font-medium">Seat Alhambra or similar </h1>
                                                <div className="flex justify-between mt-4">
                                                    <div>
                                                        <span className="bg-[#54d1bb] text-slate-50 p-1 rounded text-sm">
                                                            4.4/5
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="text-green-600">
                                                            Average
                                                        </span>
                                                        <span className="text-[11px]">(30 reviews)</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex mt-5">
                                                        <span className="mr-10 ">Form</span>

                                                        <div className="flex text-[#54d1bb] -ml-9">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                                                viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                                    d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg><span className="text-sm">8999.00</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>Per Night</span>
                                                        <p>See Details</p>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="course-item group">
                                    <div
                                        className="border border-gray-100 shadow-sm rounded mr-3 transition hover:shadow-md group-hover:opacity-75 bg-white">
                                        <img src="assets/images/car/Toyota Haice 1.png" alt="" className="w-full rounded rounded-b-none" />
                                        <div className="mt-3 p-3">


                                            <div className=" mb-4 text-xs">
                                                <h1 className="text-lg text-gray-900 font-medium">Toyota Hiace </h1>


                                                <div className="flex justify-between mt-4">
                                                    <div>
                                                        <span className="bg-[#54d1bb] text-slate-50 p-1 rounded text-sm">
                                                            4.4/5
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="text-green-600">
                                                            Average
                                                        </span>
                                                        <span className="text-[11px]">(30 reviews)</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex mt-5">
                                                        <span className="mr-10 ">Form</span>

                                                        <div className="flex text-[#54d1bb] -ml-9">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                                                viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                                    d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg><span className="text-sm">8999.00</span>
                                                        </div>


                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>Per Night</span>
                                                        <p>See Details</p>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="course-item group">
                                    <div
                                        className="border border-gray-100 shadow-sm rounded mr-3 transition hover:shadow-md group-hover:opacity-75 bg-white">
                                        <img src="assets/images/car/Toyota Haice 1.png" alt="" className="w-full rounded rounded-b-none" />
                                        <div className="mt-3 p-3">


                                            <div className=" mb-4 text-xs">
                                                <h1 className="text-lg text-gray-900 font-medium">Toyota Hiace</h1>


                                                <div className="flex justify-between mt-4">
                                                    <div>
                                                        <span className="bg-[#54d1bb] text-slate-50 p-1 rounded text-sm">
                                                            4.4/5
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="text-green-600">
                                                            Average
                                                        </span>
                                                        <span className="text-[11px]">(30 reviews)</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex mt-5">
                                                        <span className="mr-10 ">Form</span>

                                                        <div className="flex text-[#54d1bb] -ml-9">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                                                viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                                    d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg><span className="text-sm">8999.00</span>
                                                        </div>


                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>Per Night</span>
                                                        <p>See Details</p>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="course-item group">
                                    <div
                                        className="border border-gray-100 shadow-sm rounded mr-3 transition hover:shadow-md group-hover:opacity-75 bg-white">
                                        <img src="assets/images/car/Toyota Haice 2.png" alt="" className="w-full rounded rounded-b-none" />
                                        <div className="mt-3 p-3">


                                            <div className=" mb-4 text-xs">
                                                <h1 className="text-lg text-gray-900 font-medium">Toyota Hiace</h1>


                                                <div className="flex justify-between mt-4">
                                                    <div>
                                                        <span className="bg-[#54d1bb] text-slate-50 p-1 rounded text-sm">
                                                            4.4/5
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="text-green-600">
                                                            Average
                                                        </span>
                                                        <span className="text-[11px]">(30 reviews)</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex mt-5">
                                                        <span className="mr-10 ">Form</span>

                                                        <div className="flex text-[#54d1bb] -ml-9">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                                                viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                                    d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg><span className="text-sm">8999.00</span>
                                                        </div>


                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>Per Night</span>
                                                        <p>See Details</p>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>

                <div style={{ backgroundImage: "url(assets/images/nira.png)" }} className="w-full h-full py-10 bg-contain bg-no-repeat ">
                    <h1 className="md:py-[235px]  w-full text-white text-center md:text-3xl font-semibold ">Let us show you the country <br />
                        with the most popular destinations</h1>
                </div>

                <div className="container md:-mt-24">
                    <h1 className="md:text-4xl text-center font-medium text-[#7a003c]">Top visited places</h1>
                    <div className="grid md:grid-cols-3 gap-5 my-10 shadow-md">
                        <div className="grid gap-4">
                            <div className="relative">
                                <img src="assets/images/topplace/Rectangle 55.png" className="" alt="" />
                                <div>
                                    <p className="absolute top-3 right-3 rounded text-white text-sm shadow bg-[#f65f13] p-1 px-2">
                                        Rangamati
                                    </p>
                                    <p className="absolute bottom-10 text-2xl font-medium text-[#FDFBF9] left-5">Sajek Valley </p>
                                    <p className="text-sm absolute bottom-4 text-white left-5"> <span className="text-orange-500"><i
                                        className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i><i
                                            className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i> <i
                                                className="fa-solid fa-star-half-stroke"></i></span> (234 reviews)
                                    </p>
                                </div>


                            </div>

                            <div className="relative">
                                <img src="assets/images/topplace/Group 35 (1).png" className="" alt="" />
                                <div>
                                    <p className="absolute top-3 right-3 rounded text-white text-sm shadow bg-[#f65f13] p-1 px-2">
                                        Khagrachori
                                    </p>
                                    <p className="absolute bottom-10 text-2xl font-medium text-[#FDFBF9] left-5">Aronnak Holiday Resort
                                    </p>
                                    <p className="text-sm absolute bottom-4 text-white left-5"> <span className="text-orange-500"><i
                                        className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i><i
                                            className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i> <i
                                                className="fa-solid fa-star-half-stroke"></i></span> (234 reviews)
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div className="relative">
                                <img src="assets/images/topplace/278_003jpg 1.png" className="" alt="" />
                                <div>
                                    <p className="absolute top-3 right-3 rounded text-white text-sm shadow bg-[#f65f13] p-1 px-2">
                                        Rangamati
                                    </p>
                                    <p className="absolute bottom-10 text-2xl font-medium text-[#FDFBF9] left-5">Lake Shore Resort </p>
                                    <p className="text-sm absolute bottom-4 text-white left-5"> <span className="text-orange-500"><i
                                        className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i><i
                                            className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i> <i
                                                className="fa-solid fa-star-half-stroke"></i></span> (234 reviews)
                                    </p>
                                </div>
                            </div>
                            <div className="relative">
                                <img src="assets/images/topplace/Rectangle 56.png" className="" alt="" />
                                <div>
                                    <p className="absolute top-3 right-3 rounded text-white text-sm shadow bg-[#f65f13] p-1 px-2">
                                        Munshiganj
                                    </p>
                                    <p className="absolute bottom-10 text-2xl font-medium text-[#FDFBF9] left-5">Padma Resort </p>
                                    <p className="text-sm absolute bottom-4 text-white left-5"> <span className="text-orange-500"><i
                                        className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i><i
                                            className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i> <i
                                                className="fa-solid fa-star-half-stroke"></i></span> (234 reviews)
                                    </p>
                                </div>


                            </div>
                        </div>
                        <div className="relative">
                            <img src="assets/images/topplace/Group 35 (2).png" alt="" />
                            <div>
                                <p className="absolute top-3 right-3 rounded text-white text-sm shadow bg-[#f65f13] p-1 px-2">
                                    Munshiganj
                                </p>
                                <p className="absolute bottom-10 text-2xl font-medium text-[#FDFBF9] left-5">Padma Resort </p>
                                <p className="text-sm absolute bottom-4 text-white left-5"> <span className="text-orange-500"><i
                                    className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i><i
                                        className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i> <i
                                            className="fa-solid fa-star-half-stroke"></i></span> (234 reviews)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Home