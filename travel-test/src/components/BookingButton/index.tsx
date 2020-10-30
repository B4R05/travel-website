import React from 'react';
import { BookingButtonType } from './types';
import { CTA } from './styles';

const BUTTON_TEXT: string = 'Book Experience';

const BookingButton = ({
  onClick,
  white,
  inCard,
  disable
}: BookingButtonType) => (
  <CTA onClick={onClick} white={white} inCard={inCard} disable={disable}>
    {BUTTON_TEXT}
  </CTA>
);

BookingButton.defaultProps = {
  white: false,
  inCard: false,
  disable: false
};

export default BookingButton;
