import bookingSelected from '../bookingSelected';
import { LOAD_EXP_DATA, DEFAULT_SELECTED_STATE } from '../../utils/constants';
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

describe('bookingSelected reducer LOAD_EXP_DATA:', () => {
  it('loads new experience data in store', () => {
    const action: BookingActionType = { type: LOAD_EXP_DATA, payload };
    const initialState: BookingType = DEFAULT_SELECTED_STATE;
    const expectedState = payload;

    expect(bookingSelected(initialState, action)).toEqual(expectedState);
  });
});
