import styled from 'styled-components';
import { textSizes, fonts } from './Typography';

const CoreHeader = styled.h3`
  font-family: ${fonts.secondary};
  font-size: ${textSizes.title};
  font-style: ${fonts.fontStyle};
  line-height: ${textSizes.titleLineHeight};
  letter-spacing: ${textSizes.titleLetterSpacing};
`;

const CoreParagraph = styled.p`
  font-family: ${fonts.secondary};
  font-size: ${textSizes.paragraph};
  font-style: ${fonts.fontStyle};
  line-height: ${textSizes.paragraphLineHeight};
  letter-spacing: ${textSizes.paragraphLetterSpacing};
`;

export { CoreHeader, CoreParagraph };
