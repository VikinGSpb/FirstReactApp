import React, { Component } from 'react';

export let idsArr = [];

export class ListItem extends Component {
  state = {
    isChecked: false,
  }

  componentDidMount() {
    this.ChangeInput();
  }

  ChangeInput = () => {
    const { id, name, description, abv, ibu, image_url } = this.props;
    const { isChecked } = this.state;
    isChecked ? this.setState({isChecked: false}) : this.setState({isChecked: true});
    if(isChecked) {
      idsArr.push(
        <li key={id} style={{listStyleType: 'none'}}>
        <div style={{width: '100px', height: '200px', background: `url(${image_url}) no-repeat`, backgroundSize: 'contain'}}></div>
        <p>name: {name}</p>
        <p>description: {description}</p>
        <p>abv: {abv}</p>
        <p>ibu: {ibu}</p>
        </li>)
    }
  }

  render() {
    const { name, description, abv, ibu, image_url } = this.props;
    const { needCheck } = this.props;
    if(needCheck === true) 
      return (
        <li style={{listStyleType: 'none'}}>
          <div style={{width: '100px', height: '200px', background: `url(${image_url}) no-repeat`, backgroundSize: 'contain'}}></div>
          <p>name: {name}</p>
          <p>description: {description}</p>
          <p>abv: {abv}</p>
          <p>ibu: {ibu}</p>
          <input type="checkbox" onChange={this.ChangeInput} />
        </li>
      );
    else 
      return (
        <li style={{listStyleType: 'none'}}>
          <div style={{width: '100px', height: '200px', background: `url(${image_url}) no-repeat`, backgroundSize: 'contain'}}></div>
          <p>name: {name}</p>
          <p>description: {description}</p>
          <p>abv: {abv}</p>
          <p>ibu: {ibu}</p>
        </li> );
  }
}

//export default ListItem;