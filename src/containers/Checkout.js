import React from "react";
import { connect } from "react-redux"
import './Checkout.css';

import { handleOnChange, hideCheckout} from '../actions/checkoutActions';
import { toggleCart } from "../actions/cartActions";

const mapStateToProps = (state) => ({
  fname: state.checkout.fname,
  lname: state.checkout.lname,
  email: state.checkout.email,
  phone: state.checkout.phone,
  error: state.checkout.error,
  showCheckout: state.checkout.showCheckout
});

const mapDispatchToProps = (dispatch) => ({
  hideCheckout: () => dispatch(hideCheckout()),
  hideCart: () => dispatch(toggleCart()),
  handleOnChange: (name, value) => dispatch(handleOnChange(name, value))
});

class Checkout extends React.Component {
  closeCheckout = () => {
    this.props.hideCheckout();
    this.props.hideCart();
  }

  render() {
    const { fname, lname, email, phone, error, showCheckout } = this.props;
    const errorClassName = `error-info ${error.length ? '' : 'hide'}`;

    return (
      <div id="checkout" className={showCheckout ? '' : 'hide'}>
        <div className="checkout-bg" onClick={this.closeCheckout}> 
        </div>
        <div className="checkout-container">
          <div id="customer-info">
            <div className="checkout-header">
              <h3>CHECKOUT</h3>
              <span 
                className="continue-shopping"
                onClick={this.closeCheckout}
              >
                continue shopping
              </span>
            </div>
            <div className="input-item">
              <input
                id="fname" 
                type="text"
                value={fname}
                placeholder="First Name"
                onChange={e => this.props.handleOnChange('fname', e)}
              ></input><br/>
            </div>
            <div className="input-item">
              <input
                id="lname" 
                type="text"
                value={lname}
                placeholder="Last Name"
                onChange={e => this.props.handleOnChange('lname', e)}
              ></input><br/>
            </div>
            <div className="input-item">
              <input 
                id="phone"
                type="text"
                value={phone}
                placeholder="Phone XXX-XXX-XXXX"
                onChange={e => this.props.handleOnChange('phone', e)}
              ></input><br/>
            </div>
            <div className="input-item">
              <input
                id="email" 
                type="email"
                value={email}
                placeholder="Email"
                onChange={e => this.props.handleOnChange('email', e)}
              ></input><br/>
            </div>
            <div className={errorClassName}>
              {this.props.error.map((e) => <p key={e}>{e}</p>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);