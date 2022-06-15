import { 
  SHOW_CHECKOUT,
  HIDE_CHECKOUT, 
  HANDLE_ON_CHANGE, 
  VALIDATE_INPUT,
  PLACE_ORDER, 
  RESET_CHECKOUT
} from "../constants";

export const showCheckout = () => ({ type: SHOW_CHECKOUT });
export const hideCheckout = () => ({ type: HIDE_CHECKOUT });

export const handleOnChange = (name, event) => ({
  type: HANDLE_ON_CHANGE,
  payload: { name, event }
})

export const validateInput = () => ({ type: VALIDATE_INPUT });

export const placeOrder = (items) => ({
  type: PLACE_ORDER,
  payload: items
});

export const resetCheckout = () => ({
  type: RESET_CHECKOUT
});