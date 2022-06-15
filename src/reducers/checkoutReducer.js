import { 
  SHOW_CHECKOUT, 
  HIDE_CHECKOUT, 
  HANDLE_ON_CHANGE, 
  PLACE_ORDER,
  RESET_CHECKOUT,
  VALIDATE_INPUT
} from "../constants";

const initialCheckoutState = {
  fname: '',
  lname: '',
  phone: '',
  email: '',
  error: [],
  showCheckout: false
};

export const checkoutReducer = (state = initialCheckoutState, action) => {
  const nextState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case SHOW_CHECKOUT:
      return { ...nextState, showCheckout: true };
    case HIDE_CHECKOUT:
      return { ...nextState, showCheckout: false };
    case HANDLE_ON_CHANGE:
      const name = action.payload.name;
      const value = action.payload.event.target.value;
      return { ...nextState,  [name]: value };
    case VALIDATE_INPUT:
      return { ...nextState, error: checkErrors(nextState) };
    case PLACE_ORDER:
      return placeOrder(nextState, action.payload);
    case RESET_CHECKOUT:
      return initialCheckoutState;
    default:
      return state;
  }
};

const checkErrors = (state) => {
  const { fname, lname, phone, email } = state;
  const error = [];
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (fname.length === 0 || /[^A-Za-z\s]/.test(fname)) {
    error.push('Please enter a valid first name');
  }
  if (lname.length === 0 || /[^A-Za-z\s]/.test(lname)) {
    error.push('Please enter a valid last name');
  }
  if (phone.length === 0 || !/[0-9]{3}-[0-9]{3}-[0-9]{4}/.test(phone)) {
    error.push('Please enter phone format in XXX-XXX-XXXX');
  }
  if (email.length === 0 || !emailFormat.test(email)) {
    error.push('Please enter a valid email');
  }
  return error;
};

const placeOrder = (state, items) => {
  const { fname, lname, phone, email } = state;
  const order = { fname, lname, phone, email, items };
  order.type = 'order';

/**
 * For demonstration of the front end design to be hosted on github public
 * repository, sensitive information is removed. Replace with WebSocket Server 
 * URL in production.
 */

  // const ws = new WebSocket(/** replace with WebSocket Server URL */);
  
  // ws.onopen = () => {
  //   console.log('Connection established. Sending order over...');
  //   ws.send(JSON.stringify(order));
  // }

  // ws.onmessage = (event) => {
  //   if (event.data === 'received') {
  //     alert('Your order is received!');
  //     console.log('Your order is received!');
  //     ws.close();
  //   }
  //   console.log(event.data); 
  // }

  alert('Your order is received!\n'+ JSON.stringify(order));
  return initialCheckoutState;
}
