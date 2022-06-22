import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Nav = ({ bgcolor, home, Explore, Help }) => {
    return (
        <div style={{ backgroundColor: bgcolor }}>
            <div className="flex justify-between items-center text-center container mx-auto py-2">
                <Link to="/"><img src="assets/images/logo.png" alt="" className='' /></Link>
                <ul className="flex gap-10 text-slate-50">
                    <li> <Link to="/">{home}</Link></li>
                    <li><a href="">{Explore}</a></li>
                    <li><a href="">{Help}</a></li>
                    <li><a href=""><i className="fa-solid fa-magnifying-glass"></i></a></li>
                    <li className="bg-[#575757] px-4 p-1 rounded-sm"><Link to="/singin">Login</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default Nav;

