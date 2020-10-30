import { ToggleActionType } from './types';
import { START_BOOKING, EXIT_BOOKING } from '../utils/constants';

const bookingToggle = (state = false, { payload, type }: ToggleActionType) => {
  switch (type) {
    case START_BOOKING:
      return payload;

    case EXIT_BOOKING:
      return payload;

    default:
      return state;
  }
};

export default bookingToggle;
