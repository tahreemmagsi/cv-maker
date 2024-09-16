import React from 'react';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineHome, HiOutlineMail, HiOutlinePhone, HiOutlinePrinter } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-8">
      <div className="container mx-auto px-4">
        {/* Social Media Section */}
        <section className="flex justify-between items-center p-4 border-b border-gray-300">
          <div className="text-gray-700">
            <span>Get connected with us on social networks:</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-black hover:text-gray-600">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="text-black hover:text-gray-600">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-black hover:text-gray-600">
              <FaGoogle size={24} />
            </a>
            <a href="#" className="text-black hover:text-gray-600">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-black hover:text-gray-600">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-black hover:text-gray-600">
              <FaGithub size={24} />
            </a>
          </div>
        </section>

        {/* Footer Content */}
        <section className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
            {/* Company Info */}
            <div>
              <h6 className="text-lg font-bold mb-4">Company Name</h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </div>

            {/* Products Links */}
            <div>
              <h6 className="text-lg font-bold mb-4">Products</h6>
              <ul>
                <li><a href="#" className="hover:underline">Angular</a></li>
                <li><a href="#" className="hover:underline">React</a></li>
                <li><a href="#" className="hover:underline">Vue</a></li>
                <li><a href="#" className="hover:underline">Laravel</a></li>
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h6 className="text-lg font-bold mb-4">Useful Links</h6>
              <ul>
                <li><a href="#" className="hover:underline">Pricing</a></li>
                <li><a href="#" className="hover:underline">Settings</a></li>
                <li><a href="#" className="hover:underline">Orders</a></li>
                <li><a href="#" className="hover:underline">Help</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h6 className="text-lg font-bold mb-4">Contact</h6>
              <p className="flex items-center mb-2">
                <HiOutlineHome className="mr-2" /> New York, NY 10012, US
              </p>
              <p className="flex items-center mb-2">
                <HiOutlineMail className="mr-2" /> info@example.com
              </p>
              <p className="flex items-center mb-2">
                <HiOutlinePhone className="mr-2" /> + 01 234 567 88
              </p>
              <p className="flex items-center mb-2">
                <HiOutlinePrinter className="mr-2" /> + 01 234 567 89
              </p>
            </div>
          </div>
        </section>

        {/* Footer Bottom */}
        <div className="text-center py-4 mt-6 border-t border-gray-300 text-gray-600">
          <p>&copy; {new Date().getFullYear()} Resume Maker. All rights reserved.</p>
          <p className="mt-2">Made with ♥ by the Resume Maker Team</p>
          <p className="mt-2">
            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a> | 
            <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
