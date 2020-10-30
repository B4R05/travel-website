export const ADD_BOOKING = 'ADD_BOOKING';
export const LOAD_EXP_DATA = 'LOAD_EXP_DATA';
export const START_BOOKING = 'START_BOOKING';
export const EXIT_BOOKING = 'EXIT_BOOKING';

export const DEFAULT_SELECTED_STATE = {
  id: '',
  title: '',
  body: '',
  media: {
    large: {
      url: '',
      width: 0,
      height: 0
    },
    small: {
      url: '',
      width: 0,
      height: 0
    }
  },
  price: {
    value: 0,
    currencyCode: 'GBP',
    unit: 'per person'
  },
  bookingDetails: {
    adults: 1,
    children: 0,
    total: 0
  }
};
