import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import resultArray from './dataArrays/resultArray';
import searchArray from './dataArrays/searchArray';
import basketArray from './dataArrays/basketArray';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/home';
import Basket from './components/basket';

ReactDOM.render((
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path='/' render={()=><Home resultArray={resultArray} searchArray={searchArray} basketArray={basketArray}/>} />
        <Route path='/basket' render={()=><Basket basketArray={basketArray}/>} />
      </Switch>
    </App>
  </BrowserRouter>),
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
