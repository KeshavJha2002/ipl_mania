// Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import  logo  from '../../assets/logo.png'; // Import IPL logo SVG file

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center py-5 px-6 bg-gradient-to-r from-black to-red-500 fixed w-full">
            
            <div className="flex items-center">
            <img src={logo} alt="logo" className="w-20 h-15 fill-current text-white mr-2"/>
                <span className="text-3xl font-semibold text-white">IPL Mania</span>
            </div>
            {/* Navigation Items */}
            <ul className="flex space-x-20 ">
                <li>
                    <NavLink to="/" className="text-white text-xl hover:text-gray-200">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/teams" className="text-white text-xl hover:text-gray-200">Teams</NavLink>
                </li>
                <li>
                    <NavLink to="/matches" className="text-white text-xl hover:text-gray-200">Seasons</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
