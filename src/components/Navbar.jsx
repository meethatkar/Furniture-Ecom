import { Heart, Menu, Search, ShoppingCart, User, X } from "lucide-react";
import React, { useState } from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="w-full px-[5vw] py-[2vh] bg-transparent relative z-10 flex items-center justify-between font-Inter">
            {/* Section 1: Image and Text */}
            <img src="https://demo.leebrosus.com/kosi/wp-content/uploads/2021/07/logo.svg" alt="Logo" className="h-8" />

            {/* Hamburger menu for mobile */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className="focus:outline-none">
                    {isMenuOpen ? <X size={24} className="relative z-10"/> : <Menu size={24} />}
                </button>
            </div>

            {/* Section 2: Navigation Buttons (hidden on mobile, flex on md and up) */}
            <div className="hidden md:flex items-center gap-[10%] text-[1.1vw] font-medium">
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "text-yellow-600" : ""}
                >
                    <button className="uppercase hover:cursor-pointer hover:text-yellow-800">Home</button>
                </NavLink>
                <NavLink
                    to="/shop"
                    className={({ isActive }) => isActive ? "text-yellow-600" : ""}
                >
                    <button className="uppercase hover:cursor-pointer hover:text-yellow-800">Shop</button>
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => isActive ? "text-yellow-600" : ""}
                >
                    <button className="uppercase hover:cursor-pointer hover:text-yellow-800">About</button>
                </NavLink>
                <NavLink
                    to="/blog"
                    className={({ isActive }) => isActive ? "text-yellow-600" : ""}
                >
                    <button className="uppercase hover:cursor-pointer hover:text-yellow-800">Blog</button>
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) => isActive ? "text-yellow-600" : ""}
                >
                    <button className="uppercase hover:cursor-pointer hover:text-yellow-800">Contact</button>
                </NavLink>
            </div>

            {/* Section 3: User Profile, Search, Like, Cart (hidden on mobile, flex on md and up) */}
            <div className="hidden md:flex items-center gap-[8%] w-3/12 justify-end">
                <NavLink to="/account" className={({isActive}) => (isActive ? "text-yellow-600" : "")}><User /></NavLink>
                <NavLink to="#" className={({isActive})=>(isActive ? "text-yellow-600" : "")}><Search /></NavLink>
                <NavLink to="/like" className={({isActive})=>(isActive?"text-yellow-600":"")}><Heart /></NavLink>
                <NavLink to="/cart" className={({isActive})=>(isActive?"text-yellow-600":"")}><ShoppingCart /></NavLink>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-0 left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center gap-4">
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? "text-yellow-600" : ""}
                        onClick={toggleMenu}
                    >
                        <button className="uppercase text-lg hover:text-yellow-800">Home</button>
                    </NavLink>
                    <NavLink
                        to="/shop"
                        className={({ isActive }) => isActive ? "text-yellow-600" : ""}
                        onClick={toggleMenu}            //click pe menu close hoga.
                    >
                        <button className="uppercase text-lg hover:text-yellow-800">Shop</button>
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => isActive ? "text-yellow-600" : ""}
                        onClick={toggleMenu}
                    >
                        <button className="uppercase text-lg hover:text-yellow-800">About</button>
                    </NavLink>
                    <NavLink 
                        to="/blog"
                        className={({isActive}) => (isActive ? "text-yellow-600": "")}
                        onClick={toggleMenu}
                    >
                        <button className="uppercase text-lg hover:text-yellow-600"> Blog </button>
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => isActive ? "text-yellow-600" : ""}
                        onClick={toggleMenu}
                    >
                        <button className="uppercase text-lg hover:text-yellow-800">Contact</button>
                    </NavLink>
                    <div className="flex items-center gap-6 mt-4">
                        <NavLink to="/account" className={({isActive}) => (isActive ? "text-yellow-600" : "")} onClick={toggleMenu}><User size={24} /></NavLink>
                        <NavLink to="#" className={({isActive})=>(isActive ? "text-yellow-600" : "")} onClick={toggleMenu}><Search size={24} /></NavLink>
                        <NavLink to="/like" className={({isActive})=>(isActive?"text-yellow-600":"")} onClick={toggleMenu}><Heart size={24} /></NavLink>
                        <NavLink to="/cart" className={({isActive})=>(isActive?"text-yellow-600":"")} onClick={toggleMenu}><ShoppingCart size={24} /></NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
