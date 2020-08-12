import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from './containers/Home';
import Product from './containers/Product';
import ProductsCategory from './containers/ProductsCategory';
import Payment from './containers/Payment';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products/category/:categoryId/product/:productId" component={Product}/>
        <Route exact path="/products/category/:categoryId" component={ProductsCategory}/>
        <Route exact path="/payment" component={Payment}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
