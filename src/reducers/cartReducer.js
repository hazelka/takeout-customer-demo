import { 
  ADD_TO_CART, 
  TOGGLE_CART,
  CHANGE_QUANTITY,
  REMOVE_ITEM,
  CLEAR_CART
} from "../constants";

const initialCartState = {
  items: [],
  showCart: false,
  count: 0
};

// itemToAdd { id : number, name : string, price : number }
const addToCart = (state, itemToAdd) => {
  const i = state.items.findIndex(item => item.id === itemToAdd.id);
  if (i === -1) {
    state.items.push({ ...itemToAdd, quantity: 1 });
    state.count += 1;
  } else {
    if (state.items[i].quantity === 5) return state;
    state.items[i].quantity += 1;
    state.count += 1;
  }
  return state;
};

// itemToChange { id : nunber, quantity : number }
const changeQuantity = (state, itemToChange) => {
  const i = state.items.findIndex(item => item.id === itemToChange.id);
  state.count += itemToChange.qty - state.items[i].quantity;
  state.items[i].quantity = itemToChange.qty;
  return state;
};

const removeItem = (state, id) => {
  const i = state.items.findIndex(item => item.id === id);
  state.count -= state.items[i].quantity;
  state.items.splice(i, 1);
  return state;
};

export const cartReducer = (state = initialCartState, action) => {
  const nextState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case TOGGLE_CART:
      return { ...nextState, showCart: !nextState.showCart };
    case ADD_TO_CART:
      return addToCart(nextState, action.payload);
    case CHANGE_QUANTITY:
      return changeQuantity(nextState, action.payload);
    case REMOVE_ITEM:
      return removeItem(nextState, action.payload);
    case CLEAR_CART:
      return initialCartState;
    default:
      return state;
  }
};