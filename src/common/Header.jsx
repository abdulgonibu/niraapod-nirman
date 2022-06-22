import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import Signup from "../components/Signup";
import Signin from "../components/Signin";
import ForgotPassword from "../components/ForgotPassword";
import Hotel from "../components/Hotel";
import Destination from "../components/Destination";
import CarDetails from "../components/CarDetails";
import OrderConfirm from "../components/OrderConfirm";
import RoomSelect from "../components/RoomSelect";
import Vehicle from "../components/Vehicle";

export class Header extends Component {
    render() {
        return (
            <Router>

                {/* <nav class="bg-[#00294d]">
                        <div class="flex justify-between container mx-auto py-2">
                            <Link to="/"><img src="assets/images/logo.png" alt="" /></Link>

                            <ul class="flex gap-10 text-slate-50 justify-center mt-3">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li><a href="">Explore</a></li>
                                <li><a href="">Help</a></li>
                                <li><a href=""><i class="fa-solid fa-magnifying-glass"></i></a></li>
                                <li class="bg-[#575757] px-4 py-1 rounded-sm"><Link to="/singin">Login</Link></li>
                            </ul>
                        </div>
                    </nav>
                    */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/singup" element={<Signup />} />
                    <Route path="/singin" element={<Signin />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/hotel-search" element={<Hotel />} />
                    <Route path="/destination-search" element={<Destination />} />
                    <Route path="/car-select" element={<CarDetails />} />
                    <Route path="/order-confirm" element={<OrderConfirm />} />
                    <Route path="/room-select" element={<RoomSelect />} />
                    <Route path="/vehicle-select" element={<Vehicle />} />

                </Routes>

            </Router>

        )
    }
}

export default Header