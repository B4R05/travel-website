export type PriceType = {
  currencyCode: string;
  value: number;
  unit: string;
};

export type MediaType = {
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
