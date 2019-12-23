import React, { Component } from 'react';
import store from '../store';
import {setNewHomeState, setNewClickedCheckboxes, setNewBasketState, addItemToHomeState, addItemToClickedCheckboxes, 
  addItemToBasketState, removeItemFromHomeState, removeItemFromClickedCheckboxes, removeItemFromBasketState} 
  from '../actions/basicActions';

class ListItem extends Component {
  //_isMounted = false;

  state = {
    isChecked: this.props.Checked,
  }

  /*componentDidMount() {
    //this._isMounted = true;
    this.ChangeInput();
  }*/

/*  deleteEl = () => {
    const { element } = this.props;
    const { basketArray, resultArray, searchArray } = this.props;
    let idx;
    basketArray.forEach((x, i) => {
      if(x.id === element.id) {
        idx = i;
      }
    });
    basketArray.splice(idx, 1);
    console.log(basketArray);
  }*/

  ChangeInput = () => {
    const { basketArray, resultArray, searchArray } = this.props;
    const { element } = this.props;
    let { isChecked } = this.state;
    //isChecked ? this.setState({isChecked: false}) : this.setState({isChecked: true});
    if(isChecked === false) {
      this.setState({isChecked: true});
      store.dispatch(addItemToClickedCheckboxes(element));
      basketArray.push(element);
      console.log(basketArray,store.getState());
    } else if(isChecked === true) {
      this.setState({isChecked: false});
      //let idx;
      //basketArray.forEach((x, i) => {
      store.getState().clickedCheckboxes.forEach((x, i) => {
        if(x.id === element.id) {
          //idx = i;
          store.dispatch(removeItemFromClickedCheckboxes(element));
        }
      });
      //basketArray.splice(idx, 1);
      console.log(basketArray,store.getState());
    }
  }

  /*componentWillUnmount() {
    this._isMounted = false;
  }*/

  render() {
    const { inBasket, name, description, abv, ibu, image_url } = this.props;
    const { children } = this.props;
    const { element } = this.props;
    let flag = false;
    store.getState().clickedCheckboxes.forEach((el) => {if(el.id === element.id) flag = true;})
    if(inBasket === false && flag === false)
      return (
        <li style={{listStyleType: 'none'}}>
          <div style={{width: '100px', height: '200px', background: `url(${image_url}) no-repeat`, backgroundSize: 'contain'}}></div>
          <p>name: {name}</p>
          <p>description: {description}</p>
          <p>abv: {abv}</p>
          <p>ibu: {ibu}</p>
          <input type="checkbox" onClick={this.ChangeInput} />
        </li>
      );
    if(inBasket === false && flag === true)
      return (
        <li style={{listStyleType: 'none'}}>
          <div style={{width: '100px', height: '200px', background: `url(${image_url}) no-repeat`, backgroundSize: 'contain'}}></div>
          <p>name: {name}</p>
          <p>description: {description}</p>
          <p>abv: {abv}</p>
          <p>ibu: {ibu}</p>
          <input type="checkbox" onChange={this.ChangeInput} checked/>
        </li>
      );
    if(inBasket === true)
      return (
        <li style={{listStyleType: 'none'}}>
          <div style={{width: '100px', height: '200px', background: `url(${image_url}) no-repeat`, backgroundSize: 'contain'}}></div>
          <p>name: {name}</p>
          <p>description: {description}</p>
          <p>abv: {abv}</p>
          <p>ibu: {ibu}</p>
          {children}
        </li>
      );
  }
}

//<button onClick={this.deleteEl}>DELETE</button>

export default ListItem;