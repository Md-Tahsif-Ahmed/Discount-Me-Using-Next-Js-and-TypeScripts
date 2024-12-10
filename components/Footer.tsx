import Image from "next/image";
import logo from "@/public/image/Group.png";
import qr from "@/public/image/Qr Code.png";
import apple from "@/public/image/AppStore.png";
import google from "@/public/image/GooglePlay.png";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#232323] text-white py-12">
      <div className="container mx-auto px-6 lg:pl-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo and Subscription */}
          <div className="space-y-4 py-2 lg:py-0">
            <Image src={logo} alt="Discount Me Logo" width={150} height={50} />
            <p className="text-xs text-[#F8FAFC] opacity-70">
              Ecommerce is a free UI Kit from Paperpillar that you can use for
              your personal or commercial project.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Type your email address"
                className="flex-grow px-4 py-2 rounded-full text-[#232323] bg-[#F8FAFC] placeholder-gray-400 text-xs"
              />
              <button className="px-4 py-2 bg-[#F8FAFC] text-[#232323] rounded-full text-xs">
                Submit
              </button>
            </div>
          </div>

          {/* Account Links */}
          <div className="lg:pl-36">
            <h3 className="text-md font-semibold mb-2 lg:mb-4">Account</h3>
            <ul className="space-y-1 lg:space-y-3 text-xs">
              <li>
                <a href="#" className="hover:text-orange-500">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Login / Register
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Cart
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Wishlist
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Shop
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div  className="lg:pl-24 py-2 lg:py-0">
            <h3 className="text-md font-semibold mb-2 lg:mb-4">Quick Links</h3>
            <ul className="space-y-1 lg:space-y-3 text-xs">
              <li>
                <a href="#" className="hover:text-orange-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="lg:pl-10">
            <h3 className="text-md font-semibold mb-2 lg:mb-4">Support</h3>
            <ul className="space-y-1 lg:space-y-3 text-xs">
              <li>
                <a
                  href="mailto:exclusive@gmail.com"
                  className="hover:text-orange-500"
                >
                  exclusive@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+8801588888999" className="hover:text-orange-500">
                  +8801588888999
                </a>
              </li>
            </ul>
          </div>

          {/* Download App */}
          <div  className="lg:pr-16 py-2 lg:py-0">
            <h3 className="text-md font-semibold mb-2 lg:mb-4">Download App</h3>
            <div className="flex items-center gap-4">
              <Image src={qr} alt="QR Code" width={70} height={70} />
              <div className="space-y-1 lg:space-y-3">
                <Image
                  src={google}
                  alt="Google Play"
                  width={70}
                  height={40}
                  className="rounded-md"
                />
                <Image
                  src={apple}
                  alt="App Store"
                  width={70}
                  height={40}
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
