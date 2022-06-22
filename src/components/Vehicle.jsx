import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MobileNav from "../common/MobileNav";
import Nav from "../common/Nav";



class Vehicle extends Component {
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

                <div class="container py-16">
                    <div class="grid md:grid-cols-2 gap-5">
                        <div class="flex text-left gap-10 md:gap-5 md:border-r">
                            <img src="assets/images/vehicle/2.png" class="h-24" alt="" />
                            <div class="">
                                <h6 class="text-xs py-1">
                                    Departure
                                </h6>
                                <h4>Dhaka - Chattogram</h4>
                                <p>15 June 2022</p>
                            </div>
                        </div>
                        <div class="flex text-left gap-10 md:gap-5">
                            <img src="assets/images/vehicle/1.png" class="h-24" alt="" />
                            <div class="flex flex-col md:justify-between ">
                                <div class="text-left">
                                    <h6 class="text-xs py-1">
                                        Return
                                    </h6>
                                    <h4>Chattogram - Dhaka</h4>
                                    <p>18 June 2022</p>
                                </div>
                                <div class="md:ml-44 mt-5 text-center">
                                    <p class="bg-[#15db05] rounded p-2 text-sm text-white">Modify Search</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div></div>


                </div>
                <div class="container w-full text-center hidden md:block">
                    <table class="table-auto  border w-full">
                        <thead class="bg-gray-800 text-gray-100 text-sm">
                            <tr>
                                <th>Departing
                                    Time</th>
                                <th>Vehicle no</th>
                                <th>Starting point</th>
                                <th>Ending point</th>
                                <th>Route</th>
                                <th>Seats Available</th>
                                <th>Vehicle Type</th>
                                <th>AC/Non AC</th>
                                <th>Fare/person</th>
                            </tr>
                        </thead>
                        <tbody class="text-sm">
                            <tr>
                                <td>8.00 am </td>
                                <td>C1025</td>
                                <td>Arambag</td>
                                <td>CTG-BRTC-2 </td>
                                <td>Dhaka - Chattogram</td>
                                <td>06</td>
                                <td>Noah Micro Bus</td>
                                <td>Non AC</td>
                                <td> ৳ 2900</td>
                            </tr>
                            <tr>
                                <td>8.00 am </td>
                                <td>C1025</td>
                                <td>Arambag</td>
                                <td>CTG-BRTC-2 </td>
                                <td>Dhaka - Chattogram</td>
                                <td>06</td>
                                <td>Noah Micro Bus</td>
                                <td>Non AC</td>
                                <td> ৳ 2900</td>
                            </tr>
                            <tr>
                                <td>8.00 am </td>
                                <td>C1025</td>
                                <td>Arambag</td>
                                <td>CTG-BRTC-2 </td>
                                <td>Dhaka - Chattogram</td>
                                <td>06</td>
                                <td>Noah Micro Bus</td>
                                <td>Non AC</td>
                                <td> ৳ 2900</td>
                            </tr>
                            <tr>
                                <td>8.00 am </td>
                                <td>C1025</td>
                                <td>Arambag</td>
                                <td>CTG-BRTC-2 </td>
                                <td>Dhaka - Chattogram</td>
                                <td>06</td>
                                <td>Noah Micro Bus</td>
                                <td>Non AC</td>
                                <td> ৳ 2900</td>
                            </tr>
                            <tr>
                                <td>8.00 am </td>
                                <td>C1025</td>
                                <td>Arambag</td>
                                <td>CTG-BRTC-2 </td>
                                <td>Dhaka - Chattogram</td>
                                <td>06</td>
                                <td>Noah Micro Bus</td>
                                <td>Non AC</td>
                                <td> ৳ 2900</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

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
                            <h1 className=" my-2 text-gray-700 text-center font-semibold border-b-2 border-gray-400">Vehicle Type</h1>
                            <div className="grid text-gray-500 text-sm">
                                <div className="flex ">
                                    <input type="checkbox" className="font-thin mr-2 mt-1" name="" id="" /> <label for="">Sedan Car</label>

                                </div>
                                <div className="flex ">
                                    <input type="checkbox" className="font-thin mr-2 mt-1" name="" id="" /> <label for="">Noah Micro Bus</label>

                                </div>
                                <div className="flex ">
                                    <input type="checkbox" className="font-thin mr-2 mt-1" name="" id="" /> <label for="">Hiace Micro Bus</label>

                                </div>


                            </div>


                        </div>
                        <div className="px-5 py-5 text-gray-700 font-normal text-left">
                            <h1 className=" my-2 text-gray-700 text-center font-semibold border-b-2 border-gray-400">Rating</h1>
                            <div className="grid text-gray-500 text-sm">
                                <div className="flex ">
                                    <input type="checkbox" className="font-thin mr-2 mt-1" name="" id="" /> <label for="">5+</label>

                                </div>
                                <div className="flex ">
                                    <input type="checkbox" className="font-thin mr-2 mt-1" name="" id="" /> <label for="">6+</label>

                                </div>
                                <div className="flex ">
                                    <input type="checkbox" className="font-thin mr-2 mt-1" name="" id="" /> <label for="">7+</label>

                                </div>

                                <div className="flex ">
                                    <input type="checkbox" className="font-thin mr-2 mt-1" name="" id="" /> <label for="">8+</label>

                                </div>
                                <div className="flex ">
                                    <input type="checkbox" className="font-thin mr-2 mt-1" name="" id="" /> <label for="">9+</label>

                                </div>


                            </div>


                        </div>

