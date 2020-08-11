import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from './containers/Home'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
