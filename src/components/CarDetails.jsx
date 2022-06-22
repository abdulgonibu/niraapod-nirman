import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MobileNav from "../common/MobileNav";
import Nav from "../common/Nav";

class CarDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: ""
        }
    }


    handleClick = (event) => {
        event.preventDefault();
        window.location.href = "/order-confirm";
    };
    render() {
        return (
            <div>
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


                </div>
                <div className='container py-10'>
                    <div className='grid md:grid-cols-2'>
                        <div>
                            <div className='flex gap-1'>
                                <div className='basis-[80%]'>
                                    <img src="assets/images/car.png" className='w-full h-full' alt="" />
                                </div>

                                <div className='basis-[20%]'>
                                    <div className='grid gap-1 mt-1'>
                                        <img src="assets/images/car.png" className='h-24' alt="" />
                                        <img src="assets/images/car.png" className='h-24' alt="" />
                                        <img src="assets/images/car.png" className='h-24' alt="" />
                                    </div>

                                </div>
                            </div>

                            <div className="bg-gray-50 shadow-2xl text-black px-2  py-2 mx-auto  text-left">
                                <form action="" className="bg-gray-50 ">
                                    <div className="grid md:grid-cols-5 grid-cols-2">

                                        <div className="border border-solid border-gray-400 rounded-l ">
                                            <label htmlFor="from" className="text-xs text-slate-500 px-1">Journey Date</label> <br />
                                            <input type="text" value="06/07/22"
                                                className="datepicker px-4 py-[1px] focus:outline-none placeholder:text-xs placeholder:text-left border  w-full date cursor-pointer" />
                                        </div>

                                        <div className="border border-l-0 border-solid border-gray-400   ">
                                            <label htmlFor="from" className=" text-xs text-slate-500 px-1">Travellers</label>
                                            <br />
                                            <select name="" className="bg-gray-200 js-example-basic-multiple w-full ">
                                                <option value="">3 Guests</option>
                                                <option value="">4 Traveler</option>
                                            </select>
                                        </div>
                                        <div className="border border-t-0 md:border-t md:border-l-0 border-solid border-gray-400  ">
                                            <label htmlFor="from" className=" text-xs text-slate-500 px-1">Vehicle</label>
                                            <br />
                                            <select name="" className="bg-gray-200 js-example-basic-multiple w-full ">
                                                <option value="">Sedan Car</option>
                                                <option value="">Noah Micro Bus</option>
                                                <option value="">Hiace Micro Bus</option>
                                            </select>
                                        </div>

                                        <div className="border border-t-0 md:border-t border-l-0 border-solid border-gray-400  rounded-r  ">
                                            <label htmlFor="from" className=" text-xs text-slate-500 px-1">Total cost</label>
                                            <br />
                                            <select name="" className="bg-gray-200 js-example-basic-multiple w-full ">
                                                <option value="">BDT  2580</option>
                                                <option value="">BDT  2580</option>
                                            </select>
                                        </div>

                                        <div className="flex justify-center col-span-2 md:col-span-1 mt-2 md:mt-0 items-center text-center">

                                            <input type="button" value="Continue" onClick={this.handleClick}
                                                className="bg-[#f99746] ml-2 w-full py-2 md:py-4 text-slate-50 rounded" />

                                        </div>
                                    </div>


                                </form>
                            </div>
                        </div>

                        <div className='text-left px-10 mt-5'>
                            <h1 className='font-semibold'>Dhaka to Chattogram - One Way CAR Service
                            </h1>
                            <div className="flex gap-1 mt-2 text-gray-600">
                                <i class="fa-solid fa-location-dot  text-sm"></i>
                                <p className='text-sm'>Dhaka</p>
                            </div>
                            <h1 className='my-1 md:my-3 md:mt-0 text-sm mt-5'>Overview</h1>
                            <p className='text-xs text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <p className='mt-3 text-sm font-semibold'>Location</p>
                            <p className='text-xs'>Dhaka Metropoliton</p>
                            <div class=" ">

                                <div class="mt-5">
                                    <p>Include & Exclude</p>
                                    <div class="-space-y-2">
                                        <div class="flex gap-1 ">
                                            <span class="text-green-300"><i class="fa-solid fa-check text-sm"></i></span>
                                            <p class="text-xs ">
                                                Pick and drop service in a private vehicle</p>
                                        </div>
                                        <div class="flex gap-1 ">
                                            <span class="text-green-300"><i class="fa-solid fa-check text-sm"></i></span>
                                            <p class="text-xs ">
                                                Bridge Toll</p>
                                        </div>
                                        <div class="flex gap-1 ">
                                            <span class="text-green-300"><i class="fa-solid fa-check text-sm"></i></span>
                                            <p class="text-xs ">
                                                Bridge Toll</p>
                                        </div>
                                        <div class="flex gap-1 ">
                                            <span class="text-green-300"><i class="fa-solid fa-check text-sm"></i></span>
                                            <p class="text-xs ">
                                                Driver's meal cost</p>
                                        </div>
                                        <div class="flex gap-1 ">
                                            <span class="text-green-300"><i class="fa-solid fa-check text-sm"></i></span>
                                            <p class="text-xs ">
                                                Pick up from any location in Dhaka city</p>
                                        </div>
                                        <div class="flex gap-1 ">
                                            <span class="text-green-300"><i class="fa-solid fa-check text-sm"></i></span>
                                            <p class="text-xs ">
                                                from Dhaka to Chattogram.</p>


                                        </div>
                                        <div class="flex gap-2 ">
                                            <span class="text-red-500"><i class="fa-solid fa-xmark text-sm"></i></span>
                                            <p class="text-xs mt-1">
                                                Any kind of personal expenses.</p>
                                        </div>
                                        <div class="flex gap-2 ">
                                            <span class="text-red-500"><i class="fa-solid fa-xmark text-sm"></i></span>
                                            <p class="text-xs mt-1">
                                                Food / Meals / Drinking water for the Travelers</p>
                                        </div>
                                        <div class="flex gap-2 ">
                                            <span class="text-red-500"><i class="fa-solid fa-xmark text-sm"></i></span>
                                            <p class="text-xs mt-1">
                                                Anything that is not mentioned in the inclusion.</p>
                                        </div>


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

export default CarDetails;

