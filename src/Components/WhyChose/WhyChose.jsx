import React from 'react';
import { FaShippingFast,FaClock,FaHamburger,FaStore } from "react-icons/fa";


const WhyChose = () => {
    return (
        <div className='bg-[#00A149]'>
            <div className='max-w-screen-xl mx-auto py-14'>
                <div className='flex justify-between'>
                    <div className='px-6'>
                    <div className='flex gap-3 pb-3'>
                        <FaShippingFast className='text-[#FFC222]' size={30}/>
                        <p className='text-white font-bold text-xl'>Free Shipping</p>
                    </div>
                    <p className='text-white'>Sign up for updates and get free shipping</p>
                    </div>
                    <div className='px-6'>
                    <div className='flex gap-3 pb-3'>
                        <FaClock className='text-[#FFC222]' size={30}/>
                        <p className='text-white font-bold text-xl'>Fast Delivery</p>
                    </div>
                    <p className='text-white'>We deliver goods around the world</p>
                    </div>
                    <div className='px-6'>
                    <div className='flex gap-3 pb-3'>
                        <FaHamburger className='text-[#FFC222]' size={30}/>
                        <p className='text-white font-bold text-xl'>Best Quality</p>
                    </div>
                    <p className='text-white'>We are international chain of restaurants.</p>
                    </div>
                    <div className='px-6'>
                    <div className='flex gap-3 pb-3'>
                        <FaStore className='text-[#FFC222]' size={30}/>
                        <p className='text-white font-bold text-xl'>Our Store</p>
                    </div>
                    <p className='text-white'>You can see our “here and now” products</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default WhyChose;