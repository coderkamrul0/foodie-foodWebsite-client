/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { Link, Outlet } from 'react-router-dom';


const Dashboard = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Toggle Bar */}
            <div className="bg-white p-4 sm:hidden">
                <button className="text-gray-600" onClick={toggleSidebar}>
                    <FaBars/>
                </button>
            </div>

            {/* Sidebar */}
            <nav
                className={`bg-white w-64 py-8 px-4 fixed h-full transition-all ${
                    isSidebarOpen ? 'left-0' : '-left-64'
                }`}
            >
                {/* Sidebar content */}
                <ul className='flex flex-col gap-5'>
                    <h4 className='font-bold text-2xl mb-10'>Foodie</h4>
                    <Link to={'/dashboard'}><li>Home</li></Link>
                    <Link to={'/dashboard/allFoods'}><li>All Foods</li></Link>
                    <Link to={'/dashboard/addFood'}><li>Add Food</li></Link>
                    <Link to={'/dashboard/updateFood'}><li>Update Food</li></Link>
                    <Link to={'/dashboard/orderHistory'}><li>Order History</li></Link>
                    <br />
                    <Link to={'/'}><li>Main Home</li></Link>
                    <li>Logout</li>
                </ul>
            </nav>

            {/* Main Content */}
            <div className={`ml-0 sm:ml-64 p-4 transition-all ${isSidebarOpen ? 'sm:ml-64' : 'sm:ml-0'}`}>
                {/* Page header */}
                <header className="mb-4 py-5 bg-green-500">
                    <h4 className='text-center text-white font-bold text-4xl'>Foodie Admin Panel</h4>
                </header>

                {/* Dashboard Content */}
                <Outlet/>
            </div>
        </div>
    );
};

export default Dashboard;
