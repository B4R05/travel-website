export type EXPERIENCE_DATA = {
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
};

export type AppProp = {
  bookingToggle?: boolean;
};
