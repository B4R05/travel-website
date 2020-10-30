import styled from 'styled-components';
import { breakpoints, colours, fonts } from '../../theme';
import { CoreParagraph, CoreHeader } from '../../theme/CoreElements';

import { HeroProps } from './types';

const Hero = styled.section`
  background: url(${({ URL }: HeroProps) => URL}) center;
  // width: ${({ width }: HeroProps) => width}px;
  // height: ${({ height }: HeroProps) => height}px;
  background-size: cover;
  padding: 15rem 2rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  color: ${colours.primary};

  article {
    padding: 2.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    article {
      padding: 0;
    }
  }
`;

const Header = styled(CoreHeader)`
  font-family: ${fonts.primary};
  font-weight: 600;
  text-align: left;
`;

const Pricing = styled(CoreParagraph)`
  font-weight: 400;
  text-align: left;
`;

export { Hero, Header, Pricing };
