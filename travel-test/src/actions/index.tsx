import {
  LOAD_EXP_DATA,
  START_BOOKING,
  EXIT_BOOKING,
  ADD_BOOKING
} from '../utils/constants';

import { BookingType } from '../reducers/types';
import { BookingActionType, ToggleActionType } from './types';

//LOAD EXPERIENCE DETAILS IN OVERLAY
export const loadExpData = (booking: BookingType): BookingActionType => {
  return {
    type: LOAD_EXP_DATA,
    payload: booking
  };
};

//BOOKING OVERLAY TOGGLE
export const startBooking = (): ToggleActionType => ({
  type: START_BOOKING,
  payload: true
});

export const exitBooking = (): ToggleActionType => ({
  type: EXIT_BOOKING,
  payload: false
});

//ADDING EXPERIENCES TO CART
export const addBooking = (newBooking: BookingType): BookingActionType => {
  return {
    type: ADD_BOOKING,
    payload: newBooking
  };
};
