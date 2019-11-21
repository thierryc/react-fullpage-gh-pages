import React, { Component } from 'react';
import Fullpage, { FullPageSections, FullpageSection, FullpageCount, FullpageNavigation } from '@ap.cx/react-fullpage';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <div>
          <Fullpage>

            <FullpageNavigation />

            <FullPageSections>
              <FullpageSection>
                <div className="section">
                  <div className="image-container">
                    <img alt="tiger" style={{
                      height: '300px'
                    }} src={require("./assets/images/tiger1.jpg")} />
                  </div>
                  <div className="content-sction">
                    <h1>Great Himalayan National Park</h1>
                    <div className="content">
                      <p>
                        The Great Himalayan National Park (GHNP), is one of India's national parks, is located in Kullu region in the state of Himachal Pradesh. The park was established in 1984 and is spread over an area of 1,171 km2 at an altitude of between 1500 and 6000 m. The Great Himalayan National Park is a habitat to numerous flora and more than 375 fauna species, including approximately 31 mammals, 181 birds, 3 reptiles, 9 amphibians, 11 annelids, 17 mollusks and 127 insects. They are protected under the strict guidelines of the Wildlife Protection Act of 1972; hence any sort of hunting is not permitted.
                    </p>
                      <h3>Fauna</h3>

                      <p>
                        The Great Himalayan National Park is home to more than 375 faunal species. So far species of 31 mammals, 181 birds, 3 reptiles, 9 amphibians, 11 annelids, 17 mollusks and 127 insects belonging to six orders have been identified and documented. Most of the Himalayan fauna has been given protection under the high priority protection category of Schedule I of the Indian Wildlife (Protection) Act, 1972. The state government of Himachal Pradesh has banned hunting in the state for more than ten years. A trek of 35 to 45 km in any of the park's valleys brings one into the high altitude habitat (3,500 m and above) of animals such as blue sheep, snow leopard, Himalayan brown bear, Himalayan tahr, and musk deer. Best sightings can be made in autumn (September–November) as animals start their seasonal migration to lower altitudes.
                    </p>
                      <h3>Flora</h3>
                      <p>
                        The GHNP also supports a great diversity of plant life, thanks to its wide altitude range and relatively undisturbed habitats. From the lofty pinesand spruces and the great, spreading horse chestnuts of the lower valleys, to the dense cushions and prostrate branches of the alpine herbs and junipers, the park presents an endless variety of vegetation. Although some areas have been modified by grazing, this is one of the few areas of the Western Himalayas where the forests and alpine meadows can be seen in something approaching their original state. The subalpine zone is richest in species, followed by the alpine and upper temperate zones.
                    </p>
                    </div>
                  </div>

                </div>
              </FullpageSection>
              <FullpageSection>
                <div className="section">
                  <div className="image-container">
                    <img alt="tiger" style={{
                      height: '300px'
                    }} src={require("./assets/images/tiger1.jpg")} />
                  </div>
                  <div className="content-sction">
                    <h1>Great Himalayan National Park</h1>
                    <div className="content">
                      <p>
                        The Great Himalayan National Park (GHNP), is one of India's national parks, is located in Kullu region in the state of Himachal Pradesh. The park was established in 1984 and is spread over an area of 1,171 km2 at an altitude of between 1500 and 6000 m. The Great Himalayan National Park is a habitat to numerous flora and more than 375 fauna species, including approximately 31 mammals, 181 birds, 3 reptiles, 9 amphibians, 11 annelids, 17 mollusks and 127 insects. They are protected under the strict guidelines of the Wildlife Protection Act of 1972; hence any sort of hunting is not permitted.
                    </p>
                      <h3>Fauna</h3>

                      <p>
                        The Great Himalayan National Park is home to more than 375 faunal species. So far species of 31 mammals, 181 birds, 3 reptiles, 9 amphibians, 11 annelids, 17 mollusks and 127 insects belonging to six orders have been identified and documented. Most of the Himalayan fauna has been given protection under the high priority protection category of Schedule I of the Indian Wildlife (Protection) Act, 1972. The state government of Himachal Pradesh has banned hunting in the state for more than ten years. A trek of 35 to 45 km in any of the park's valleys brings one into the high altitude habitat (3,500 m and above) of animals such as blue sheep, snow leopard, Himalayan brown bear, Himalayan tahr, and musk deer. Best sightings can be made in autumn (September–November) as animals start their seasonal migration to lower altitudes.
                    </p>
                      <h3>Flora</h3>
                      <p>
                        The GHNP also supports a great diversity of plant life, thanks to its wide altitude range and relatively undisturbed habitats. From the lofty pinesand spruces and the great, spreading horse chestnuts of the lower valleys, to the dense cushions and prostrate branches of the alpine herbs and junipers, the park presents an endless variety of vegetation. Although some areas have been modified by grazing, this is one of the few areas of the Western Himalayas where the forests and alpine meadows can be seen in something approaching their original state. The subalpine zone is richest in species, followed by the alpine and upper temperate zones.
                    </p>
                    </div>
                  </div>

                </div>
              </FullpageSection>
              <FullpageSection>
                <div className="section">
                  <div className="image-container">
                    <img alt="tiger" style={{
                      height: '300px'
                    }} src={require("./assets/images/tiger1.jpg")} />
                  </div>
                  <div className="content-sction">
                    <h1>Great Himalayan National Park</h1>
                    <div className="content">
                      <p>
                        The Great Himalayan National Park (GHNP), is one of India's national parks, is located in Kullu region in the state of Himachal Pradesh. The park was established in 1984 and is spread over an area of 1,171 km2 at an altitude of between 1500 and 6000 m. The Great Himalayan National Park is a habitat to numerous flora and more than 375 fauna species, including approximately 31 mammals, 181 birds, 3 reptiles, 9 amphibians, 11 annelids, 17 mollusks and 127 insects. They are protected under the strict guidelines of the Wildlife Protection Act of 1972; hence any sort of hunting is not permitted.
                    </p>
                      <h3>Fauna</h3>

                      <p>
                        The Great Himalayan National Park is home to more than 375 faunal species. So far species of 31 mammals, 181 birds, 3 reptiles, 9 amphibians, 11 annelids, 17 mollusks and 127 insects belonging to six orders have been identified and documented. Most of the Himalayan fauna has been given protection under the high priority protection category of Schedule I of the Indian Wildlife (Protection) Act, 1972. The state government of Himachal Pradesh has banned hunting in the state for more than ten years. A trek of 35 to 45 km in any of the park's valleys brings one into the high altitude habitat (3,500 m and above) of animals such as blue sheep, snow leopard, Himalayan brown bear, Himalayan tahr, and musk deer. Best sightings can be made in autumn (September–November) as animals start their seasonal migration to lower altitudes.
                    </p>
                      <h3>Flora</h3>
                      <p>
                        The GHNP also supports a great diversity of plant life, thanks to its wide altitude range and relatively undisturbed habitats. From the lofty pinesand spruces and the great, spreading horse chestnuts of the lower valleys, to the dense cushions and prostrate branches of the alpine herbs and junipers, the park presents an endless variety of vegetation. Although some areas have been modified by grazing, this is one of the few areas of the Western Himalayas where the forests and alpine meadows can be seen in something approaching their original state. The subalpine zone is richest in species, followed by the alpine and upper temperate zones.
                    </p>
                    </div>
                  </div>

                </div>
              </FullpageSection>
            </FullPageSections>
          </Fullpage>
        </div>
      </React.StrictMode>
    );
  }
}

export default App;
