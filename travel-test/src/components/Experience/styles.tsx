import styled from 'styled-components';
import { ImageProps } from './types';
import { colours, fonts } from '../../theme';
import { CoreParagraph, CoreHeader } from '../../theme/CoreElements';

const FeaturedExperience = styled.li`
  border: 1px solid ${colours.quarternary};
  list-style: none;

  figure {
    max-height: 31.25rem;
    overflow: hidden;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    position: relative;
    margin: 0;
    border-radius: 0;
  }

  figcaption {
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  div {
    padding: 1rem 2rem 2rem 2rem;
  }
`;

const CaptionTitle = styled(CoreHeader)`
  font-family: ${fonts.primary};
  font-weight: 600;
  text-align: left;
  color: ${colours.primary};
  padding: 1.875rem;
`;

const Body = styled(CoreParagraph)`
  font-weight: 400;
  text-align: left;
`;

const Pricing = styled(CoreParagraph)`
  margin-top: 2.3125rem;
  margin-bottom: 2.3125rem;
  font-weight: 400;
  text-align: left;
`;

const Image = styled.img`
  height: ${({ height }: ImageProps) => height}px;
  width: 100%;
`;

const Ul = styled.ul`
  padding-left: 1rem;
`;

export { FeaturedExperience, Pricing, Image, Body, Ul, CaptionTitle };
