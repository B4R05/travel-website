import { combineReducers } from 'redux';
import bookings from './bookings';
import bookingSelected from './bookingSelected';
import bookingToggle from './bookingToggle';

const rootReducer = combineReducers({
  bookings,
  bookingSelected,
  bookingToggle
});

export default rootReducer;
