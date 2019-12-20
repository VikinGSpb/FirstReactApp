import React, { Component, Fragment } from 'react';
import ListItem from './listItem';

const PATH = 'https://api.punkapi.com/v2/beers';

class Catalog extends Component {
  state = {
    result: [],
    searchResult: [],
    inputText: '',
  }

  componentDidMount() {
    let {resultArray} = this.props;
    fetch(`${PATH}`)
    .then(res => res.json())
    .then(result => {resultArray = result; this.setState({result: resultArray});})/*ResultArray.CopyArr(result);
      console.log(ResultArray,ResultArray.ReturnState());
      this.setState({result: ResultArray.ReturnState()})})*/
    .catch(e => console.log(e));
    this.handleChange();
  }

 /* componentWillUnmount() {
    this.setState({searchResult: []});
  }*/

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
    const { result } = this.state;
    const { inputText } = this.state;
    const { searchResult } = this.state;
    let interArr = [];
    result.map((x) => {
      if(`${x.name}`.includes(inputText)) {
        interArr.push(x);
      }
    })
    this.setState({searchResult: interArr});
    console.log(searchResult,interArr,inputText);
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

  inputRef = React.createRef();

  render() {
    const { result } = this.state;
    const {basketArray, resultArray, searchArray} = this.props;
    const { searchResult } = this.state;

    if(searchResult.length !== 0) {
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
          <button onClick={this.handleClick}>SEARCH</button>
          <ul> 
            {result.map((el) =>
              <ListItem inBasket={false} element={el} key={el.id} resultArray={resultArray} searchArray={searchArray} basketArray={basketArray} 
                id={el.id} name={el.name} description={el.description} abv={el.abv} ibu={el.ibu} image_url={el.image_url} />
            )}
          </ul>
        </Fragment>
      );
    }
  }
}

export default Catalog;