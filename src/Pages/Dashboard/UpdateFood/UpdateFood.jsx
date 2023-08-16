/* eslint-disable no-unused-vars */
import React from 'react';

const UpdateFood = () => {
    return (
        <div>
            <div className=" mt-20 bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md max-w-4xl w-full">
          <h2 className="text-2xl font-semibold mb-4 text-center py-5">Update Food Item</h2>
          <form>
            <div className="md:flex gap-5">
              <div className="mb-4  md:w-1/2">
                <label className="block text-sm font-medium">
                  Food Category
                </label>
                <select className="mt-1 block w-full p-2 border rounded-md">
                  <option value="Burger">Burger</option>
                  <option value="Chicken">Chicken</option>
                  <option value="Combo">Combo</option>
                  <option value="Drinks">Drinks</option>
                  <option value="Pizza">Pizza</option>
                  <option value="Sauces">Sauces</option>
                  {/* Add more options */}
                </select>
              </div>
              <div className="mb-4  md:w-1/2">
                <label className="block text-sm font-medium">Food Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full p-2 border rounded-md"
                />
              </div>
            </div>
            <div className="md:flex gap-5">
              <div className="mb-4 md:w-1/2">
                <label className="block text-sm font-medium">Quantity</label>
                <input
                  type="number"
                  className="mt-1 block w-full p-2 border rounded-md"
                />
              </div>
              <div className="mb-4 md:w-1/2">
                <label className="block text-sm font-medium">Rating</label>
                <input
                  type="number"
                  step="0.1"
                  max="5"
                  className="mt-1 block w-full p-2 border rounded-md"
                />
              </div>
            </div>
            <div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Image</label>
                <input
                  type="file"
                  className="mt-1 block w-full p-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Description</label>
                <textarea
                  className="mt-1 block w-full p-2 border rounded-md"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Price</label>
              <input
                type="number"
                step="0.01"
                className="mt-1 block w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#303a6b] text-white w-full px-4 py-2 rounded-md hover:bg-[#252B48] transition-colors"
              >
                Update Food
              </button>
            </div>
          </form>
        </div>
      </div>
        </div>
    );
};

export default UpdateFood;