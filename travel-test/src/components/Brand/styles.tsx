import styled from 'styled-components';
import { CoreHeader } from '../../theme/CoreElements';
import { breakpoints, fonts, textSizes, colours } from '../../theme';

const BrandText = styled(CoreHeader)`
  z-index: 11;
  color: ${colours.tertiary};
  cursor: not-allowed;
  font-family: ${fonts.primary};
  font-weight: 600;
  text-align: left;
  margin: auto 0;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: ${textSizes.paragraph};
    line-height: ${textSizes.paragraphLineHeight};
    letter-spacing: ${textSizes.paragraphLetterSpacing};
  }
`;

export { BrandText };
