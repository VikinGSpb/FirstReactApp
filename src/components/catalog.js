import React, { Component, Fragment } from 'react';
import ListItem from './listItem';
import store from '../store';

import {setNewHomeState, setNewClickedCheckboxes, setNewBasketState, addItemToHomeState, addItemToClickedCheckboxes, 
  addItemToBasketState, removeItemFromHomeState, removeItemFromClickedCheckboxes, removeItemFromBasketState}
  from '../actions/basicActions';

const PATH = 'https://api.punkapi.com/v2/beers';

class Catalog extends Component {
  fetchData = (page, resultArray) => {
    if(resultArray)
    fetch(`${PATH}?page=${page+1}`)
    .then(res => res.json())
    .then(result => {resultArray.splice(0,resultArray.length); result.forEach(x=>resultArray.push(x)); 
      this.setState({result: resultArray}); store.dispatch(setNewHomeState(result)); console.log(resultArray,this.state.result,store.getState());})
    .catch(e => console.log(e));
    else 
    fetch(`${PATH}?page=${page+1}`)
    .then(res => res.json())
    .then(result => {this.setState({result: result}); store.dispatch(setNewHomeState(result)); 
      console.log(resultArray,this.state.result,store.getState());}).catch(e => console.log(e));
  }

  state = {
    result: this.fetchData(0), //[],
    searchResult: [],
    inputText: '',
    page: 0,
  }

  componentDidMount() {
    const {page} = this.state;
    let {resultArray} = this.props;
    this.fetchData(page, resultArray);
  }

  prevPage = () => {
    const {page} = this.state;
    if(page > 0) {
      this.setState({page: page - 1});
      console.log(page);
      let {resultArray} = this.props;
      this.fetchData(page, resultArray);
    }
  }

  nextPage = () => {
    const {page} = this.state;
    this.setState({page: page + 1});
    console.log(page);
    let {resultArray} = this.props;
    this.fetchData(page, resultArray);
  }

  handleChange = () => {
    this.setState({
      inputText: this.inputRef.current.value
    });
    /*const { result } = this.state;
    const { inputText } = this.state;
    const { searchResult } = this.state;
    let interArr = [];
    this.setState({
      inputText: this.inputRef.current.value,
    });
    result.map((x) => {
      if(`${x.name}`.includes(inputText)) {
        //this.setState({searchResult: searchResult.push(x)});
        //console.log(searchResult);
        interArr.push(x);
      }
    })
    this.setState({searchResult: interArr});*/
  }

  handleClick = () => {
    /*const { result } = this.state;
    const { inputText } = this.state;
    const { searchResult } = this.state;
    let interArr = [];
    result.map((x) => {
      if(`${x.name}`.includes(inputText)) {
        interArr.push(x);
      }
    })
    this.setState({searchResult: interArr});
    console.log(searchResult,interArr,inputText);*/
    const {inputText, page} = this.state;
    const { searchResult, resultArray } = this.state;
    if(inputText !== '') {
    fetch(`${PATH}?beer_name=${inputText}`)
    .then(res => res.json())
    .then(result => {this.setState({searchResult: result.slice(0)}); store.dispatch(setNewHomeState(result)); 
      console.log(store.getState());})
    .catch(e => console.log(e));
    } else this.fetchData(page, resultArray);
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
    store.dispatch(setNewHomeState(result));
    console.log(store.getState());
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
    store.dispatch(setNewHomeState(result));
    console.log(store.getState());
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
    store.dispatch(setNewHomeState(result));
    console.log(store.getState());
  }

  inputRef = React.createRef();

  render() {
    const { result } = this.state;
    const {basketArray, resultArray, searchArray} = this.props;
    const { searchResult } = this.state;

    /*if(searchResult.length !== 0) {
    return (
      <Fragment>
        <br />
        <button onClick={this.sortCatalogByName}>Sort By name</button>
        <button onClick={this.sortCatalogByAbv}>Sort By abv</button>
        <button onClick={this.sortCatalogByIbu}>Sort By ibu</button> <br/>
        <label>
          Search by name:<input ref={this.inputRef} onChange={this.handleChange} type="text" />
        </label>
        <button onClick={this.handleClick}>SEARCH</button>
        <ul> 
          {searchResult.map((el) =>
            <ListItem inBasket={false} element={el} key={el.id} resultArray={resultArray} searchArray={searchArray} basketArray={basketArray} 
              id={el.id} name={el.name} description={el.description} abv={el.abv} ibu={el.ibu} image_url={el.image_url} />
          )}
        </ul>
      </Fragment>
    );
    } else {
      return (
        <Fragment>
          <br />
          <button onClick={this.sortCatalogByName}>Sort By name</button>
          <button onClick={this.sortCatalogByAbv}>Sort By abv</button>
          <button onClick={this.sortCatalogByIbu}>Sort By ibu</button> <br/>
          <label>
            Search by name:<input ref={this.inputRef} onChange={this.handleChange} type="text" />
          </label>
          <button onClick={this.handleClick}>SEARCH</button><br/>
          <button onClick={this.prevPage}>Prev</button>
          <button onClick={this.nextPage}>Next</button>
          <ul> 
            {result.map((el) => {
              let checked = false; 
              store.getState().clickedCheckboxes.forEach((checkbox) => {if(checkbox.id === el.id) checked = true;})
              return <ListItem Checked={checked} inBasket={false} element={el} key={el.id} resultArray={resultArray} searchArray={searchArray} 
              basketArray={basketArray} id={el.id} name={el.name} description={el.description} abv={el.abv} 
              ibu={el.ibu} image_url={el.image_url} /> }
            )}
          </ul>
        </Fragment>
      );
    }*/

    return (
      <Fragment>
        <br />
        <button onClick={this.sortCatalogByName}>Sort By name</button>
        <button onClick={this.sortCatalogByAbv}>Sort By abv</button>
        <button onClick={this.sortCatalogByIbu}>Sort By ibu</button> <br/>
        <label>
          Search by name:<input ref={this.inputRef} onChange={this.handleChange} type="text" />
        </label>
        <button onClick={this.handleClick}>SEARCH</button><br/>
        <button onClick={this.prevPage}>Prev</button>
        <button onClick={this.nextPage}>Next</button>
        <ul> 
          {store.getState().homeState.map((el) => {
            let checked = false; 
            store.getState().clickedCheckboxes.forEach((checkbox) => {if(checkbox.id === el.id) checked = true;})
            return <ListItem Checked={checked} inBasket={false} element={el} key={el.id} resultArray={resultArray} searchArray={searchArray} 
            basketArray={basketArray} id={el.id} name={el.name} description={el.description} abv={el.abv} 
            ibu={el.ibu} image_url={el.image_url} /> }
          )}
        </ul>
      </Fragment>
    );
  }
}

export default Catalog;