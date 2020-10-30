import { BookingActionType } from './types';
import { DEFAULT_SELECTED_STATE, LOAD_EXP_DATA } from '../utils/constants';

const bookingSelected = (
  state = DEFAULT_SELECTED_STATE,
  { payload, type }: BookingActionType
) => {
  switch (type) {
    case LOAD_EXP_DATA:
      return { ...payload };

    default:
      return state;
  }
};

export default bookingSelected;
