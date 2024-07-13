import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 z-20">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 KamShop. All rights reserved.</p>
        <nav className="mt-4">
          <ul className="flex justify-center space-x-4">
            <li>
              <a href="#" className="hover:text-gray-300">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
