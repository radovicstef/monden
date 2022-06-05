import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

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

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
