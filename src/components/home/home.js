import React, { Component, Fragment } from 'react';
import Form from '../form/form';
import FormButton from '../formButton/formButton';
import Catalog from '../catalog/catalog';
import BasketButton from '../basketButton/basketButton';

import './home.css';

class Home extends Component {
  render() {   
    return (
      <Fragment>
        <header className="homeHeader">
          <BasketButton inBasket={false}/>
          <FormButton>{<Form />}</FormButton>
        </header>
        <Catalog />
      </Fragment>
    );
  }
}

export default Home;