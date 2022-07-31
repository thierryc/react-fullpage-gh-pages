
import React from 'react';
import {
  useLocation,
} from "react-router-dom";
import Fullpage, { FullPageSections, FullpageSection, FullpageCount, FullpageNavigation, FullpageContext } from '@ap.cx/react-fullpage';
import logo from './logo.svg';

function Home() {
  const location = useLocation();
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
                Fullpage <FullpageSection.Number/>/<FullpageCount/>.
              </p>
              <FullpageContext.Consumer>
                {
                  ctx => (
                    <button onClick={() => ctx.goto(ctx.slides[ctx.slides.length -1])}>Goto Last</button>
                  )
                } 
              </FullpageContext.Consumer>
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
              <FullpageContext.Consumer>
                {
                  ctx => (
                    <button onClick={() => ctx.goto(ctx.slides[0])}>Goto First</button>
                  )
                }
              </FullpageContext.Consumer>
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
              <FullpageContext.Consumer>
                {
                  ctx => (
                    <button onClick={() => ctx.goto(ctx.slides[0])}>Goto First</button>
                  )
                } 
              </FullpageContext.Consumer>
            </header>
          </div>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
}

export default Home;