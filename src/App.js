import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Products from './pages/Products';
import Product from './pages/Product';
import Cart from './components/Cart';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Cart />
      <div style={{ marginTop: 90 }}>
        <Router>
          <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/:productId" component={Product} />
          </Switch>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
