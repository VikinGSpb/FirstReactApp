import React, { Component, Fragment } from 'react';
//import Checkbox from './checkbox';
import ListItem from './listItem';

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

  sortCatalogByName = () => {
    const { result } = this.state;
    result.sort((a, b)=>{
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;  
    });
    this.setState({ result });
  }

  sortCatalogByAbv = () => {
    const { result } = this.state;
    result.sort((a, b)=>{
      if (a.abv > b.abv) {
        return 1;
      }
      if (a.abv < b.abv) {
        return -1;
      }
      return 0;  
    });
    this.setState({ result });
  }

  sortCatalogByIbu = () => {
    const { result } = this.state;
    result.sort((a, b)=>{
      if (a.ibu > b.ibu) {
        return 1;
      }
      if (a.ibu < b.ibu) {
        return -1;
      }
      return 0;  
    });
    this.setState({ result });
  }

  render() {
    const { result } = this.state;

    return (
      <Fragment>
        <br />
        <button onClick={this.sortCatalogByName}>Sort By name</button>
        <button onClick={this.sortCatalogByAbv}>Sort By abv</button>
        <button onClick={this.sortCatalogByIbu}>Sort By ibu</button>
        <ul>
          {result.map(({ id, name, description, abv, ibu, image_url }) => 
            <ListItem key={id} name={name} description={description} abv={abv} ibu={ibu} image_url={image_url} />
          )}
        </ul>
      </Fragment>
    )
  }
}

export default Catalog;