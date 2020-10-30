import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import ProgressiveImage from 'react-progressive-graceful-image';
import { startBooking, loadExpData } from '../../actions';
import { getArrayFromText, listItemBody } from './utils';
import BookingButton from '../BookingButton';
import {
  FeaturedExperience,
  Pricing,
  Image,
  Body,
  Ul,
  CaptionTitle
} from './styles';
import { EXPERIENCE_PROPS } from './types';
import { displayPricing, deviceSpecificURL } from '../../utils';

const Experience = ({ data, loadExpData, startBooking }: EXPERIENCE_PROPS) => {
  const renderText = (body: string): string | ReactElement => {
    if (listItemBody(body)) {
      return (
        <Ul>
          <Body>
            {getArrayFromText(body).map(
              (text: string, index): ReactElement => (
                <li key={index}>{text}</li>
              )
            )}
          </Body>
        </Ul>
      );
    }

    return <Body>{body}</Body>;
  };

  const handleClick = () => {
    loadExpData(data);
    startBooking();
  };

  return (
    <FeaturedExperience>
      <figure>
        <ProgressiveImage
          src={deviceSpecificURL(data.media)}
          placeholder='placeholders/600x400.png'>
          {(src: string) => (
            <Image
              src={src}
              alt={data.title}
              height={data.media.large.height}
            />
          )}
        </ProgressiveImage>
        <figcaption>
          <CaptionTitle>{data.title}</CaptionTitle>
        </figcaption>
      </figure>
      <div>
        {renderText(data.body)}
        <Pricing>{displayPricing(data.price)}</Pricing>
        <BookingButton onClick={handleClick} />
      </div>
    </FeaturedExperience>
  );
};

export default connect(null, { startBooking, loadExpData })(Experience);
