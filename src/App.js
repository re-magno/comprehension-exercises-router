import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Link to="/strict-access">Strict Access</Link>
        </header>
        <Switch>
          <Route exact path="/users/:id" render={(props) => <Users {...props} greetingsMessage="Good Morning" />} />
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Home} />
          <Route exact path="/strict-access" render={() => (<StrictAccess user={{ username: "joao", password: "1234" }} />)} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
