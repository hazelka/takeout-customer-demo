import { 
  TOGGLE_CART, 
  ADD_TO_CART, 
  CHANGE_QUANTITY, 
  REMOVE_ITEM,
  CLEAR_CART
} from "../constants";

export const toggleCart = () => ({ type: TOGGLE_CART });

export const addToCart = (id, name, price) => ({
  type: ADD_TO_CART,
  payload: { id, name, price }
});

export const changeQuantity = (id, qty) => ({
  type: CHANGE_QUANTITY,
  payload: { id, qty }
});

export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  payload: id
});

export const clearCart = () => ({
  type: CLEAR_CART
});