export type CardType = {
  id: string;
  title: string;
  media: {
    small: {
      url: string;
      width: number;
      height: number;
    };
  };
  guidedTour: boolean;
  price: {
    value: number;
    currencyCode: string;
    unit: string;
  };
};

export type CarouselProps = {
  experiences: CardType[];
};
