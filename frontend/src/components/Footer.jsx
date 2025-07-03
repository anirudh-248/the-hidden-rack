import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <NavLink to="/" onClick={scrollToTop}>
            <img src={assets.logo} className="mb-5 w-42" alt="" />
          </NavLink>
          <p className="w-full md:w-2/3 text-gray-600">
            The Hidden Rack is your go-to destination for curated fashion
            pieces, exclusive deals, and hidden gems you won't find anywhere
            else. We bring together style, quality, and affordability to help
            you express your individuality with every look.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <NavLink to="/" onClick={scrollToTop}>
              <li>Home</li>
            </NavLink>
            <NavLink to="/about" onClick={scrollToTop}>
              <li>About Us</li>
            </NavLink>
            <NavLink to="/contact" onClick={scrollToTop}>
              <li>Contact</li>
            </NavLink>
            <NavLink to="/privacy-policy" onClick={scrollToTop}>
              <li>Privacy Policy</li>
            </NavLink>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 1234567890</li>
            <li>contact@thehiddenrack.store</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025 @ thehiddenrack.store - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
