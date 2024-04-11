import React from 'react';
import Header from '../src/components/Header.js';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from '../src/components/Home';
import Contact from '../src/components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/home" component = {Home} />
          
          
          <Route path="/contact" component = {Contact} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
