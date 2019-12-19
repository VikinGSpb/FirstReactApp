import React, { Component } from 'react';

class ListItem extends Component {
  state = {
    isChecked: false,
  }

  componentDidMount() {
    this.ChangeInput();
  }

  ChangeInput = () => {
    const { name } = this.props;
    const { isChecked } = this.state;
    isChecked ? this.setState({isChecked: false}) : this.setState({isChecked: true});
    if(isChecked) console.log(name);
  }

  render() {
    const { name, description, abv, ibu, image_url } = this.props;

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
  }
}

export default ListItem;