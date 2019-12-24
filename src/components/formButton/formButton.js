import React, { Component, Fragment } from 'react';

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
      <Fragment>
        <button onClick={this.handleOnClick}>Registration</button>
        <button onClick={this.handleOffClick}>X</button>
        {renderForm ? React.cloneElement(children) : null}
      </Fragment>
    );
  }
}

export default FormButton;