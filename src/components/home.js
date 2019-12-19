import React, { Component, Fragment } from 'react';
import Form from './form';
import FormButton from './formButton';
import Catalog from './catalog';
import BasketButton from './basketButton';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <FormButton>{<Form />}</FormButton>
        <BasketButton inBasket={false}/>
        <Catalog />
      </Fragment>
    );
  }
}

export default Home;