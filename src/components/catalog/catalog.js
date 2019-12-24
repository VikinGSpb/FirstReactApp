import React, { Component, Fragment } from 'react';
import ListItem from '../listItem/listItem';
import store from '../../store';
import { connect } from 'react-redux';
import './catalog.css';

import { setNewHomeState, changeSearchText, incPage, decPage, changePage } from '../../actions/basicActions';

import Pagination from '../pagination/pagination';

const PATH = 'https://api.punkapi.com/v2/beers';
let active = 1;

class Catalog extends Component {

  fetchData = (page) => {
    fetch(`${PATH}?page=${page+1}`)
    .then(res => res.json())
    .then(result => { store.dispatch(setNewHomeState(result)); store.dispatch(changePage(page)); })
    .catch(e => console.error(e));
  }

  inputRef = React.createRef();
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
    store.dispatch(changeSearchText(this.inputRef.current.value));
    const {page} = this.props;
    this.fetchData(page);
    const {searchText} = this.props;
    if(searchText !== '') {
      fetch(`${PATH}?beer_name=${searchText}`)
      .then(res => res.json())
      .then(result => { store.dispatch(setNewHomeState(result)); })
      .catch(e => console.error(e));
    } else this.fetchData(page);
  }

  prevPage = () => {
    const {page} = this.props;
    if(page > 0) {
      store.dispatch(decPage(page));
      this.fetchData(store.getState().page);
      active -= 1;
    }
  }

  nextPage = () => {
    const {page} = this.props;
    if(page < 3) {
      store.dispatch(incPage(page));
      this.fetchData(store.getState().page);
      active += 1;
    }
  }

  handleChange = () => {
    store.dispatch(changeSearchText(this.inputRef.current.value));
    const {searchText, page} = this.props;
    if(searchText !== '') {
      fetch(`${PATH}?beer_name=${searchText}`)
      .then(res => res.json())
      .then(result => { store.dispatch(setNewHomeState(result)); })
      .catch(e => console.error(e));
    } else this.fetchData(page);
  }

  handleClick = () => {
    const {searchText, page} = this.props;
    store.dispatch(changeSearchText(this.inputRef.current.value));
    if(searchText !== '') {
      fetch(`${PATH}?beer_name=${store.getState().searchText}`)
      .then(res => res.json())
      .then(result => { store.dispatch(setNewHomeState(result)); })
      .catch(e => console.error(e));
    } else this.fetchData(page);
  }

  sortCatalogByName = () => {
    const { homeState } = this.props;
    homeState.sort((a, b)=>{
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;  
    });
    store.dispatch(setNewHomeState(homeState));
  }

  sortCatalogByAbv = () => {
    const { homeState } = this.props;
    homeState.sort((a, b)=>{
      if (a.abv > b.abv) {
        return 1;
      }
      if (a.abv < b.abv) {
        return -1;
      }
      return 0;  
    });
    store.dispatch(setNewHomeState(homeState));
  }

  sortCatalogByIbu = () => {
    const { homeState } = this.props;
    homeState.sort((a, b)=>{
      if (a.ibu > b.ibu) {
        return 1;
      }
      if (a.ibu < b.ibu) {
        return -1;
      }
      return 0;  
    });
    store.dispatch(setNewHomeState(homeState));
  }

  render() {
    return (
      <Fragment>
        <br />
        <button className="sortButton" onClick={this.sortCatalogByName}>Sort By name</button>
        <button className="sortButton" onClick={this.sortCatalogByAbv}>Sort By abv</button>
        <button className="sortButton" onClick={this.sortCatalogByIbu}>Sort By ibu</button> <br/>
        <label className="inputLabel">
          <input placeholder="name" className="searchInput" ref={this.inputRef} onChange={this.handleChange} type="text" />
        </label>
        <button className="inputButton" onClick={this.handleClick}>SEARCH</button><br/>
        <div className="pagContainer">
          <button className="pageButton" onClick={this.prevPage}>&lt;&lt;</button>
          <Pagination active={`${active}`} ref={this.pages} onClick={this.clickPages} />
          <button className="pageButton" onClick={this.nextPage}>&gt;&gt;</button>
        </div>
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

const mapStateToProps = (state) => {
  return {
    searchText: state.searchText,
    page: state.page,
    homeState: state.homeState,
  }
}

export default connect(mapStateToProps)(Catalog);