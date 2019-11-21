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
                    <img alt="tiger" src={require("./assets/images/goat.jpg")} />
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
                    <img alt="tiger" src={require("./assets/images/tiger.jpg")} />
                  </div>
                  <div className="content-sction">
                    <h1>Ranthambore National Park</h1>
                    <div className="content">
                      <p>
                        Ranthambore National Park or Ranthambore is a national park in northern India, covering 282 km². Ranthambore was established as the Sawai Madhopur Game Sanctuary in 1955 by the Government of India and was declared one of the Project Tiger reserves in 1973. Ranthambore became a national park on 1 November 1980. In 1984, the adjacent forests were declared the Sawai Man Singh Sanctuary and Keladevi Sanctuary, and in 1991 the tiger reserve was enlarged to include the Sawai Man Singh and Keladevi sanctuaries.
                    </p>
                      <h3>Fauna</h3>
                      <p>
                        Ranthambore is known for its large tiger population.[3] As park tourism and the population of neighbouring villages increased, there were more frequent fatal human-tiger interactions and poaching. The Indian government started Project Tiger in 1973 and allotted an area of 60 mi2 of the park as a tiger sanctuary. This area later expanded to become what is now the Ranthambhore National Park.
                    </p>
                      <p>
                        In 2005, there were 26 tigers living in the park. This was significantly lower than the recorded tiger population of the reserve in 1982, which stood at 44. According to non-government sources there were 34 adult tigers in the Ranthambhore National Park in 2008, and more than 14 cubs. This increase was attributed largely to sustained efforts by forest officials to curb poaching. Villagers in the region were being given incentives to stay out of the park, and surveillance cameras were also fitted across the reserve.[4] The Indian government committed US$153 million for these efforts.[4] They were successful enough to make Ranthambhore eligible to participate in the Sariska Tiger Reserve relocation program.[5] The first aerial relocation, of the male tiger (Dara) from Ranthambhore to Sariska, was done on 28 June 2008 by Wing Commander Vimal Raj, using a Mi-17 helicopter. Unfortunately, this translocated tiger died on 15 November 2010 due to poisoning.
                    </p>
                      <p>
                        A tigress known as "The Lady of the Lakes" was separated from her parents at a very young age because of poaching. The young tigress was named Machli after the mark on her body that resembles a fish.
                    </p>
                    </div>
                  </div>

                </div>
              </FullpageSection>
              <FullpageSection>
                <div className="section">
                  <div className="image-container">
                    <img alt="tiger" src={require("./assets/images/rhino.jpg")} />
                  </div>
                  <div className="content-sction">
                    <h1>Kaziranga National Park</h1>
                    <div className="content">
                      <p>
                        Kaziranga National Park (Assamese: [kaziɹɔŋa ɹast(ɹ)iɔ uɪddan]) is a national park in the Golaghat, Karbi Anglong and Nagaon districts of the state of Assam, India. The sanctuary, which hosts two-thirds of the world's great one-horned rhinoceroses, is a World Heritage Site.[2] According to the census held in March 2018 which was jointly conducted by the Forest Department of the Government of Assam and some recognized wildlife NGOs, the rhino population in Kaziranga National Park is 2,413. It comprises 1,641 adult rhinos (642 males, 793 females, 206 unsexed); 387 sub-adults (116 males, 149 females, 122 unsexed); and 385 calves.[3] In 2015, the rhino population stood at 2401. Kaziranga is home to the highest density of tigers among protected areas in the world, and was declared a Tiger Reserve in 2006 (now the highest tiger density is in Orang National Park, Assam) .
                    </p>
                      <h3>Fauna</h3>

                      <p>
                        Kaziranga contains significant breeding populations of 35 mammalian species,[22] of which 15 are threatened as per the IUCN Red List.[citation needed] The park has the distinction of being home to the world's largest population of the Greater One-Horned Rhinoceros (1,855),[23][24] wild Asiatic water buffalo (1,666)[25] and eastern swamp deer (468).[26] Significant populations of large herbivores include elephants (1,940),[27] gaur (30) and sambar (58). Small herbivores include the Indian muntjac, wild boar, and hog deer.[20][28] Kaziranga has the largest population of the Wild water buffalo anywhere accounting for about 57% of the world population.[29] The One-Horned rhinoceros, Royal Bengal Tiger, Asian elephant, wild water buffalo and swamp deer are collectively known as 'Big Five' of Kaziranga.
                    </p>
                      <h3>Flora</h3>
                      <p>
                        Four main types of vegetation exist in this park.[34] These are alluvial inundated grasslands, alluvial savanna woodlands, tropical moist mixed deciduous forests, and tropical semi-evergreen forests. Based on Landsat data for 1986, percent coverage by vegetation is: tall grasses 41%, short grasses 11%, open jungle 29%, swamps 4%, rivers and water bodies 8%, and sand 6%.There is a difference in altitude between the eastern and western areas of the park, with the western side being at a lower altitude.
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
