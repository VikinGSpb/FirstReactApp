import React, { Component, Fragment } from 'react';
import Form from './form';
import FormButton from './formButton';
import Catalog from './catalog';
import BasketButton from './basketButton';
//import CatalogContainer from '../containers/catalogContainer';

class Home extends Component {
  render() {
    const {basketArray, resultArray, searchArray} = this.props;
    
    return (
      <Fragment>
        <FormButton>{<Form />}</FormButton>
        <BasketButton inBasket={false}/>
        <Catalog resultArray={resultArray} searchArray={searchArray} basketArray={basketArray} />
      </Fragment>
    );
  }
}
//<CatalogContainer resultArray={resultArray} searchArray={searchArray} basketArray={basketArray}/>
//<Catalog resultArray={resultArray} searchArray={searchArray} basketArray={basketArray} />
export default Home;