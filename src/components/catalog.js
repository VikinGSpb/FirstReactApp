import React, { Component, Fragment } from 'react';
import ListItem from './listItem';
import store from '../store';
import { connect } from 'react-redux';
import './catalog.css';

import { setNewHomeState, setNewClickedCheckboxes, setNewBasketState, addItemToHomeState, addItemToClickedCheckboxes, 
  addItemToBasketState, removeItemFromHomeState, removeItemFromClickedCheckboxes, removeItemFromBasketState, 
  changeSearchText, incPage, decPage, changePage } from '../actions/basicActions';
import reducer from '../reducers/reducer';

import Pagination from './pagination';

const PATH = 'https://api.punkapi.com/v2/beers';
let active = 1;

class Catalog extends Component {

  fetchData = (page) => {//, resultArray) => {
    /*if(resultArray)
    fetch(`${PATH}?page=${page+1}`)
    .then(res => res.json())
    .then(result => {resultArray.splice(0,resultArray.length); result.forEach(x=>resultArray.push(x)); 
      this.setState({result: resultArray}); store.dispatch(setNewHomeState(result)); console.log(resultArray,this.state.result,store.getState());})
    .catch(e => console.log(e));
    else */
    fetch(`${PATH}?page=${page+1}`)
    .then(res => res.json())
    .then(result => {//this.setState({result: result}); 
      store.dispatch(setNewHomeState(result)); store.dispatch(changePage(page));console.log(store.getState(),this.props.searchText);})
    .catch(e => console.log(e));
  }

  /*state = {
    result: [],
    searchResult: [],
    inputText: store.getState().searchText,//this.props.searchText,//'',
    page: 0,
  }*/

  /*getTextFromStore(){
    return store.getState().searchText;
  }

  updateTextFromStore = () => {
    const currentState = this.getTextFromStore();
    
    if (this.state.inputText !== currentState) {
      this.setState({inputText: currentState});
    }
  }*/

  inputRef = React.createRef();
  firstPage = React.createRef();
  secondPage = React.createRef();
  thirdPage = React.createRef();
  fourthPage = React.createRef();
  pages = React.createRef();

  clickPages = (e) => {
    switch(e.target.getAttribute('data-name')) {
      case '1': 
        this.fetchData(0); 
        active = 1;
        break;
      case '2': 
        this.fetchData(1); 
        active = 2;
        break;
      case '3': 
        this.fetchData(2); 
        active = 3;
        break;
      case '4': 
        this.fetchData(3); 
        active = 4;
        break;
      default: break;
    }
  }

  componentDidMount() {
    //this.unsubscribeStore = store.subscribe(this.updateStateFromStore);
    //const unsubscribe = store.subscribe(() => console.log(store.getState()));
    store.dispatch(changeSearchText(this.inputRef.current.value));
    //const {page} = this.state;
    const {page} = this.props;
    //let {resultArray} = this.props;
    this.fetchData(page);//, resultArray);
    /*this.setState({
      inputText: store.getState().searchText//this.inputRef.current.value
    });*/
    //const {inputText} = this.state;
    const {searchText} = this.props;
    //if(inputText !== '') {
    if(searchText !== '') {
      fetch(`${PATH}?beer_name=${searchText}`)//inputText}`)
      .then(res => res.json())
      .then(result => {//this.setState({result: result.slice(0)}); 
        store.dispatch(setNewHomeState(result)); console.log(store.getState());})
      .catch(e => console.log(e));
    } else this.fetchData(page);
    //unsubscribe();
  }

 /* componentWillUnmount() {
    this.unsubscribeStore();
  }*/

  prevPage = () => {
    const {page} = this.props;//state;
    //if(page > 0) {
      //this.setState({page: page - 1});
      //console.log(page);
      store.dispatch(decPage(page));
      //let {resultArray} = this.props;
      this.fetchData(store.getState().page);//, resultArray);
    //}
    active -= 1;
  }

