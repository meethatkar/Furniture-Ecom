import { Heart, Search, ShoppingCart, User } from "lucide-react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
    return (
        <nav className="w-full px-[5vw] py-[2vh]  flex items-center justify-between">
            {/* Section 1: Image and Text */}
            <img src="https://demo.leebrosus.com/kosi/wp-content/uploads/2021/07/logo.svg" alt="Logo" />

            {/* Section 2: Navigation Buttons */}
            <div className="flex items-center gap-[10%] text-[1.3vw] font-semibold\ uppercase translate-x-4/12">
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "text-yellow-600" : ""}
                >
                    <button>Home</button>
                </NavLink>
                <NavLink
                    to="/shop"
                    className={({ isActive }) => isActive ? "text-yellow-600" : ""}
                >
                    <button>Shop</button>
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => isActive ? "text-yellow-600" : ""}
                >
                    <button>About</button>
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) => isActive ? "text-yellow-600" : ""}
                >
                    <button>Contact</button>
                </NavLink>
            </div>

            {/* Section 3: User Profile, Search, Like, Cart */}
            <div className="flex items-center gap-[8%] w-3/12 justify-end">
                <NavLink to="/account" className={({isActive}) => (isActive ? "text-yellow-600" : "")}><User /></NavLink>
                <NavLink to="#" className={({isActive})=>(isActive ? "text-yellow-600" : "")}><Search /></NavLink>
                <NavLink to="/like" className={({isActive})=>(isActive?"text-yellow-600":"")}><Heart /></NavLink>
                <NavLink to="/cart" className={({isActive})=>(isActive?"text-yellow-600":"")}><ShoppingCart /></NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
