import styled from 'styled-components';
import { Nav } from '../Navbar/styles';
import { breakpoints, colours, fonts, textSizes } from '../../theme';
import { CoreHeader, CoreParagraph } from '../../theme/CoreElements';

const OverlayNav = styled(Nav)`
  border-bottom: none;
`;

const BookingContainer = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  background: ${colours.primary};
  z-index: 9999;
  overflow-y: scroll;

  .Toastify__toast {
    colour: ${colours.primary};
    background: ${colours.secondary};
    font-family: ${fonts.secondary};
    font-size: ${textSizes.paragraph};
    font-style: ${fonts.fontStyle};
    line-height: ${textSizes.titleLineHeight};
    letter-spacing: ${textSizes.titleLetterSpacing};
    text-align: center;
  }

  .Toastify__close-button {
    color: ${colours.primary};
  }
`;

const BookingControls = styled.div`
  display: flex;
  justify-content: space-around;
  padding-left: 1rem;
  padding-right: 1rem;

  @media (max-width: ${breakpoints.mobile}) {
    display: block;
  }
`;

const CrossContainer = styled.div`
  margin: auto 0;
`;

const ControlsContainer = styled.div`
  @media (max-width: ${breakpoints.laptop}) {
    padding-left: 1rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    // max-width: 100vw;
  }
`;

const Image = styled.img`
  max-width: 70%;
  margin-top: 1.125rem;

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 100%;
  }
`;

const Title = styled(CoreHeader)`
  font-weight: 700;
  text-align: left;
`;

const Pricing = styled(CoreParagraph)`
  font-weight: 400;
  text-align: left;
  margin-bottom: 3.25rem;

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 1.375rem;
  }
`;

const BookingBody = styled.div`
  max-width: 60vw;
  padding: 2.5rem;
  font-family: ${fonts.secondary};
  font-size: ${textSizes.paragraph};
  font-style: ${fonts.fontStyle};
  font-weight: 400;
  line-height: ${textSizes.paragraphLineHeight};
  letter-spacing: ${textSizes.paragraphLetterSpacing}
  text-align: left;

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 100vw;
    padding: 2rem;
    margin-top: 0;
  }
`;

const Total = styled(CoreParagraph)`
  font-weight: 700;
  text-align: left;
  margin-bottom: 2.25rem;

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 1.375rem;
  }
`;

export {
  BookingContainer,
  BookingControls,
  CrossContainer,
  ControlsContainer,
  Image,
  Title,
  OverlayNav,
  Pricing,
  BookingBody,
  Total
};
