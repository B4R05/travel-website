import styled from 'styled-components';
import { breakpoints, colours, fonts, textSizes } from '../../theme';
import { BookingButtonType } from './types';

const CTA = styled.a`
  background-color: ${({ white }: BookingButtonType) =>
    white ? colours.primary : colours.secondary};
  text-decoration: none;
  color: ${({ white }: BookingButtonType) =>
    white ? colours.secondary : colours.primary};
  text-align: center;
  display: inline-block;
  transition: all 0.3s;
  cursor: ${({ disable }: BookingButtonType) =>
    disable ? 'not-allowed' : 'pointer'};

  padding: 1.25rem ${({ inCard }: BookingButtonType) =>
    inCard ? '3.6875rem' : '1.8125rem'}
  1.25rem ${({ inCard }: BookingButtonType) =>
    inCard ? '3.6875rem' : '1.8125rem'};


  margin-top: 0.75rem;

  :hover {
    opacity: 0.6;
  }

  opacity: ${({ disable }: BookingButtonType) => (disable ? '0.6' : '1')};

  font-family: ${fonts.primary};
  font-size: ${textSizes.paragraph};
  font-style: ${fonts.fontStyle};
  font-weight: 600;
  line-height: ${textSizes.paragraphLineHeight};
  letter-spacing: ${textSizes.paragraphLetterSpacing}
  text-align: center;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1.25rem
      ${({ inCard }: BookingButtonType) =>
        inCard ? '3.6875rem' : '5rem'} 1.25rem
      ${({ inCard }: BookingButtonType) => (inCard ? '3.6875rem' : '5rem')};
  }
`;

export { CTA };
