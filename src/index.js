import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';

//Pages
import Home from './pages/Home';
import About from'./pages/About';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    <App classComponent={<ClassComponent testProp='test123'/>} functionalComponent={<FunctionalComponent />}>
      {/* <ClassComponent testProp='test123'/>
      <FunctionalComponent /> */}
    </App>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
