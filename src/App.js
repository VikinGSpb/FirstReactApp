import React, { Component, Fragment } from 'react';
import Form from './components/form';
import FormButton from './components/formButton';
import Catalog from './components/catalog';
/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

class App extends Component {
  render() {
    return (
      <Fragment>
        <FormButton>{<Form />}</FormButton>
        <Catalog />
      </Fragment>
    );
  }
}

export default App;
