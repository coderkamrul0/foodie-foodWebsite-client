import React, { useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";


const FoodCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="border p-3 rounded-xl">
      <div>
        <div
          className={`transition-all ${isHovered ? "h-full" : "h-[50%]"} ${
            isHovered ? "bg-yellow-500" : " bg-yellow-100"
          } rounded-lg cursor-pointer`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={item.image}
            alt=""
            className="w-full h-auto transition-transform duration-300 transform scale-100 hover:scale-110"
          />
        </div>
        <h5 className="font-bold pt-2">{item.foodName}</h5>
        <p className="text-slate-500 text-sm py-2">{item.description.slice(0, 50)}</p>
        <div className="flex justify-between items-center">
          <p className="text-yellow-500 font-bold text-2xl">${item.price}</p>
          <button className="bg-yellow-500 text-black p-2 rounded-lg"><FaShoppingBasket size={20}/></button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
