import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
});

const removeCartItem = (cartItems, productToRemove) => {
  const index = cartItems.findIndex((item) => item.id === productToRemove.id);
  if (index === -1) return;
  else {
    if (cartItems[index].quantity > 1) {
      cartItems[index].quantity--;
      return [...cartItems];
    } else {
      cartItems.splice(index, 1);
      return [...cartItems];
    }
  }
};

const addCartItem = (cartItems, productToAdd) => {
  const index = cartItems.findIndex((item) => item.id === productToAdd.id);
  if (index === -1) {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  } else {
    cartItems[index].quantity++;
    return [...cartItems];
  }
};

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    console.log(productToAdd);
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    console.log(productToRemove);
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
