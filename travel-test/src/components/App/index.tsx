import React, { Suspense } from 'react';
import { connect } from 'react-redux';

import Navbar from '../Navbar';
import Experience from '../Experience';
import HeroExperience from '../HeroExperience';
import Carousel from '../Carousel';

import { HERO_INDEX } from './utils';
import DATA from '../../api/data';

import {
  Featured,
  FeaturedExperiences,
  Footer,
  FooterHeader,
  FooterText
} from './styles';

import { EXPERIENCE_DATA, AppProp } from './types';
import { StoreTypes } from '../../reducers/types';

//TEXTS
const FOOTER_TITLE = 'Adventure awaits out there';
const FOOTER_TEXT = 'Get out and experience Scandinavian way of living';

//HERO EXPERIENCE DATA
const HERO_DATA = DATA.featured[HERO_INDEX];

//CODE SPLITTING
const BookingOverlay = React.lazy(() => import('../BookingOverlay'));

const renderExperiences = (experiences: EXPERIENCE_DATA[]) => {
  return experiences.map((experience: EXPERIENCE_DATA, index, array) => {
    if (array.indexOf(experience) > HERO_INDEX) {
      return <Experience data={experience} key={experience.id} />;
    }

    return null;
  });
};

const App = ({ bookingToggle }: AppProp) => {
  return (
    <>
      <Navbar isFixed />
      <main>
        <HeroExperience data={HERO_DATA} />
        <Featured>
          <FeaturedExperiences>
            {renderExperiences(DATA.featured)}
          </FeaturedExperiences>
        </Featured>
      </main>
      <Footer>
        <FooterHeader>{FOOTER_TITLE}</FooterHeader>
        <FooterText>{FOOTER_TEXT}</FooterText>
        <Carousel experiences={DATA.carousel.items} />
      </Footer>
      {bookingToggle && (
        <Suspense fallback={<div>Loading...</div>}>
          <BookingOverlay />
        </Suspense>
      )}
    </>
  );
};

const mapStateToProps = (state: StoreTypes) => ({
  bookingToggle: state.bookingToggle
});

export default connect(mapStateToProps, null)(App);
