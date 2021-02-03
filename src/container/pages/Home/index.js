import React from 'react';
import { H1, H2, TextInfo, Button, Header, CardList } from 'components';
import './styles.scss';

import testimoniCard from 'assets/data-dummy/testimoni-card.json'
import helpTipsData from 'assets/data-dummy/help-tips-card.json'

const Home = () => {
  console.log(testimoniCard);
  return (
    <div className='p-home'>
      <Header>Fellas</Header>
      <div className='container'>
        <div className='main-content'>
          <div className='section-one'>
            <H1>WEEKEND FROM HOME</H1>
            <TextInfo>Stay active with a little workout.</TextInfo>
            <Button>Let's Go</Button>
          </div>
        </div>
        <div className='main-content'>
          <div className='section-two'>
            <div className='detail-info'>              
              <TextInfo>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  <br />
                  <br />
                <strong  style={{ color: 'white'}}>-weekend team</strong>
              </TextInfo>
            </div>
            <H2>Testimonial</H2>
            <CardList
              data={testimoniCard}
            />
          </div>
        </div>
        <div className='main-content'>
          <div className='section-three'>
            <H2>Help and Tips</H2>
            <CardList
              data={helpTipsData}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
