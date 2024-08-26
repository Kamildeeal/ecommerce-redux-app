import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 px-4 font-sans max-w-[1283px] w-full sm:mx-12">
      <div className="border-t-1 shadow-bottom-only shadow-black h-[3px] mb-12"></div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Privacy Policy</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="relative group cursor-pointer max-w-max">
                Terms & Conditions
                <span className="block absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group cursor-pointer max-w-max">
                Privacy Policy
                <span className="block absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group cursor-pointer max-w-max">
                Cookie Settings
                <span className="block absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group cursor-pointer max-w-max">
                Right of Withdrawal
                <span className="block absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group cursor-pointer max-w-max">
                Online Ordering Process
                <span className="block absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group cursor-pointer max-w-max">
                Statutory Warranty Rights
                <span className="block absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Client support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="relative group cursor-pointer max-w-max">
                Shipping Costs and Delivery Times
                <span className="block absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group cursor-pointer max-w-max">
                Help Centre
                <span className="block absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group cursor-pointer max-w-max">
                Vouchers
                <span className="block absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group cursor-pointer max-w-max">
                Contact us
                <span className="block absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group cursor-pointer max-w-max">
                Service Overview
                <span className="block absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">About us</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="relative group cursor-pointer max-w-max">
                About Us
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group cursor-pointer max-w-max">
                Jobs & Careers
                <span className="block absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group cursor-pointer max-w-max">
                Blog
                <span className="block absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group cursor-pointer max-w-max">
                Classified Ads
                <span className="block absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center space-x-4 mb-4 cursor-pointer ">
          <FaFacebook className="text-2xl text-gray-700 transiton-all hover:text-blue-500" />
          <FaInstagram className="text-2xl text-gray-700 hover:text-pink-500" />
          <FaYoutube className="text-2xl text-gray-700 hover:text-red-500" />
          <FaPinterest className="text-2xl text-gray-700 hover:text-red-200" />
        </div>
        <div className="text-xs text-center text-gray-500">
          KamShop 2024 - educational project #react #next.js #redux
        </div>
      </div>
    </footer>
  );
};

export default Footer;
