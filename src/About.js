
import React from 'react';
import {
  useLocation,
} from "react-router-dom";
import Fullpage, { FullPageSections, FullpageSection, FullpageCount, FullpageNavigation } from '@ap.cx/react-fullpage';
import logo from './logo.svg';

function About() {
  let location = useLocation();
  
  return (
    <Fullpage>
      <FullpageNavigation/>
      <FullPageSections>
        <FullpageSection>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                About
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

export default About;