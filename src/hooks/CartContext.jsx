import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const storedCart = localStorage.getItem("cartItems");
  const initialCartItems = storedCart ? JSON.parse(storedCart) : [];

  const [cartItems, setCartItems] = useState(initialCartItems);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemId) => {
    if (!cartItems.includes(itemId)) {
      setCartItems((prevCartItems) => [...prevCartItems, itemId]);
    } else {
      alert("Item is already in the cart.");
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((id) => id !== itemId)
    );
  };

  const isInCart = (itemId) => {
    return cartItems.includes(itemId);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, isInCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
