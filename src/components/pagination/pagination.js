import React, {Component} from 'react';

import './pagination.css';

class Pagination extends Component {
  render() {
    switch(this.props.active) {
    case '1': return(
      <div onClick={this.props.onClick}>
        <div className='pageStyle active' data-name='1'>1</div>
        <div className="pageStyle" data-name='2'>2</div>
        <div className="pageStyle" data-name='3'>3</div>
        <div className="pageStyle" data-name='4'>4</div>
      </div>
    );
    case '2': return(
      <div onClick={this.props.onClick}>
        <div className="pageStyle" data-name='1'>1</div>
        <div className='pageStyle active' data-name='2'>2</div>
        <div className="pageStyle" data-name='3'>3</div>
        <div className="pageStyle" data-name='4'>4</div>
      </div>
    );
    case '3': return(
      <div onClick={this.props.onClick}>
        <div className="pageStyle" data-name='1'>1</div>
        <div className="pageStyle" data-name='2'>2</div>
        <div className='pageStyle active' data-name='3'>3</div>
        <div className="pageStyle" data-name='4'>4</div>
      </div>
    );
    case '4': return(
      <div onClick={this.props.onClick}>
        <div className="pageStyle" data-name='1'>1</div>
        <div className="pageStyle" data-name='2'>2</div>
        <div className="pageStyle" data-name='3'>3</div>
        <div className='pageStyle active' data-name='4'>4</div>
      </div>
    );
    default: break;
    }
  }
}

export default Pagination;