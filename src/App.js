import React, { Component } from 'react';
import Fullpage, { FullPageSections, FullpageSection, FullpageCount, FullpageNavigation } from '@ap.cx/react-fullpage';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.StrictMode>
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
      </React.StrictMode>
    );
  }
}

export default App;
