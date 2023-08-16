import React from "react";
import leftImg from "../../assets/newsletter/leftImg.png";
import rightImg from "../../assets/newsletter/rightImg.png";

const NewsLetter = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto md:flex justify-between items-center">
        <div>
          <img src={leftImg} className="w-full" alt="" />
        </div>
        <div className="text-center flex flex-col gap-2">
          <h5 className="text-xl text-[#00A149] font-semibold">Newsletter</h5>
          <h3 className="text-4xl font-bold">
            Get <span className="text-[#ffc222]">10%</span> off your order!
          </h3>
          <p>Enter your email and receive a 10% discount on your next order!</p>
          <div className="border flex justify-between px-3 py-1">
            <input type="text" name="" className="outline-none" placeholder="Enter your email" id="" />
            <button className="bg-[#ffc222] px-4 py-2 font-semibold">SUBSCRIBE</button>
          </div>
        </div>
        <div>
          <img src={rightImg} className="w-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
