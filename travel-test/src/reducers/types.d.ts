export type BookingType = {
  id: string;
  title: string;
  body: string;
  media: {
    large: {
      url: string;
      width: number;
      height: number;
    };
    small: {
      url: string;
      width: number;
      height: number;
    };
  };
  price: {
    value: number;
    currencyCode: string;
    unit: string;
  };
  bookingDetails: {
    adults: number;
    children: number;
    total: number;
  };
};

export type BookingActionType = {
  payload: BookingType;
  type: string;
};

export type ToggleActionType = {
  payload: boolean;
  type: string;
};

export type StoreTypes = {
  bookingToggle: boolean;
  bookings: BookingType[];
  bookingSelected: BookingType;
};
