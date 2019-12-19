import React, { Component, Fragment } from 'react';
import BasketButton from './basketButton';
import { idsArr } from './listItem';

class Basket extends Component {
  state = {
    result: idsArr,
  }

  render() {
    const {result} = this.state;

    return (
      <Fragment>
        <BasketButton inBasket={true}/>
        <h1>This is the basket</h1>
        <ul>
          {result.map((x) => x)}
        </ul>
      </Fragment>
    );
  }
}

export default Basket;