import React from "react";
import { connect } from 'react-redux';
import MenuItem from "../components/MenuItem";
import { sampleMenu } from "../sampleMenu";
import './Menu.css';
import { addToCart } from "../actions/cartActions";

const mapDispatchToProps = (dispatch) => ({
  addToCart: (id, name, price) => dispatch(addToCart(id, name, price))
});

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: []
    };
  }

/**
 * For demonstration of the front end design to be hosted on github public
 * repository, sensitive information is removed. Replace with WebSocket Server 
 * URL in production.
 */
  componentDidMount() {
    // fetch(/** replace with WebSocket Server URL */)
    //   .then(response => response.json())
    //   .then(menu => this.setState({ menu }))
    //   .catch(error => {
    //     console.log(error);
    //     this.setState({ menu: sampleMenu });
    //   });
    this.setState({ menu: sampleMenu });
  }

  render() {
    return (
      <section id="menu">
        <h2 className="ls-4">Our Menu</h2>
        <p className="section-caption">Modern dishes that capture the flavors of the season</p>
        <div id="menu-container">
          {
            this.state.menu.map((item) => (
              <MenuItem
                key={item.id} 
                name={item.name} 
                desc={item.description} 
                price={item.price}
                /**
                 * PostgreSQL database for this project is designed to hold image URL
                 * The code below needs to be fixed before actual production
                 */
                url={require('../assets' + item.url)} // Replace with URL from database
                addToCart={() => {
                  this.props.addToCart(item.id, item.name, +item.price.slice(1))
                }}
              />
            ))
          }
        </div>
      </section>
    );
  }
}

export default connect(null, mapDispatchToProps)(Menu);