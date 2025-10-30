import React from 'react'
import { FaFacebookF, FaInstagram, FaPinterestP, FaTiktok, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-100 py-10 px-[5vw] mt-[5vmin]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Section 1: Logo and Address */}
        <div>
          <img src="https://demo.leebrosus.com/kosi/wp-content/uploads/2021/07/logo.svg" alt="KOSI Logo" className="mb-4" />
          <p className="text-gray-600 text-sm">400 University Drive Suite 200 Coral Gables,</p>
          <p className="text-gray-600 text-sm">FL 33134 USA</p>
          <div className="flex space-x-4 mt-4">
            {/* Social Media Icons - Placeholder for now */}
            <a href="#" className="text-gray-600 hover:text-gray-900"><FaFacebookF /></a>
            <a href="#" className="text-gray-600 hover:text-gray-900"><FaTwitter /></a>
            <a href="#" className="text-gray-600 hover:text-gray-900"><FaInstagram /></a>
            <a href="#" className="text-gray-600 hover:text-gray-900"><FaPinterestP /></a>
            <a href="#" className="text-gray-600 hover:text-gray-900"><FaTiktok /></a>
          </div>
        </div>

        {/* Section 2: About */}
        <div>
          <h3 className="text-xl font-bold mb-4">ABOUT</h3>
          <ul>
            <li><a href="#" className="text-gray-600 hover:text-gray-900 text-base">Shop</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900 text-base">Delivery</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900 text-base">Returns</a></li>
          </ul>
        </div>

        {/* Section 3: Help */}
        <div>
          <h3 className="text-xl font-bold mb-4">HELP</h3>
          <ul>
            <li><a href="#" className="text-gray-600 hover:text-gray-900 text-base">Payment Options</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900 text-base">Contact Us</a></li>
          </ul>
        </div>

        {/* Section 4: Newsletter */}
        <div>
          <h3 className="text-xl font-bold mb-4">NEWSLETTER</h3>
          <p className="text-gray-600 text-base mb-4">Your email address</p>
          <div className="flex">
            <input type="email" placeholder="Enter your email" className="p-2 border border-gray-300 flex-grow" />
            <button className="bg-black text-white p-2 ml-2">SUBSCRIBE</button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p>&copy; 2021 KOSI. All Rights Reserved</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-900">About us</a>
          <a href="#" className="hover:text-gray-900">Blog</a>
          <a href="#" className="hover:text-gray-900">FAQs</a>
          <a href="#" className="hover:text-gray-900">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;