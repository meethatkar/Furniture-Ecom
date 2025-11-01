import { Heart, Menu, Search, ShoppingCart, User, X } from "lucide-react";
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { useWishlist } from "../Context/Shopping/Wishlist"
import { useCart } from "../Context/Shopping/Cart";
import { useProduct } from "../Context/Products/ProductContext";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchedValue, setSearchedValue] = useState("");
    const [isSearchClicked, setIsSearchClicked] = useState(false);
    const { setselectedCategory } = useProduct();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            setSearchedValue(e.target.value);
            const tempData = e.target.value.trim();
            if (tempData) {
                console.log(tempData);
                setselectedCategory([tempData, "search"]);
                setSearchedValue(null);
                navigate("/product")
            }
        }
    }

    const handleSearchClicked = () => {
        setIsSearchClicked((prev) => !prev);
        if (searchedValue) {
            setselectedCategory([searchedValue, "search"]);
            setSearchedValue(null);
            navigate("/product")
        }
    }

    const wishlistContextObj = useWishlist();
    const { cartProductCount } = useCart();

    return (
        <nav className="w-full px-[5vw] py-[2vh] bg-transparent relative z-10 flex items-center justify-between font-Inter">
            {/* Section 1: Image and Text */}
            <img src="https://demo.leebrosus.com/kosi/wp-content/uploads/2021/07/logo.svg" alt="Logo" className="h-8" />

            {/* Hamburger menu for mobile */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className="focus:outline-none">
                    {isMenuOpen ? <X size={24} className="relative z-10" /> : <Menu size={24} />}
                </button>
            </div>

            {/* Section 2: Navigation Buttons (hidden on mobile, flex on md and up) */}
            <div className="hidden md:flex items-center gap-[10%] text-[1.1vw] font-medium translate-x-[15%]">
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "text-yellow-600" : ""}
                >
                    <button className="uppercase hover:cursor-pointer hover:text-yellow-800">Home</button>
                </NavLink>
                <NavLink
                    to="/product"
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
                <NavLink to="/account" className={({ isActive }) => (isActive ? "text-yellow-600" : "")}><User /></NavLink>
                {/* Search Input */}
                <NavLink to="#" className={({ isActive }) => `${isActive ? "text-yellow-600" : ""} flex`}>
                    <input
                        type="text"
                        onKeyDown={handleKeyDown}
                        className={`${isSearchClicked ? "w-fit" : "w-0"} border-b-2 border-b-yellow-600 placeholder:font-medium placeholder:text-yellow-600 outline-none text-gray-700`}
                        placeholder="Search Product"
                    />
                    <Search type="button" onClick={handleSearchClicked} />
                </NavLink>
                <NavLink to="/wishlist" className={({ isActive }) => `${isActive ? "text-yellow-600" : ""} relative`}>
                    <Heart />
                    <span className="absolute -top-[50%] -right-[40%] font-semibold bg-yellow-600/80 px-1 rounded-full text-white scale-85">{wishlistContextObj.wishlistCount}
                    </span>
                </NavLink>
                <NavLink to="/cart" className={({ isActive }) => `${isActive ? "text-yellow-600" : ""} relative`}>
                    <ShoppingCart />
                    <span className="absolute -top-[60%] -right-[30%] bg-yellow-600/80 text-white font-semibold rounded-full px-1 scale-85 ">
                        {cartProductCount}
                    </span>
                </NavLink>
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
                        to="/Product"
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
                        className={({ isActive }) => (isActive ? "text-yellow-600" : "")}
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
                        <NavLink to="/account" className={({ isActive }) => (isActive ? "text-yellow-600" : "")} onClick={toggleMenu}><User size={24} /></NavLink>
                        <NavLink to="#" className={({ isActive }) => (isActive ? "text-yellow-600" : "")} onClick={toggleMenu}><Search size={24} /></NavLink>
                        <NavLink to="/wishlist" className={({ isActive }) => (isActive ? "text-yellow-600" : "")} onClick={toggleMenu}><Heart size={24} /></NavLink>
                        <NavLink to="/cart" className={({ isActive }) => (isActive ? "text-yellow-600" : "")} onClick={toggleMenu}><ShoppingCart size={24} /></NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
