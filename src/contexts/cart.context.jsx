import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  cartItemsCount: 0,
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
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculateCartItems = () => {
      let initialValue = 0;
      if (!cartItems) {
        return 0;
      }
      return cartItems.reduce(
        (previousValue, currentItem) => previousValue + currentItem.quantity,
        initialValue
      );
    };
    setCartItemsCount(calculateCartItems());
  }, [cartItems]);

  useEffect(() => {
    const getTotalPrice = () => {
      const initialValue = 0;
      const totalPrice = cartItems.reduce(
        (previousValue, item) => previousValue + item.quantity * item.price,
        initialValue
      );
      return totalPrice;
    };
    setTotalPrice(getTotalPrice());
  }, [cartItems]);

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
    cartItemsCount,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
