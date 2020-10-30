import React, { ReactElement } from 'react';
import CarouselCard from '../CarouselCard';
import { Ol } from './styles';
import { CarouselProps, CardType } from './types';

const Carousel = ({ experiences }: CarouselProps) => (
  <Ol>
    {experiences.map(
      (card: CardType): ReactElement => (
        <li key={card.id}>
          <CarouselCard cardData={card} />
        </li>
      )
    )}
  </Ol>
);

export default Carousel;
