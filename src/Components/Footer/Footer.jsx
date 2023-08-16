/* eslint-disable no-unused-vars */
import React from "react";
import footerPayment from '../../assets/footer-payment.png'

const Footer = () => {
  return (
    <div className="bg-[#181818]">
      <div className="max-w-screen-xl mx-auto text-white py-10">
        <div className="md:flex justify-between ">
          <div>
            <h5 className="font-bold text-lg">ADDRESS</h5>
            <p className="text-[#B0B0B0]">
              Level-4, Awal Center <br />
              Banani Dhaka <br />
              Bangladesh
            </p>
          </div>
          <div>
            <h5 className="font-bold text-lg">IMPORTANT LINKS</h5>
            <ul className="text-[#B0B0B0]">
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-lg">IMPORTANT LINKS</h5>
            <ul className="text-[#B0B0B0]">
              <li>Contact</li>
              <li>Privacy & Policy</li>
              <li>Terms & Condition</li>
              <li>BLOG</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-lg">NEWSLETTER</h5>
            <p className="text-[#B0B0B0]">
              Subscribe to the weekly newsletter <br /> for all the latest
              updates
            </p>
            <div>
              <input
                type="text"
                name=""
                placeholder="Your Email.."
                id=""
                className="bg-transparent border px-2 py-1 outline-none border-[#B0B0B0]"
              />
              <button className="bg-yellow-500 text-black px-2 py-[5px]">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
        <div className=" bg-[#00A850] py-3 text-white">
            <div className="max-w-screen-xl mx-auto md:flex justify-between">
            <p>Copyright © 2023 Foodie. All Rights Reserved.</p>
            <img src={footerPayment} alt="" />
            </div>
        </div>
    </div>
  );
};

export default Footer;
