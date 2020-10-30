import styled from 'styled-components';
import { breakpoints, colours } from '../../theme';
import { CoreHeader, CoreParagraph } from '../../theme/CoreElements';

const Featured = styled.section`
  padding: 2rem;
`;

const FeaturedExperiences = styled.ul`
  padding-inline-start: 0;
  display: grid;

  grid-template-columns: repeat(2, auto);
  grid-gap: 1rem;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: auto;
  }
`;

const Footer = styled.footer`
  background: ${colours.quarternary};
  padding: 0.75rem;
  color: ${colours.tertiary};
  text-align: center;
`;

const FooterHeader = styled(CoreHeader)`
  margin-top: 1.9375rem;
  font-weight: 900;
`;

const FooterText = styled(CoreParagraph)`
  font-weight: 600;
`;

export { Featured, FeaturedExperiences, Footer, FooterHeader, FooterText };
