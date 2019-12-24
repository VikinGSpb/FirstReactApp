import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './basketButton.css';

class BasketButton extends Component {
  render() {
    const {inBasket} = this.props;
    if(!inBasket) {
      return (
        <Link className="link" to='/basket'>GO TO BASKET</Link>
      );
    } else {
      return (
        <Link className="link" to='/'>EXIT BASKET</Link>
      );
    }
  }
}

export default BasketButton;