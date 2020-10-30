import bookings from '../bookings';
import { ADD_BOOKING } from '../../utils/constants';
import { BookingType, BookingActionType } from '../types';

const payload = {
  id: '1',
  title: 'test',
  body: 'test body',
  media: {
    large: {
      url: '',
      width: 300,
      height: 300
    },
    small: {
      url: '',
      width: 100,
      height: 100
    }
  },
  price: {
    value: 100,
    currencyCode: 'GBP',
    unit: '£'
  },
  bookingDetails: {
    adults: 10,
    children: 0,
    total: 1000
  }
};

const existingBooking = {
  ...payload,
  bookingDetails: {
    adults: 3,
    children: 0,
    total: 300
  }
};

describe('bookings reducer ADD_BOOKING:', () => {
  it('adds 1 item to an empty array if no items exist', () => {
    const action: BookingActionType = { type: ADD_BOOKING, payload };
    const initialState: BookingType[] = [];
    const expectedState = [payload];

    expect(bookings(initialState, action)).toEqual(expectedState);
  });

  it('updates the a booking if it already exists in store', () => {
    const initialState = [existingBooking];
    const action = { type: ADD_BOOKING, payload };
    const expectedState = [payload];

    expect(bookings(initialState, action)).toEqual(expectedState);
  });
});
