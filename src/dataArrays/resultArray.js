/*import React, { Component } from 'react';

class ResultArray extends Component {
  state = {
    resultArray : []
  }

  AddItem = (x) => {
    let {resultArray} = this.state;
    let interArray = resultArray;
    interArray.push(x)
    this.setState({resultArray: interArray});
  }

  DeleteItem = (x) => {
    const {resultArray} = this.state;
    let interArray = resultArray;
    let idx;
    for(let i = 0; i < interArray.length; i++) {
      if(interArray[i].id === x.id) idx = i;
    }
    interArray.splice(idx, 1);
    this.setState({resultArray: interArray});
  }

  CopyArr = (arr) => {
    this.setState({resultArray: arr});
  }

  ReturnState = () => {
    return this.state.resultArray;
  }

  render() {
    return (<div></div>);
  }
}

export default ResultArray;*/

let resultArray = [];



export default resultArray;