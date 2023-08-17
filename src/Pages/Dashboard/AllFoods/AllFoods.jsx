/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const AllFoods = () => {

    const [allFood, setAllFood] = useState([])
    useEffect(()=>{
        fetch('https://foodie-server-three.vercel.app/allfoods')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setAllFood(data)
        })
    },[])

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rating
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Desc
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Update
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {allFood.map(item => (
                <tr key={item._id}>
                    <td className="px-6 py-4 whitespace-nowrap"><img className="h-12 w-12" src={item.image} alt="" /></td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.foodCategory}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.foodName}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.foodQuantity}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.rating}</td>
                    <td className="px-6 py-4 whitespace-nowrap">$ {item.price}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.description.slice(0,30)}</td>
                    <td className="px-6 py-4 whitespace-nowrap flex items-center gap-2">
                        <button>Delete</button>
                        <button>Update</button>
                    </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllFoods;
