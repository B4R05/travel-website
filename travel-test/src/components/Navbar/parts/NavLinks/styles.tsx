import styled from 'styled-components';
import { breakpoints, colours, fonts, textSizes } from '../../../../theme';
import { NavProps } from '../../types';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  font-family: ${fonts.secondary};
  font-size: ${textSizes.paragraph};
  font-style: ${fonts.fontStyle};
  font-weight: 400;
  line-height: ${textSizes.paragraphLineHeight};
  letter-spacing: ${textSizes.paragraphLetterSpacing}
  text-align: left;

  li {
    cursor: not-allowed;
    padding: 1.125rem 0.625rem;
    margin-left: 2.5rem;
  }

  li:nth-child(4) {
    padding: 0.9375rem;

    span {
      display: none;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-family: ${fonts.primary};
    font-weight: 600;
    text-align: left;

    flex-flow: column nowrap;
    background-color: ${colours.primary};
    position: fixed;
    transform: ${({ open }: NavProps) =>
      open ? 'translateX(0%)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    z-index: 10;
    padding-top: 13.5rem;
    padding-right: 1.25rem;
    margin-top: 0;
    transition: transform 0.3s ease-in-out;

    li {
      color: ${colours.secondary};
      border-bottom: 1px solid ${colours.quinary};
      padding: 1.625rem 1.25rem;
    }

    li:nth-child(4) {
      display: flex;
      justify-content: space-between;
      padding: 1.625rem 1.25rem;
      border-bottom: none;

      span {
        display: inline;
      } 
  }
`;

const CartIcons = styled.div`
  position: relative;
`;

export { Ul, CartIcons };
