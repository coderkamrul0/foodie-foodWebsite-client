import React, { useEffect, useState } from "react";
import { useCart } from "../../hooks/CartContext";
import useAuth from "./../../hooks/useAuth";
import { FaWindowClose } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Cart = () => {
  const [allFood, setAllFood] = useState([]);
  const { cartItems, removeFromCart } = useCart();
  const [cartFoodItems, setCartFoodItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    fetch("https://foodie-server-three.vercel.app/allfoods")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllFood(data);
      });
  }, []);

  useEffect(() => {
    const cartItemsData = allFood.filter((item) =>
      cartItems.includes(item._id)
    );
    setCartFoodItems(cartItemsData);
  }, [cartItems, allFood]);

  const incrementQuantity = (item) => {
    setCartFoodItems((prevCartFoodItems) => {
      const updatedCartFoodItems = [...prevCartFoodItems];
      const cartItemIndex = updatedCartFoodItems.findIndex(
        (cartItem) => cartItem._id === item._id
      );

      if (cartItemIndex !== -1) {
        const updatedItem = { ...updatedCartFoodItems[cartItemIndex] };
        updatedItem.quantity = (updatedItem.quantity || 1) + 1;
        updatedCartFoodItems[cartItemIndex] = updatedItem;

        setTotalPrice(totalPrice + updatedItem.price);
      }

      return updatedCartFoodItems;
    });
  };

  const decrementQuantity = (item) => {
    setCartFoodItems((prevCartFoodItems) => {
      const updatedCartFoodItems = [...prevCartFoodItems];
      const cartItemIndex = updatedCartFoodItems.findIndex(
        (cartItem) => cartItem._id === item._id
      );

      if (
        cartItemIndex !== -1 &&
        updatedCartFoodItems[cartItemIndex].quantity > 1
      ) {
        const updatedItem = { ...updatedCartFoodItems[cartItemIndex] };
        updatedItem.quantity = updatedItem.quantity - 1;
        updatedCartFoodItems[cartItemIndex] = updatedItem;

        setTotalPrice(totalPrice - updatedItem.price);
      }

      return updatedCartFoodItems;
    });
  };

  const grandTotalPrice = cartFoodItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Foodie | My Cart</title>
      </Helmet>
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-center font-bold text-5xl py-7">My Cart</h1>
        <div className="md:flex justify-between flex-col-reverse md:flex-row">
          <div className="w-full md:w-3/4">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Image
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Update
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cartFoodItems.map((item) => (
                    <tr key={item._id} className="bg-yellow-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <img className="h-12 w-12" src={item.image} alt="" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.foodName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.quantity || 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                        <button
                          className="bg-yellow-500 px-2 font-bold text-xl"
                          onClick={() => decrementQuantity(item)}
                        >
                          -
                        </button>
                        $ {item.price * (item.quantity || 1)}
                        <button
                          className="bg-yellow-500 px-2 font-bold text-xl"
                          onClick={() => incrementQuantity(item)}
                        >
                          +
                        </button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button onClick={() => removeFromCart(item._id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-full md:w-1/4 max-h-52 mb-4 md:mb-0">
            <div className="w-64 border border-yellow-500 h-full rounded-lg p-2 flex justify-center flex-col items-center gap-3">
              <p className="text-2xl font-bold">Total Price:</p>
              <h3 className="text-5xl font-bold">${grandTotalPrice}</h3>
              <button
                onClick={toggleModal}
                className="px-10 bg-yellow-500 py-2 rounded-lg font-bold"
              >
                ORDER NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalVisible && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg md:flex w-full md:w-[70%]">
            {/* Left side - Form */}
            <div className="w-full md:w-1/2 pr-0 md:pr-4">
              <h2 className="text-xl font-semibold mb-4">Enter Your Details</h2>
              {/* Your form inputs for name, address, mobile, and email */}
              <form className="space-y-3">
                <div className="mb-3">
                  <label htmlFor="name" className="block font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={user?.displayName}
                    className="w-full border rounded p-2"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="block font-medium">
                    Address
                  </label>
                  <input
                    required
                    type="text"
                    id="address"
                    className="w-full border rounded p-2"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="block font-medium">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    value={user?.email}
                    className="w-full border rounded p-2"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="block font-medium">
                    Phone
                  </label>
                  <input
                    required
                    type="text"
                    id="phone"
                    className="w-full border rounded p-2"
                  />
                </div>
              </form>
            </div>

            {/* Right side - Additional Details */}
            <div className="w-full md:w-1/2 pl-0 md:pl-4">
              <h2 className="text-xl font-semibold mb-4">Order Details</h2>
              {/* Display order details */}
              {cartFoodItems.length > 0 && (
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2">Food Name</th>
                      <th className="py-2">Quantity</th>
                      <th className="py-2">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartFoodItems.map((item) => (
                      <tr key={item._id} className="border-b">
                        <td className="py-2">{item.foodName}</td>
                        <td className="py-2">{item.quantity || 1}</td>
                        <td className="py-2">
                          ${item.price * (item.quantity || 1)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              <hr className="my-2" />
              <p className="font-semibold">Total: ${grandTotalPrice}</p>

              {/* Checkout button */}
              <div className="flex justify-between items-center">
                <button className="mt-2 w-full md:w-auto px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded">
                  Checkout
                </button>
                <button
                  className=" bg-red-500 px-4 py-2 rounded mt-2 hover:bg-red-700"
                  onClick={toggleModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
