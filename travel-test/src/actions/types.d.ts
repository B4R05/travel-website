import { BookingType } from '../reducers/types';

export type BookingActionType = {
  type: string;
  payload: BookingType;
};

export type ToggleActionType = {
  type: string;
  payload: boolean;
};
