/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { imageUpload } from "../../../utils/utils";


const AddAItem = () => {
  const [foodCategory, setFoodCategory] = useState("Burger");

  const handleAddFood = (e) => {
    e.preventDefault();
    const foodName = e.target.foodName.value
    const foodQuantity = e.target.foodQuantity.value
    const rating = e.target.rating.value
    const description = e.target.description.value
    const price = e.target.price.value
    const foodImage = e.target.foodImage.files[0];

    imageUpload(foodImage)
    .then(data => {
      const image = data.data.display_url;
      const foodData = {foodName, image,foodQuantity, rating, description, foodCategory, price, }
      console.log(foodData);
      fetch('http://localhost:5000/allFoods', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(foodData)
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      })
      

    })
    .catch(error => {
      console.log(error);
    })


  }

  const handleCategoryChange = (e) => {
    setFoodCategory(e.target.value);
  };
  
  return (
    <div>
      <div className=" mt-20 bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md max-w-4xl w-full">
          <h2 className="text-2xl font-semibold mb-4 text-center py-5">Add Food Item</h2>
          <form onSubmit={handleAddFood}>
            <div className="md:flex gap-5">
              <div className="mb-4  md:w-1/2">
                <label className="block text-sm font-medium">
                  Food Category
                </label>
                <select value={foodCategory} name="foodCategory" onChange={handleCategoryChange} className="mt-1 block w-full p-2 border rounded-md">
                  <option value="Burger">Burger</option>
                  <option value="Pizza">Pizza</option>
                  <option value="Drinks">Drinks</option>
                  <option value="Desert">Desert</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="mb-4  md:w-1/2">
                <label className="block text-sm font-medium">Food Name</label>
                <input
                name="foodName"
                  type="text"
                  className="mt-1 block w-full p-2 border rounded-md"
                />
              </div>
            </div>
            <div className="md:flex gap-5">
              <div className="mb-4 md:w-1/2">
                <label className="block text-sm font-medium">Quantity</label>
                <input
                name="foodQuantity"
                  type="number"
                  className="mt-1 block w-full p-2 border rounded-md"
                />
              </div>
              <div className="mb-4 md:w-1/2">
                <label className="block text-sm font-medium">Rating</label>
                <input
                name="rating"
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
                name="foodImage"
                  type="file"
                  className="mt-1 block w-full p-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Description</label>
                <textarea
                name="description"
                  className="mt-1 block w-full p-2 border rounded-md"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Price</label>
              <input
              name="price"
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
                Add Food Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAItem;