  nextPage = () => {
    const {page} = this.props;//state;
    //this.setState({page: page + 1});
    //console.log(page);
    //let {resultArray} = this.props;
    store.dispatch(incPage(page));
    this.fetchData(store.getState().page);//, resultArray);
    active += 1;
  }

  handleChange = () => {
    /*this.setState({
      inputText: this.inputRef.current.value
    });*/
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
    store.dispatch(changeSearchText(this.inputRef.current.value));
    /*this.setState({
      inputText: store.getState().searchText//this.inputRef.current.value
    });*/
    const {searchText, page} = this.props;//{inputText, page} = this.state;
    if(searchText !== '') {//inputText !== '') {
      fetch(`${PATH}?beer_name=${searchText}`)//inputText}`)
      .then(res => res.json())
      .then(result => {//this.setState({result: result.slice(0)}); 
        store.dispatch(setNewHomeState(result)); console.log(store.getState());})
      .catch(e => console.log(e));
    } else this.fetchData(page);
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
    //const {inputText, page} = this.state;
    const {searchText, page} = this.props;
    //const { searchResult, resultArray } = this.state;
    store.dispatch(changeSearchText(this.inputRef.current.value));
    /*this.setState({
      inputText: store.getState().searchText//this.inputRef.current.value
    });*/
    if(searchText !== '') {//inputText !== '') {
    fetch(`${PATH}?beer_name=${store.getState().searchText}`)//inputText}`)
    .then(res => res.json())
    .then(result => {//this.setState({searchResult: result.slice(0)}); 
    store.dispatch(setNewHomeState(result)); console.log(store.getState());})
    .catch(e => console.log(e));
    } else this.fetchData(page);//, resultArray);
  }

  sortCatalogByName = () => {
    //const { result } = this.state;
    const { homeState } = this.props;
    /*result*/homeState.sort((a, b)=>{
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;  
    });
    //this.setState({ result });
    store.dispatch(setNewHomeState(homeState));//result));
    console.log(store.getState());
  }

  sortCatalogByAbv = () => {
    //const { result } = this.state;
    const { homeState } = this.props;
    /*result*/homeState.sort((a, b)=>{
      if (a.abv > b.abv) {
        return 1;
      }
      if (a.abv < b.abv) {
        return -1;
      }
      return 0;  
    });
    //this.setState({ result });
    store.dispatch(setNewHomeState(homeState));//result));
    console.log(store.getState());
  }

  sortCatalogByIbu = () => {
    //const { result } = this.state;
    const { homeState } = this.props;
    /*result*/homeState.sort((a, b)=>{
      if (a.ibu > b.ibu) {
        return 1;
      }
      if (a.ibu < b.ibu) {
        return -1;
      }
      return 0;  
    });
    //this.setState({ result });
    store.dispatch(setNewHomeState(homeState));//result));
    console.log(store.getState());
  }

  pageClick = () => {
    console.log('aaa');
  }

  render() {
    console.log('props - ' + this.props.searchText);
    //const { result } = this.state;
    //const {basketArray, resultArray, searchArray} = this.props;
    //const { searchResult } = this.state;

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
        <Pagination active={`${active}`} ref={this.pages} onClick={this.clickPages} />
        <button onClick={this.nextPage}>Next</button>
        <ul> 
          {store.getState().homeState.map((el) => {
            let checked = false; 
            store.getState().clickedCheckboxes.forEach((checkbox) => {if(checkbox.id === el.id) checked = true;})
            return <ListItem Checked={checked} inBasket={false} element={el} key={el.id} 
             id={el.id} name={el.name} description={el.description} abv={el.abv} 
            ibu={el.ibu} image_url={el.image_url} /> }
          )}
        </ul>
      </Fragment>
    );
  }
}
// resultArray={resultArray} searchArray={searchArray} basketArray={basketArray}
//export default Catalog;

const mapStateToProps = (state) => {
  return {
    searchText: state.searchText,
    page: state.page,
    homeState: state.homeState,
  }
}

export default connect(mapStateToProps)(Catalog);

/*function mapStateToProps(state, ownProps) {
  return {
    searchText: state.searchText
  };
}

export default connect(mapStateToProps)(Catalog);*/