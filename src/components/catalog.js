import React, { Component, Fragment } from 'react';

const PATH = 'https://api.punkapi.com/v2/beers';


class Catalog extends Component {
  state = {
    result: [],
  }

  componentDidMount() {
    fetch(`${PATH}`)
    .then(res => res.json())
    .then(result => this.setCatalog(result))
    .catch(e => console.log(e));
  }

  setCatalog = result => {
    this.setState({ result })
  }

  render() {
    const { result } = this.state;

    return (
      <Fragment>
        <ul>
          {result.map(({ id, name, description, abv, ibu, image_url }) => 
            <li key={id} style={{listStyleType: 'none'}}>
              <div style={{width: '100px', height: '200px', background: `url(${image_url}) no-repeat`, backgroundSize: 'contain'}}></div>
              <p>name: {name}</p>
              <p>description: {description}</p>
              <p>abv: {abv}</p>
              <p>ibu: {ibu}</p>
            </li>
          )}
        </ul>
      </Fragment>
    )
  }
}

export default Catalog;