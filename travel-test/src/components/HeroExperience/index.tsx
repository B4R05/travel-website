import React from 'react';
import { connect } from 'react-redux';
import { startBooking, loadExpData } from '../../actions';
import BookingButton from '../BookingButton';
import { Hero, Header, Pricing } from './styles';
import { EXPERIENCE_PROPS } from '../Experience/types';
import { displayPricing, deviceSpecificURL } from '../../utils';

const HeroExperience = ({
  data,
  loadExpData,
  startBooking
}: EXPERIENCE_PROPS) => {
  const { title, media, price } = data;

  const handleClick = () => {
    loadExpData(data);
    startBooking();
  };

  return (
    <Hero
      URL={deviceSpecificURL(media)}
      width={media.large.width}
      height={media.large.height}>
      <article>
        <Header>{title}</Header>
        <Pricing>{displayPricing(price)}</Pricing>
        <BookingButton onClick={handleClick} white />
      </article>
    </Hero>
  );
};

export default connect(null, { startBooking, loadExpData })(HeroExperience);
