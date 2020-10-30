import styled from 'styled-components';
import { NavProps } from '../../../types';
import { breakpoints, colours } from '../../../../../theme';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 0.9375rem;
  right: 1.25rem;
  z-index: 20;
  display: none;

  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    padding: 0.625rem;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${colours.secondary};
    border-radius: 0.625rem;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }: NavProps) =>
        open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }: NavProps) =>
        open ? 'translateX(100%)' : 'translateX(0)'};

      opacity: ${({ open }: NavProps) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }: NavProps) =>
        open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export default StyledBurger;
