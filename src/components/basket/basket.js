import React, { Component, Fragment } from 'react';
import BasketButton from '../basketButton/basketButton';
import ListItem from '../listItem/listItem';

import store from '../../store';
import {setNewClickedCheckboxes} from '../../actions/basicActions';

import './basket.css';

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
    result.forEach((el, index) => {
      if(el.id === id) {
        idx = index;
      }
    });
    interArr.splice(idx, 1);
    store.dispatch(setNewClickedCheckboxes(interArr));
    this.setState( {result: store.getState().clickedCheckboxes});
    console.log(result, store.getState());
  }

  render() {
    const {result} = this.state;

    return (
      <Fragment>
        <div className="head">This is the basket</div>
        <BasketButton inBasket={true}/>
        <ul>
          {result.map((el) =>
            <ListItem inBasket={true} element={el} key={el.id} id={el.id} name={el.name} 
              description={el.description} abv={el.abv} ibu={el.ibu} image_url={el.image_url}>
              <button className="deleteButton" onClick={this.deleteItem.bind(el,el.id)}>DELETE</button>
            </ListItem>
          )}
        </ul>
      </Fragment>
    );
  }
}

export default Basket;