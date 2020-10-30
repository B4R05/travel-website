import { BookingType } from '../../reducers/types';

export type BookingOverlayType = {
  bookingSelected: BookingType;
  addBooking: Function;
  exitBooking: () => void | Function;
};
