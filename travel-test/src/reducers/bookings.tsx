import { criteria, bookingExists } from '../utils';
import { ADD_BOOKING } from '../utils/constants';

import { BookingType, BookingActionType } from './types';

const bookings = (
  state: BookingType[] = [],
  { payload, type }: BookingActionType
) => {
  const stateCopy = [...state];

  switch (type) {
    case ADD_BOOKING:
      const booking = stateCopy.find(booking => criteria(booking, payload));
      const index = stateCopy.findIndex(booking => criteria(booking, payload));

      if (stateCopy.length) {
        if (bookingExists(booking, index)) {
          stateCopy[index].bookingDetails = payload.bookingDetails;

          return stateCopy;
        } else {
          return [...stateCopy, payload];
        }
      } else {
        return [payload];
      }

    default:
      return state;
  }
};

export default bookings;
