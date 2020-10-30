//MODULE EXPORTS
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ProgressiveImage from 'react-progressive-graceful-image';
import { ToastContainer, toast } from 'react-toastify';
import { exitBooking, addBooking } from '../../actions';

//COMPONENTS
import BookingButton from '../BookingButton';
import Brand from '../Brand';
import Controls from './parts/Controls';
import Cross from './parts/Cross';

//TYPES AND UTILS
import { BookingType, StoreTypes } from '../../reducers/types';
import { BookingOverlayType } from './types';
import { displayPricing, deviceSpecificURL } from '../../utils';

//STYLES
import 'react-toastify/dist/ReactToastify.css';
import {
  BookingContainer,
  BookingControls,
  CrossContainer,
  ControlsContainer,
  Image,
  Title,
  OverlayNav,
  Pricing,
  BookingBody,
  Total
} from './styles';

const DEFAULT_COUNT = 1;

const BookingOverlay = ({
  bookingSelected,
  addBooking,
  exitBooking
}: BookingOverlayType) => {
  const [adultCount, setAdultCount] = useState<number>(DEFAULT_COUNT);
  const [childCount, setChildCount] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    setTotal(bookingSelected.price.value * (adultCount + childCount));
  }, [bookingSelected.price.value, adultCount, childCount]);

  const confirmBooking = (): void => {
    const updatedBooking: BookingType = {
      ...bookingSelected,
      bookingDetails: {
        adults: adultCount,
        children: childCount,
        total
      }
    };

    addBooking(updatedBooking);

    toast('Experience added to your bookings!');
  };

  return (
    <BookingContainer>
      <ToastContainer position='top-center' />
      <OverlayNav>
        <Brand />
        <CrossContainer onClick={exitBooking}>
          <Cross />
        </CrossContainer>
      </OverlayNav>

      <BookingControls>
        <ProgressiveImage
          src={deviceSpecificURL(bookingSelected.media)}
          placeholder='placeholders/600x400.png'>
          {(src: string) => <Image src={src} alt={bookingSelected.title} />}
        </ProgressiveImage>

        <ControlsContainer>
          <Title>{bookingSelected.title}</Title>

          <Pricing>{displayPricing(bookingSelected.price)}</Pricing>

          <Controls
            label='Adults'
            value={adultCount}
            increment={() => setAdultCount(adultCount + 1)}
            decrement={() => setAdultCount(adultCount - 1)}
          />

          <Controls
            label='Children'
            value={childCount}
            increment={() => setChildCount(childCount + 1)}
            decrement={() => setChildCount(childCount - 1)}
          />

          <Total>
            Total{' '}
            {bookingSelected.price.currencyCode === 'GBP'
              ? '£'
              : bookingSelected.price.currencyCode}
            {total}
          </Total>

          <BookingButton onClick={confirmBooking} />
        </ControlsContainer>
      </BookingControls>

      <BookingBody>
        {bookingSelected.body.split('\n').map((bodyText: string) => {
          return <p style={{ color: 'black' }}>{bodyText}</p>;
        })}
      </BookingBody>
    </BookingContainer>
  );
};

const mapStateToProps = (state: StoreTypes) => ({
  bookingSelected: state.bookingSelected
});

export default connect(mapStateToProps, { addBooking, exitBooking })(
  //@ts-ignore
  BookingOverlay
);
