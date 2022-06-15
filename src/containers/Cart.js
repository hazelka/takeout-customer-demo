import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import './Cart.css';
import { 
  placeOrder, 
  showCheckout,
  validateInput } from '../actions/checkoutActions';
import { clearCart } from '../actions/cartActions';
import store from '../index';

const mapStateToProps = (state) => ({
  items: state.cart.items,
  showCart: state.cart.showCart,
  showCheckout: state.checkout.showCheckout,
  error: state.checkout.error,
});

const mapDispatchToProps = (dispatch) => ({
  checkout: () => dispatch(showCheckout()),
  clearCart: () => dispatch(clearCart()),

  placeOrder: (items) => {
    dispatch(validateInput());
    if (!store.getState().checkout.error.length) {
      dispatch(placeOrder(items));
      dispatch(clearCart());
    }
  }
})

class Cart extends React.Component {

  renderCartItems = (items) => {
    return items.map(i => (
      <CartItem 
        key={i.id}
        id={i.id}
        name={i.name} 
        quantity={i.quantity} 
        price={i.price}
      />
    ));
  }

  handleCheckout = () => {
    if (!this.props.items.length) return;

    if (this.props.showCheckout) {
      this.props.placeOrder(this.props.items);
    } else {
      this.props.checkout();
    }
  };

  render() {
    const { items, showCart, showCheckout } = this.props;
    const total = items.reduce((sum, i) => sum + i.quantity * i.price, 0);
    const hide = showCart ? '' : 'hide';
    const cartPosition = showCheckout ? 'at-checkout' : 'fixed-upper-right';

    const emptyMessage = (
      <div id="empty-msg">
        Your cart is currently empty, but your stomach doesn't have to be! 
        Add some items and come back here to checkout.
      </div>
    );

    return (
      <div id="cart" className={`cart-container ${cartPosition} ${hide}`}>
        <h3>YOUR CART</h3>
        <div id="cart-items-container">
          {items.length ? this.renderCartItems(items) : emptyMessage}
        </div>    
        <div id="total">
          <span>Total</span>
          <span>{`$ ${total.toFixed(2)}`}</span>
        </div>
        <button id="place-order" onClick={this.handleCheckout}>
          PLACE ORDER
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);