import React, { Component } from 'react';

import './formButton.css';

class FormButton extends Component {
  state = {
    renderForm: false,
  }

  handleOnClick = () => {
    this.setState({renderForm: true,});
  }

  handleOffClick = () => {
    this.setState({renderForm: false,});
  }

  render() {
    const {children} = this.props;
    const {renderForm} = this.state;

    return(
      <div className="formContainer">
        <button className="openForm" onClick={this.handleOnClick}>Registration</button>
        {renderForm ? React.cloneElement(children) : null}
        {renderForm ? <button className="closeForm" onClick={this.handleOffClick}>X</button> : null}
      </div>
    );
  }
}

export default FormButton;