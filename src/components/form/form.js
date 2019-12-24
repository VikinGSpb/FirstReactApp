import React, { Component, Fragment } from 'react';

import './form.css';

const style = {color:'red'};

class Form extends Component {
  state = {
    inputNameText : '',
    inputSurnameText: '',
    inputPatronymicText: '',
    inputDateText: '',
    inputMailText: '',
    inputPassText: '',
    styleMail: {},
    stylePass: {},
  }

  handleChange = () => {
    this.setState({
      inputNameText: this.inputNameRef.current.value,
      inputSurnameText: this.inputSurnameRef.current.value,
      inputPatronymicText: this.inputPatronymicRef.current.value,
      inputDateText: this.inputDateRef.current.value,
      inputMailText: this.inputMailRef.current.value,
      inputPassText: this.inputPassRef.current.value,
    })
  }

  handleSubmit = (e) => {
    const { inputMailText, inputPassText } = this.state;
    this.setState(
      {styleMail: {},
      stylePass: {}},
    );
    if(!inputMailText.match(/\.com|\.ru/)) {
      e.preventDefault();
      this.setState({styleMail: style});
    }
    if(inputPassText.length < 6) {
      e.preventDefault();
      this.setState({stylePass: style});
    }
  }

  inputNameRef = React.createRef();
  inputSurnameRef = React.createRef();
  inputPatronymicRef = React.createRef();
  inputDateRef = React.createRef();
  inputMailRef = React.createRef();
  inputPassRef = React.createRef();

  render() {
    return (
      <Fragment>
        <form className="form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" ref={this.inputNameRef} required onChange={this.handleChange}/><br/>
          <label htmlFor="surname">Surname:</label>
          <input type="text" id="surname" ref={this.inputSurnameRef} required onChange={this.handleChange}/><br/>
          <label htmlFor="patronymic">Patronymic:</label>
          <input type="text" id="patronymic" ref={this.inputPatronymicRef} required onChange={this.handleChange}/><br/>
          <label htmlFor="date">Date of birth:</label>
          <input type="date" className="dateInput" id="date" ref={this.inputDateRef} required onChange={this.handleChange}/><br/>
          <label htmlFor="mail">Mail:</label>
          <input type="email" style={this.state.styleMail} id="mail" ref={this.inputMailRef} required onChange={this.handleChange}/><br/>
          <label htmlFor="pass">Password:</label>
          <input type="password" style={this.state.stylePass} id="pass" ref={this.inputPassRef} required onChange={this.handleChange}/><br/>
          <input type="submit" className="submitButton" id="submit" value="Submit" onClick={this.handleSubmit}/>
        </form>
      </Fragment>
    );
  }
}

export default Form;