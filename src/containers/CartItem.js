import React from 'react';
import { connect } from 'react-redux';
import './CartItem.css';
import { changeQuantity, removeItem } from '../actions/cartActions';

const mapDispatchToProps = (dispatch) => ({
  changeQuantity: (id, qty) => dispatch(changeQuantity(id, qty)),
  removeItem: (id) => dispatch(removeItem(id))
});

class CartItem extends React.Component {
  render() {
    const { id, name, quantity, price } = this.props;

    return (
      <div className="cart-item-container">
      <div className="cart-item-info">
        <span className="cart-item-name">{name}</span>
        <span>{`$ ${(price * quantity).toFixed(2)}`}</span>
      </div>
      <div className="cart-item-edit">
        <span className="quantity">Quantity</span>
        <select 
          value={quantity} 
          onChange={(e) => this.props.changeQuantity(id, +e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <span className="seperator">|</span>
        <button 
          className="remove-btn" 
          onClick={() => this.props.removeItem(id)}
        >
          Remove
        </button>
      </div>
    </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(CartItem);