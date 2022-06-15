import React from 'react';
import Navigation from '../containers/Navigation';
import Header from './Header';
import Menu from '../containers/Menu';
import Cart from '../containers/Cart';
import Contact from './Contact';
import Checkout from '../containers/Checkout';
import './App.css';

const App = () => {
  return (
    <>
      <Navigation />
      <Header />
      <Menu />
      <Contact />
      <Checkout/>
      <Cart />
      <footer>
        Code by Hazel
      </footer>
    </>
  );
}

export default App;
