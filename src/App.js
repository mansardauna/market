// App.js
import React from 'react';
import Cart from './components/Cart';
import Catergory from './components/Catergory'
import Feed from './components/Feed';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';

import Layout from './components/layout';
import Navbar from './components/Navbar';




const App = () => {
  return (
    <Router>
      <Layout>

        <Routes>
          <Route path="/catergory" element={<Catergory />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/feed" element={<Feed />} />

        </Routes>

      </Layout>
    </Router>
  );
};

export default App;
