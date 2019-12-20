import React, { Component, Fragment } from 'react';
import ListItem from './listItem';

const PATH = 'https://api.punkapi.com/v2/beers';

class Catalog extends Component {
  state = {
    result: [],
  }

  componentDidMount() {
    let {resultArray} = this.props;
    fetch(`${PATH}`)
    .then(res => res.json())
    .then(result => {resultArray = result; this.setState({result: resultArray});})/*ResultArray.CopyArr(result);
      console.log(ResultArray,ResultArray.ReturnState());
      this.setState({result: ResultArray.ReturnState()})})*/
    .catch(e => console.log(e));
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
    const {basketArray, resultArray, searchArray} = this.props;

    return (
      <Fragment>
        <br />
        <button onClick={this.sortCatalogByName}>Sort By name</button>
        <button onClick={this.sortCatalogByAbv}>Sort By abv</button>
        <button onClick={this.sortCatalogByIbu}>Sort By ibu</button>
        <ul>
          {result.map((el) =>
            <ListItem inBasket={false} element={el} key={el.id} resultArray={resultArray} searchArray={searchArray} basketArray={basketArray} 
              id={el.id} name={el.name} description={el.description} abv={el.abv} ibu={el.ibu} image_url={el.image_url} />
          )}
        </ul>
      </Fragment>
    )
  }
}

export default Catalog;