import React, { Component } from 'react';
import store from '../../store';
import { addItemToClickedCheckboxes, removeItemFromClickedCheckboxes } from '../../actions/basicActions';

import './listItem.css';

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
        <li className="listItem" style={{listStyleType: 'none'}}>
          <div className="imageContainer" style={{ width: '100px', height: '200px', 
          background: `url(${image_url}) no-repeat`, backgroundSize: 'contain',}}></div>
          <p className="beerName">name: | {name}</p>
          <p className="beerDesc">description: | {description}</p>
          <p className="beerAbv">abv: | {abv}</p>
          <p className="beerIbu">ibu: | {ibu}</p>
          <input className="beerCheckbox" type="checkbox" onClick={this.ChangeInput} />
        </li>
      );
    if(inBasket === false && flag === true)
      return (
        <li className="listItem" style={{listStyleType: 'none'}}>
          <div className="imageContainer" style={{width: '100px', height: '200px', background: `url(${image_url}) no-repeat`, backgroundSize: 'contain'}}></div>
          <p className="beerName">name: | {name}</p>
          <p className="beerDesc">description: | {description}</p>
          <p className="beerAbv">abv: | {abv}</p>
          <p className="beerIbu">ibu: | {ibu}</p>
          <input className="beerCheckbox" type="checkbox" onChange={this.ChangeInput} checked/>
        </li>
      );
    if(inBasket === true)
      return (
        <li className="listItem" style={{listStyleType: 'none'}}>
          <div className="imageContainer" style={{width: '100px', height: '200px', background: `url(${image_url}) no-repeat`, backgroundSize: 'contain'}}></div>
          <p className="beerName">name: | {name}</p>
          <p className="beerDesc">description: | {description}</p>
          <p className="beerAbv">abv: | {abv}</p>
          <p className="beerIbu">ibu: | {ibu}</p>
          {children}
        </li>
      );
  }
}

export default ListItem;