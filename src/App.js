import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import Navigation from './Components/Navigation';
import Home from './Home';
import About from './About';
import Documentation from './Documentation';
import ExampleHeaderFooterDrawer from './ExampleHeaderFooterDrawer'

class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <Router>
          <div>
            <Navigation>
              <ul>
                <li>
                  <Link to="/" className="active">React Fullpage</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/documentation">Documentation</Link>
                </li>
                <li>
                  <Link to="/Example-header-footer-drawer">Example (soon)</Link>
                </li>
              </ul>
            </Navigation>
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/documentation">
                <Documentation />
              </Route>
              <Route path="/Example-header-footer-drawer">
                <ExampleHeaderFooterDrawer />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </React.StrictMode>
    );
  }
}

export default App;
