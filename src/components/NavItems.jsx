// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Store from './components/Store';
import Cart from './components/Cart';
import Feeds from './components/Feeds';

const NavItems = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Store" component={Store} />
        <Route path="/Cart" component={Cart} />
        <Route path="/Feed" component={Feeds} />
      </Switch>
    </Router>
  );
};

export default NavItems;
