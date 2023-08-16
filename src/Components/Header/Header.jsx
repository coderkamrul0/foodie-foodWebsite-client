/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaBars, FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import MenuDropdown from "../MenuDropdown/MenuDropdown";

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const handleMobileNavToggle = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <div className="bg-[#00A149] text-white">
      <div className="max-w-screen-xl mx-auto">
        {/* Desktop Nav */}
        <div className="hidden md:flex justify-between items-center py-3">
          <h5 className="text-xl font-bold w-[68px]">Foodie</h5>
          <div className="flex gap-4">
            <Link to={"/"}>Home</Link>
            <Link to={"/shop"}>Shop</Link>
            <Link to={"/"}>About</Link>
            <Link to={"/"}>Blog</Link>
            <Link to={"/"}>Contact</Link>
          </div>
          <div className="flex justify-between items-center gap-4">
            <Link to={"/cart"} className="relative">
              <FaCartPlus className="border-2 p-1 rounded-full" size={30} />
              <small className="absolute top-4 left-4 bg-white text-black font-bold w-[20px] h-[20px] rounded-full flex justify-center items-center">10</small>
            </Link>
            <MenuDropdown />
          </div>
        </div>
        {/* Mobile Nav  */}
        <div className="md:hidden flex justify-between py-3 px-2 items-center">
          <FaBars onClick={handleMobileNavToggle} />
          <div>
            <h5 className="ml-10 font-bold text-xl">Foodie</h5>
          </div>
          <div className="flex items-center gap-4 list-none">
          <Link to={"/cart"} className="relative">
              <FaCartPlus className="border-2 p-1 rounded-full" size={30} />
              <small className="absolute top-4 left-4 bg-white text-black font-bold w-[20px] h-[20px] rounded-full flex justify-center items-center">10</small>
            </Link>
            <MenuDropdown />
          </div>
        </div>
        {mobileNavOpen && (
          <div className="md:hidden bg-white text-black">
            <div className="flex flex-col gap-2 mx-5">
              <Link to={"/"}>Home</Link>
              <Link to={"/"}>Shop</Link>
              <Link to={"/"}>About</Link>
              <Link to={"/"}>Blog</Link>
              <Link to={"/"}>Contact</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
