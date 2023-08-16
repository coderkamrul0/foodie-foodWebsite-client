/* eslint-disable no-unused-vars */
import React from 'react';
import BurgerImg from '../../assets/burger.png'

const AboutFood = () => {
    return (
        <div>
            <div className='max-w-screen-xl mx-auto md:flex justify-between items-center gap-10 py-20 px-2'>
                {/* Image Container  */}
                <div className='md:w-1/2'>
                    <img src={BurgerImg} alt="" />
                </div>
                {/* Text Container  */}
                <div className='md:w-1/2'>
                    <h5 className='text-[#ffc222] font-bold'>About Our Food</h5>
                    <h2 className='text-5xl md:text-6xl font-bold py-5'>From Texas with American Love</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button className='bg-[#ffc222] px-4 py-3 font-bold rounded-md mt-5'>ORDER NOW</button>
                </div>
            </div>
        </div>
    );
};

export default AboutFood;