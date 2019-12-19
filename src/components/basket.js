import React, { Component, Fragment } from 'react';
import BasketButton from './basketButton';

class Basket extends Component {
  render() {
    return (
      <Fragment>
        <BasketButton inBasket={true}/>
        <h1>This is the basket</h1>
      </Fragment>
    );
  }
}

export default Basket;