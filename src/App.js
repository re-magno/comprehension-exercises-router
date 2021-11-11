import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/users" exact component={Users} />
      </BrowserRouter>
    );
  }
}

export default App;
