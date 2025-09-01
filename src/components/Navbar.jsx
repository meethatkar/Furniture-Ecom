import { Heart, Search, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="w-full px-[5vw] py-[2vh]  flex items-center justify-between">
      {/* Section 1: Image and Text */}
        <img src="https://demo.leebrosus.com/kosi/wp-content/uploads/2021/07/logo.svg" alt="Logo" />

      {/* Section 2: Navigation Buttons */}
      <div className="flex items-center gap-[10%] text-[1.3vw] font-semibold\ uppercase translate-x-4/12">
        <Link to="/"><button>Home</button></Link>
        <Link to="/shop"><button>Shop</button></Link>
        <Link to="/about"><button>About</button></Link>
        <Link to="/contact"><button>Contact</button></Link>
      </div>

      {/* Section 3: User Profile, Search, Like, Cart */}
      <div className="flex items-center gap-[8%] w-3/12 justify-end">
        <Link to="#"><User /></Link>
        <Link to="#"><Search /></Link>
        <Link to="#"><Heart /></Link>
        <Link to="#"><ShoppingCart /></Link>
      </div>
    </nav>
  );
};

export default Navbar;
