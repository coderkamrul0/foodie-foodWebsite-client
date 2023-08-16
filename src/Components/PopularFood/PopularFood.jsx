import React, { useEffect, useState } from 'react';
import FoodCard from '../FoodCard/FoodCard';

const PopularFood = () => {
    const [allFood, setAllFood] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allfoods')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllFood(data);
            });
    }, []);
    return (
        <div>
            <div className='max-w-screen-xl mx-auto pb-20'>
                <h5 className='text-center  py-5 font-bold text-3xl'>Popular Foods</h5>
                <div>
                <div className='grid md:grid-cols-4 gap-5'>
                    {
                        allFood.slice(0,8).map(item => <FoodCard key={item._id} item={item}/>)
                    }
                </div>
                </div>
            </div>
        </div>
    );
};

export default PopularFood;