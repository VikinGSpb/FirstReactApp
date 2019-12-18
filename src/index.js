import React from 'react';
import ReactDOM from 'react-dom';
/*import './index.css';
import App from './App';*/
import * as serviceWorker from './serviceWorker';
import Form from './components/form';
import FormButton from './components/formButton';
import Catalog from './components/catalog';

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<FormButton>{<Form />}</FormButton>, document.getElementById('root'));
ReactDOM.render(<Catalog />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
