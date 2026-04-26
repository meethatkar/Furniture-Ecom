import React from 'react'
import { Link } from 'react-router'
import { FaFacebookF, FaInstagram, FaPinterestP, FaTiktok, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-100 py-10 px-[5vw] mt-[5vmin]" aria-label="Site footer">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Section 1: Logo and Address */}
        <div>
          <Link to="/" aria-label="Urbanwoods home">
            <img src="/LogoText.svg" alt="Urbanwoods logo" className="mb-4" />
          </Link>
          <address className="not-italic">
            <p className="text-gray-600 text-sm">400 University Drive Suite 200 Coral Gables,</p>
            <p className="text-gray-600 text-sm">FL 33134 USA</p>
          </address>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com/urbanwoods" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900" aria-label="Follow Urbanwoods on Facebook"><FaFacebookF /></a>
            <a href="https://twitter.com/urbanwoods" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900" aria-label="Follow Urbanwoods on Twitter"><FaTwitter /></a>
            <a href="https://instagram.com/urbanwoods" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900" aria-label="Follow Urbanwoods on Instagram"><FaInstagram /></a>
            <a href="https://pinterest.com/urbanwoods" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900" aria-label="Follow Urbanwoods on Pinterest"><FaPinterestP /></a>
            <a href="https://tiktok.com/@urbanwoods" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900" aria-label="Follow Urbanwoods on TikTok"><FaTiktok /></a>
          </div>
        </div>

        {/* Section 2: About */}
        <nav aria-label="About navigation">
          <h3 className="text-xl font-bold mb-4">ABOUT</h3>
          <ul>
            <li><Link to="/product" className="text-gray-600 hover:text-gray-900 text-base">Shop</Link></li>
            <li><Link to="/about" className="text-gray-600 hover:text-gray-900 text-base">Our Story</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover:text-gray-900 text-base">Contact</Link></li>
          </ul>
        </nav>

        {/* Section 3: Help */}
        <nav aria-label="Help navigation">
          <h3 className="text-xl font-bold mb-4">HELP</h3>
          <ul>
            <li><Link to="/cart" className="text-gray-600 hover:text-gray-900 text-base">Payment Options</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover:text-gray-900 text-base">Contact Us</Link></li>
            <li><Link to="/blog" className="text-gray-600 hover:text-gray-900 text-base">Blog</Link></li>
          </ul>
        </nav>

        {/* Section 4: Newsletter */}
        <div>
          <h3 className="text-xl font-bold mb-4">NEWSLETTER</h3>
          <p className="text-gray-600 text-base mb-4">Stay updated with new arrivals</p>
          <form onSubmit={(e) => e.preventDefault()} aria-label="Newsletter signup">
            <div className="flex">
              <input type="email" placeholder="Enter your email" className="p-2 border border-gray-300 flex-grow" aria-label="Email address for newsletter" />
              <button type="submit" className="bg-black text-white p-2 ml-2 hover:bg-yellow-600 transition-colors">SUBSCRIBE</button>
            </div>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} Urbanwoods. All Rights Reserved</p>
        <nav aria-label="Legal navigation" className="flex space-x-4 mt-4 md:mt-0">
          <Link to="/about" className="hover:text-gray-900">About us</Link>
          <Link to="/blog" className="hover:text-gray-900">Blog</Link>
          <Link to="/contact" className="hover:text-gray-900">Contact</Link>
          <Link to="/product" className="hover:text-gray-900">Shop</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
