/* eslint-disable no-unused-vars */
import React from "react";
import burger from "../../assets/menu/burger.png";
import drinks from "../../assets/menu/drinks.png";
import pizza from "../../assets/menu/pizza.png";
import sauces from "../../assets/menu/sauces.png";
import desert from "../../assets/menu/desert.png";

const HomeMenu = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto flex justify-between items-center flex-wrap px-2 gap-5 py-10 font-bold">
        <div className="flex flex-col justify-center items-center">
          <img src={burger} alt="Burger" className="h-[100px] w-[100px]" />
          <p>BURGER</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={pizza} alt="Chicken" className="h-[100px] w-[100px]" />
          <p>PIZZA</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={drinks} alt="Drinks" className="h-[100px] w-[100px]" />
          <p>DRINKS</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={desert} alt="Pizza" className="h-[100px] w-[100px]" />
          <p>DESERT</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={sauces} alt="Sauces" className="h-[100px] w-[100px]" />
          <p>OTHERS</p>
        </div>
      </div>
    </div>
  );
};

export default HomeMenu;
