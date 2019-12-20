import React, { Component } from 'react';

class ListItem extends Component {
  //_isMounted = false;

  state = {
    isChecked: false,
  }

  componentDidMount() {
    //this._isMounted = true;
    this.ChangeInput();
  }

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
    isChecked ? this.setState({isChecked: false}) : this.setState({isChecked: true});
    if(isChecked) {
      basketArray.push(element);
      console.log(basketArray);
    } else {
      let idx;
      basketArray.forEach((x, i) => {
        if(x.id === element.id) {
          idx = i;
        }
      });
      basketArray.splice(idx, 1);
      console.log(basketArray);
    }
  }

  /*componentWillUnmount() {
    this._isMounted = false;
  }*/

  render() {
    const { inBasket, name, description, abv, ibu, image_url } = this.props;
    const { children } = this.props;
    if(inBasket === false)
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