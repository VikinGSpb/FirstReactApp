import React, { Component, Fragment } from 'react';
import BasketButton from './basketButton';
import ListItem from './listItem';

class Basket extends Component {
  state = {
    result: this.props.basketArray,
  }

  /*componentDidMount() {
    const {basketArray} = this.props;
    this.setState( {result: basketArray} );
  }*/

  deleteItem = (id) => {
    const {basketArray, resultArray, searchArray} = this.props;
    const {result} = this.state;
    console.log(result);
    let interArr = result;
    let idx;
    result.forEach((x, i) => {
      if(x.id === id) {
        idx = i;
      }
    });
    console.log(id,idx,basketArray,interArr,result,this.state.result );
    interArr.splice(idx, 1);
    this.setState({result: interArr});
    console.log(interArr, basketArray, result, this.state.result);
  }

  render() {
    const {result} = this.state;
    const {basketArray, resultArray, searchArray} = this.props;

    return (
      <Fragment>
        <BasketButton inBasket={true}/>
        <h1>This is the basket</h1>
        <ul>
          {result.map((el) =>
            <ListItem inBasket={true} element={el} key={el.id} resultArray={resultArray} searchArray={searchArray} basketArray={basketArray} 
              id={el.id} name={el.name} description={el.description} abv={el.abv} ibu={el.ibu} image_url={el.image_url}>
              <button onClick={this.deleteItem.bind(el,el.id)}>DELETE</button>
            </ListItem>
          )}
        </ul>
      </Fragment>
    );
  }
}

export default Basket;