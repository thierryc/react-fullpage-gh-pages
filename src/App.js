import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Fullpage, { FullPageSections, FullpageSection, FullpageCount, FullpageNavigation } from '@ap.cx/react-fullpage';
import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';

class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <Router>
          <div>
            <Navigation>
              <ul>
                <li>
                  <Link to="/">React Fullpage</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/documentation">Documentation</Link>
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

function Home() {
  let location = useLocation();
  console.log(location);
  
  return (
    <Fullpage>
      <FullpageNavigation/>
      <FullPageSections>
        <FullpageSection>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        </FullpageSection>
        <FullpageSection>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Fullpage <FullpageSection.Number/>/<FullpageCount/>.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        </FullpageSection>
        <FullpageSection>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Fullpage <FullpageSection.Number/>/<FullpageCount/>.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
}

function About() {
  return <h2>About</h2>;
}

function Documentation() {
  return <h2>Users</h2>;
}

export default App;
