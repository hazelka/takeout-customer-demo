import React from 'react';
import { connect } from 'react-redux';
import './Navigation.css';
import { toggleCart } from '../actions/cartActions';

const mapStateToProps = (state) => ({
  count: state.cart.count
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart())
});

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addingItem: false
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.count !== prevProps.count && !this.state.addingItem) {
      this.setState({ addingItem: true });
      setTimeout(() => this.setState({ addingItem: false }), 200);
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > window.innerHeight - 100) {
      document.querySelector("nav").className = "scroll ls-4";
    } else {
      document.querySelector("nav").className = "ls-4";
    }
  };

  render() {
    return (
      <nav className="navbar ls-4">
        <span id="name">Gourmet au Lorem</span>
        <ul>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#contact">Contact</a></li>
          <span onClick={() => this.props.toggleCart()}>
            <i id="cart-icon" className="fa fa-shopping-cart"></i>
            <span 
              id="cart-count" 
              className={this.state.addingItem ? "enlarge" : ""}
              onChange={this.handleAddItemAction}
            >
              {this.props.count}
            </span>
          </span>
        </ul>
      </nav>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);