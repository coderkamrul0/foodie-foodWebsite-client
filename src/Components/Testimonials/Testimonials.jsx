import React from 'react';
import CountUp from 'react-countup';
import Carousel from '../Carousel/Carousel';

const Testimonials = () => {
    return (
        <div>
            <div className='max-w-screen-xl mx-auto md:flex gap-5 pb-24'>
                <div className='md:w-1/2'>
                    <h5 className='text-[#FFC222] font-bold text-xl'>Testimonials</h5>
                    <h3 className='font-bold text-5xl'>What our customer say about us</h3>
                    <p className='py-3'>We provide you with complete meal prep which includes the prepackaged necessary ingredients for a divine dinner as well as an easy to follow recipe guide in beautifull.</p>
                    <div className='flex gap-5'>
                        <div>
                            <h3 className='text-4xl font-bold text-[#00A149]'>
                            <CountUp end={15} />k+
                            </h3>
                            <p className='font-bold pt-4'>Happy Customers</p>
                        </div>
                        <div>
                            <h3 className='text-4xl font-bold text-[#00A149]'>
                            <CountUp end={10} />+
                            </h3>
                            <p className='font-bold pt-4'>Award Win</p>
                        </div>
                        <div>
                            <h3 className='text-4xl font-bold text-[#00A149]'>
                            <CountUp end={50} />+
                            </h3>
                            <p className='font-bold pt-4'>Food Items</p>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/2'>
                    <Carousel/>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;