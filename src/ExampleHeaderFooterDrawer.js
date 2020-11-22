
import React from 'react';
import {
  useLocation,
} from "react-router-dom";
import Fullpage, { FullPageSections, FullpageSection, FullpageCount, FullpageNavigation } from '@ap.cx/react-fullpage';
import logo from './logo.svg';

function ExampleHeaderFooterDrawer() {
  let location = useLocation();
  
  return (
    <div className="main-page">
    <Fullpage>
      <FullpageNavigation/>
      <FullPageSections>
        <FullpageSection>
          <div className="page1">
            
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
            
          </div>
        </FullpageSection>
        <FullpageSection>
          <div className="page2">
            
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
            
          </div>
        </FullpageSection>
        <FullpageSection>
          <div className="page3">
            
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
          </div>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
    </div>
  );
}

export default ExampleHeaderFooterDrawer;