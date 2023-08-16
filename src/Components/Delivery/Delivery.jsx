/* eslint-disable no-unused-vars */
import React from "react";
import deliveryBoy from "../../assets/deliveryBoy.png";

const Delivery = () => {
  return (
    <div className="bg-[#FBF7E8]">
      <div className="max-w-screen-xl mx-auto px-2 md:flex justify-between items-center py-16">
        <div className="text-center md:text-start">
          <h3 className="text-4xl font-bold">Chose what you want, select pick up time</h3>
          <p className="text-[#808080] py-8">
            As well known and we are very busy all days advice you. advice you
            to call us of before arriving, so we can guarantee your seat.
          </p>
          <button className="bg-[#ffc222] px-4 py-3 font-bold rounded-md">ORDER NOW</button>
        </div>
        <div>
          <img src={deliveryBoy} alt="" className="py-10 md:py-0" />
        </div>
        <div className="md:text-end text-center">
          <h3 className="text-4xl font-bold">Earn points every time you order online</h3>
          <p className="text-[#808080] py-8">
            As well known and we are very busy all days advice you. advice you
            to call us of before arriving, so we can guarantee your seat.
          </p>
          <button className="bg-[#ffc222] px-4 py-3 font-bold rounded-md">ORDER NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
