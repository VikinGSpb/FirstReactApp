import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BasketButton extends Component {
  render() {
    const {inBasket} = this.props;
    if(!inBasket) {
      return (
        <Link to='/basket' style={{border: '1px solid black', color:'red'}}>GO TO BASKET</Link>
      );
    } else {
      return (
        <Link to='/' style={{border: '1px solid black', color:'red'}}>EXIT BASKET</Link>
      );
    }
  }
}

export default BasketButton;