// App.js
import React from 'react';
import Cart from './components/pages/Cart';
import Catergory from './components/pages/Catergory'
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';

import Layout from './components/layout';
import Navbar from './components/Nav/Navbar';
import Store from './components/pages/Store';
import Ads from './components/pages/Ads';
import Order from './components/pages/Order';




const App = () => {
  return (
    <Router>
      <Layout>

        <Routes>
          <Route path="/catergory" element={<Catergory />} />
          <Route path="/ads" element={<Ads />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/Store" element={<Store />} />

        </Routes>

      </Layout>
    </Router>
  );
};

export default App;
