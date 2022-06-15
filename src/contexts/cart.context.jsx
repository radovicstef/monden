import { useReducer } from "react";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  cartItemsCount: 0,
});

const INITIAL_STATE = {
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  isCartOpen: false,
};

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  TOGGLE_IS_CART_OPEN: "TOGGLE_IS_CART_OPEN",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.TOGGLE_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in cart reducer`);
  }
};

const removeCartItem = (cartItems, productToRemove) => {
  const index = cartItems.findIndex(
    (item) =>
      item.id === productToRemove.id && item.name === productToRemove.name
  );
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
  const index = cartItems.findIndex(
    (item) => item.id === productToAdd.id && item.name === productToAdd.name
  );
  if (index === -1) {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  } else {
    cartItems[index].quantity++;
    return [...cartItems];
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const { cartItems, cartCount, cartTotal, isCartOpen } = state;

  const updateCartItemsReducer = (newCartItems) => {
    const newCartItemsCount = !cartItems
      ? 0
      : cartItems.reduce(
          (previousValue, currentItem) => previousValue + currentItem.quantity,
          0
        );

    const newTotalPrice = !cartItems
      ? 0
      : cartItems.reduce(
          (previousValue, item) => previousValue + item.quantity * item.price,
          0
        );

    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEMS,
      payload: {
        cartItems: newCartItems,
        cartTotal: newTotalPrice,
        cartCount: newCartItemsCount,
      },
    });
  };

  const addItemToCart = (productToAdd) => {
    console.log(productToAdd);
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemFromCart = (productToRemove) => {
    console.log(productToRemove);
    const newCartItems = removeCartItem(cartItems, productToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const setIsCartOpen = (isCartOpen) => {
    dispatch({
      type: CART_ACTION_TYPES.TOGGLE_IS_CART_OPEN,
      payload: isCartOpen,
    });
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
