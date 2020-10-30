import bookingToggle from '../bookingToggle';
import { START_BOOKING, EXIT_BOOKING } from '../../utils/constants';
import { ToggleActionType } from '../../actions/types';

describe('bookingToggle reducer: ', () => {
  it('toggles overlay boolean to true from false', () => {
    const payload = true;
    const action: ToggleActionType = { type: START_BOOKING, payload };
    const initialState: boolean = false;
    const expectedState = payload;

    expect(bookingToggle(initialState, action)).toEqual(expectedState);
  });

  it('toggles overlay boolean to false from true', () => {
    const payload = false;
    const action: ToggleActionType = { type: EXIT_BOOKING, payload };
    const initialState: boolean = true;
    const expectedState = payload;

    expect(bookingToggle(initialState, action)).toEqual(expectedState);
  });
});
