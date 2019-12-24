import React, { Component } from 'react';
import store from '../../store';
import { addItemToClickedCheckboxes, removeItemFromClickedCheckboxes } from '../../actions/basicActions';

class ListItem extends Component {
  state = {
    isChecked: this.props.Checked,
  }

  ChangeInput = () => {
    const { element } = this.props;
    let { isChecked } = this.state;
    if(isChecked === false) {
      this.setState({isChecked: true});
      store.dispatch(addItemToClickedCheckboxes(element));
    } else if(isChecked === true) {
      this.setState({isChecked: false});
      store.getState().clickedCheckboxes.forEach((el) => {
        if(el.id === element.id) {
          store.dispatch(removeItemFromClickedCheckboxes(element));
        }
      });
    }
  }

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

export default ListItem;