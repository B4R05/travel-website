import styled from 'styled-components';
import { colours, fonts } from '../../theme';
import { CoreParagraph } from '../../theme/CoreElements';

const Card = styled.div`
  height: 22.125rem;
  width: 17.8125rem;
  color: ${colours.primary};
  background: ${colours.secondary};

  div {
    padding-left: 1.5rem;
    margin-top: 1.0625rem;
  }
`;

const CardTitle = styled(CoreParagraph)`
  font-family: ${fonts.primary};
  font-weight: 600;
  text-align: left;
`;

const CardImage = styled.img``;

const CardPricing = styled(CoreParagraph)`
  colour: ${colours.primary};
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 0.9375rem;
  letter-spacing: 0.06875rem;
  text-align: left;
`;

export { Card, CardTitle, CardImage, CardPricing };
