import React from 'react';
import ProgressiveImage from 'react-progressive-graceful-image';
import BookingButton from '../BookingButton';
import { Card, CardTitle, CardImage, CardPricing } from './styles';
import { CardType } from '../Carousel/types';
import { displayPricing } from '../../utils';

type CardDataType = {
  cardData: CardType;
};

const CarouselCard = ({ cardData }: CardDataType) => (
  <div>
    <Card>
      <ProgressiveImage
        src={cardData.media.small.url}
        placeholder='placeholders/285x171.png'>
        {(src: string) => <CardImage src={src} alt={cardData.title} />}
      </ProgressiveImage>

      <div>
        <CardTitle>{cardData.title}</CardTitle>
        <CardPricing>{displayPricing(cardData.price)}</CardPricing>
      </div>
      <BookingButton inCard white disable />
    </Card>
  </div>
);

CarouselCard.defaultProps = {
  cardData: {
    title: 'Experience',
    price: {
      currencyCode: 'GBP',
      value: 0,
      unit: 'per person'
    },
    media: {
      small: {
        url: ''
      }
    }
  }
};

export default CarouselCard;
