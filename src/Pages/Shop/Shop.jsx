/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import FoodCard from '../../Components/FoodCard/FoodCard';

const Shop = () => {
    const [allFood, setAllFood] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState('');

    useEffect(() => {
        fetch('https://foodie-server-three.vercel.app/allfoods')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllFood(data);
            });
    }, []);

    const filteredFood = allFood.filter(item => {
        const categoryMatch = selectedCategory === '' || item.foodCategory === selectedCategory;
        const searchMatch = item.foodName.toLowerCase().includes(searchQuery.toLowerCase());
        return categoryMatch && searchMatch;
    });

    const sortedFood = [...filteredFood].sort((a, b) => {
        if (sortOrder === 'HighToLow') {
            return b.price - a.price;
        } else if (sortOrder === 'LowToHigh') {
            return a.price - b.price;
        }
        return 0;
    });

    return (
        <div>
            <div className='max-w-screen-xl mx-auto py-10'>
                <div className='md:flex justify-between items-center py-3'>
                    <div>
                        <label htmlFor="category" className='px-2 py-1'>Filter by Category</label>
                        <select
                            id='category'
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className='bg-yellow-500 px-2 py-1'
                        >
                            <option value=''>All</option>
                            <option value='Burger'>BURGER</option>
                            <option value='Pizza'>PIZZA</option>
                            <option value='Drinks'>DRINKS</option>
                            <option value='Desert'>DESSERT</option>
                            <option value='Others'>OTHERS</option>
                        </select>
                    </div>
                    <div>
                        <input
                            type="search"
                            placeholder='Search Food'
                            className='border-2  border-yellow-500 outline-none'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="sortOrder" className='px-2 py-1'>Sort by Price</label>
                        <select
                            id='sortOrder'
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                            className='bg-yellow-500 px-2 py-1'
                        >
                            <option value=''>None</option>
                            <option value='HighToLow'>High to Low</option>
                            <option value='LowToHigh'>Low to High</option>
                        </select>
                    </div>
                </div>
                <div className='grid md:grid-cols-4 gap-5'>
                    {
                        sortedFood.map(item => <FoodCard key={item._id} item={item}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;