                    </div>
                    <div className="basis-3/4 md:mt-0 mt-5">
                        <div className="grid md:grid-cols-3  gap-2 md:border-2 mb-5 border-gray-300 py-3  rounded-sm px-2 text-center bg-gray-100">
                            <div className="md:border-r-2 border md:p-0 p-2 md:border-0 border-gray-300">

                                <p>Recommeneded</p>
                            </div>
                            <div className="md:border-r-2 border p-2 md:p-0 md:border-0 border-gray-300">
                                <p>Cheapest</p>
                            </div>
                            <div className="md:border-r-2 border p-2 md:p-0 md:border-0 border-gray-300">
                                <p>Best Rated</p>
                            </div>

                        </div>

                        <div className="grid md:grid-cols-2 bg-gray-100 mb-5">
                            <div className="md:border-r border-gray-400 grid md:grid-cols-2 ">
                                <div className='relative'>
                                    <img src="assets/images/car/pngegg (1) 1.png" className=" w-full h-full p-2" alt="" />
                                    <p className='bg-orange-500 absolute bottom-1 left-2 rounded text-white px-1'>6.0</p>
                                </div>
                                <div className="p-3">
                                    <h1 className="text-left text-gray-700 font-semibold">Toyota Corolla</h1>
                                    <p className='font-thin text-left text-sm'>or similar</p>
                                    <div className='grid grid-cols-3'>
                                        <div className="flex gap-1 mt-2 text-gray-600">
                                            <i class="fa-solid fa-user text-sm"></i>
                                            <p>4</p>
                                        </div>
                                        <div className="flex gap-1 mt-2 text-gray-600">
                                            <i class="fa-solid fa-bag-shopping text-sm"></i>
                                            <p>2</p>
                                        </div>
                                        <div className="flex gap-1 mt-2 text-gray-600">
                                            <i class="fa-solid fa-door-closed text-sm"></i>
                                            <p>3</p>
                                        </div>

                                    </div>
                                    <h1 className='font-semibold pt-2 text-left'>Pick up & Drop off</h1>
                                    <p className='text-xs text-left'>Address: 25 Lake circus road, Kolabagan, Dhaka 1215</p>
                                    <div className='grid grid-cols-2 text-left mt-2'>
                                        <div>
                                            <h1 className='font-semibold'>Fuel Policy</h1>
                                            <p className='text-sm'>Full to Full</p>
                                        </div>
                                        <div>
                                            <h1 className='font-semibold'>Milage</h1>
                                            <p className='text-sm'>Unlimited</p>
                                        </div>
                                    </div>
                                    <div className="text-left p-1 items-start gap-1 bg-gray-50 w-20 shadow rounded justify-start flex mt-5">
                                        <i class="fa-solid fa-share text-xs "></i>
                                        <p className="  text-xs ">Day Tour</p>
                                    </div>

                                </div>
                            </div>
                            <div className="md:mt-24  md:px-2 px-4">
                                <p className="text-left text-gray-700"> Total</p>
                                <p className="text-lg text-left font-bold text-gray-700"> BDT 4050</p>
                                <button className='bg-orange-500 px-8 py-2 text-right text-gray-50 rounded'> <Link to="/order-confirm">Book Now</Link>
                                </button>
                            </div>

                        </div>

                        <div className="grid md:grid-cols-2 bg-gray-100 mb-5">
                            <div className="md:border-r border-gray-400 grid md:grid-cols-2 ">
                                <div className='relative'>
                                    <img src="assets/images/car/pngegg (1) 1.png" className=" w-full h-full p-2" alt="" />
                                    <p className='bg-orange-500 absolute bottom-1 left-2 rounded text-white px-1'>6.0</p>
                                </div>
                                <div className="p-3">
                                    <h1 className="text-left text-gray-700 font-semibold">Toyota Corolla</h1>
                                    <p className='font-thin text-left text-sm'>or similar</p>
                                    <div className='grid grid-cols-3'>
                                        <div className="flex gap-1 mt-2 text-gray-600">
                                            <i class="fa-solid fa-user text-sm"></i>
                                            <p>4</p>
                                        </div>
                                        <div className="flex gap-1 mt-2 text-gray-600">
                                            <i class="fa-solid fa-bag-shopping text-sm"></i>
                                            <p>2</p>
                                        </div>
                                        <div className="flex gap-1 mt-2 text-gray-600">
                                            <i class="fa-solid fa-door-closed text-sm"></i>
                                            <p>3</p>
                                        </div>

                                    </div>
                                    <h1 className='font-semibold pt-2 text-left'>Pick up & Drop off</h1>
                                    <p className='text-xs text-left'>Address: 25 Lake circus road, Kolabagan, Dhaka 1215</p>
                                    <div className='grid grid-cols-2 text-left mt-2'>
                                        <div>
                                            <h1 className='font-semibold'>Fuel Policy</h1>
                                            <p className='text-sm'>Full to Full</p>
                                        </div>
                                        <div>
                                            <h1 className='font-semibold'>Milage</h1>
                                            <p className='text-sm'>Unlimited</p>
                                        </div>
                                    </div>
                                    <div className="text-left p-1 items-start gap-1 bg-gray-50 w-20 shadow rounded justify-start flex mt-5">
                                        <i class="fa-solid fa-share text-xs "></i>
                                        <p className="  text-xs ">Day Tour</p>
                                    </div>

                                </div>
                            </div>
                            <div className="md:mt-24  md:px-2 px-4">
                                <p className="text-left text-gray-700"> Total</p>
                                <p className="text-lg text-left font-bold text-gray-700"> BDT 4050</p>
                                <button className='bg-orange-500 px-8 py-2 text-right text-gray-50 rounded'> <Link to="/order-confirm">Book Now</Link>
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </div >
        );
    }
}

export default Vehicle;