import React, {Component} from 'react';

class Pagination extends Component {
  render() {
    switch(this.props.active) {
    case '1': return(
      <div onClick={this.props.onClick}>
        <div style={{display:'inline'}} className='active' data-name='1'>1</div>
        <div style={{display:'inline'}} data-name='2'>2</div>
        <div style={{display:'inline'}} data-name='3'>3</div>
        <div style={{display:'inline'}} data-name='4'>4</div>
      </div>
    );
    case '2': return(
      <div onClick={this.props.onClick}>
        <div style={{display:'inline'}} data-name='1'>1</div>
        <div style={{display:'inline'}} className='active' data-name='2'>2</div>
        <div style={{display:'inline'}} data-name='3'>3</div>
        <div style={{display:'inline'}} data-name='4'>4</div>
      </div>
    );
    case '3': return(
      <div onClick={this.props.onClick}>
        <div style={{display:'inline'}} data-name='1'>1</div>
        <div style={{display:'inline'}} data-name='2'>2</div>
        <div style={{display:'inline'}} className='active' data-name='3'>3</div>
        <div style={{display:'inline'}} data-name='4'>4</div>
      </div>
    );
    case '4': return(
      <div onClick={this.props.onClick}>
        <div style={{display:'inline'}} data-name='1'>1</div>
        <div style={{display:'inline'}} data-name='2'>2</div>
        <div style={{display:'inline'}} data-name='3'>3</div>
        <div style={{display:'inline'}} className='active' data-name='4'>4</div>
      </div>
    );
    default: break;
    }
  }
}

export default Pagination;