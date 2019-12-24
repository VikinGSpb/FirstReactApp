import React, { Component, Fragment } from 'react';
import Form from '../form/form';
import FormButton from '../formButton/formButton';
import Catalog from '../catalog/catalog';
import BasketButton from '../basketButton/basketButton';

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