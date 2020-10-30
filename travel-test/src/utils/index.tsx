import { isMobile } from 'react-device-detect';
import { BookingType } from '../reducers/types';
import { PriceType, MediaType } from './types';

//reusable function to identify an item object
export const criteria = (
  existingBooking: BookingType,
  newBooking: BookingType
) => existingBooking.id === newBooking.id;

//to exclude any undefined values
export const bookingExists = (
  bookingObject: BookingType | undefined,
  bookingIndex: number
) => bookingObject && bookingIndex !== -1;

export const displayPricing = (price: PriceType) =>
  `from ${price.currencyCode === 'GBP' ? '£' : price.currencyCode}${
    price.value
  } ${price.unit}`;

export const deviceSpecificURL = (media: MediaType) =>
  isMobile ? media.small.url : media.large.url;
