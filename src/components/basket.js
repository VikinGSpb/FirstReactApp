import React, { Component, Fragment } from 'react';
import BasketButton from './basketButton';
import ListItem from './listItem';

import store from '../store';
import {setNewClickedCheckboxes} from '../actions/basicActions';

class Basket extends Component {
  state = {
    result: [],
  }

  componentDidMount() {
    this.setState( {result: store.getState().clickedCheckboxes});
  }

  deleteItem = (id) => {
    const {result} = this.state;
    let interArr = result;
    let idx;
    result.forEach((x, i) => {
      if(x.id === id) {
        idx = i;
      }
    });
    interArr.splice(idx, 1);
    store.dispatch(setNewClickedCheckboxes(interArr));
    this.setState( {result: store.getState().clickedCheckboxes});
    console.log(result, store.getState());
  }

  render() {
    const {result} = this.state;
    const {basketArray, resultArray, searchArray} = this.props;

    return (
      <Fragment>
        <BasketButton inBasket={true}/>
        <h1>This is the basket</h1>
        <ul>
          {result.map((el) =>
            <ListItem inBasket={true} element={el} key={el.id} resultArray={resultArray} searchArray={searchArray} basketArray={basketArray} 
              id={el.id} name={el.name} description={el.description} abv={el.abv} ibu={el.ibu} image_url={el.image_url}>
              <button onClick={this.deleteItem.bind(el,el.id)}>DELETE</button>
            </ListItem>
          )}
        </ul>
      </Fragment>
    );
  }
}

export default Basket;