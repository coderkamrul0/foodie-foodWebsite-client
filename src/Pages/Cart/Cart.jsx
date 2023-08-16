import React, { useEffect, useState } from "react";
import { useCart } from "../../hooks/CartContext";

const Cart = () => {
  const [allFood, setAllFood] = useState([]);
  const { cartItems, removeFromCart } = useCart();
  const [cartFoodItems, setCartFoodItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/allfoods")
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

  return (
    <div className="min-h-screen">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-center font-bold text-5xl py-7">My Cart</h1>
        <div className="md:flex justify-between">
          <div className="w-3/4">
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
          <div className=" w:1/4 max-h-52">
          <div className="w-64 border border-yellow-500 h-full rounded-lg p-2 flex justify-center flex-col items-center gap-3">
        <p className="text-2xl font-bold">Total Price:</p>
          <h3 className="text-5xl font-bold">${grandTotalPrice}</h3>
          <button className="px-10 bg-yellow-500 py-2 rounded-lg font-bold">ORDER NOW</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
