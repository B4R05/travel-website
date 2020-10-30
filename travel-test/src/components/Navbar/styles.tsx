import styled from 'styled-components';
import { colours } from '../../theme';
import { NavProps } from './types';

const Nav = styled.nav`
  z-index: 1000;
  width: -webkit-fill-available;
  height: 5rem;
  position: ${({ isFixed }: NavProps) => (isFixed ? 'fixed' : 'static')};
  background: white;
  border-bottom: 0.125rem solid ${colours.senary};
  padding: 0 2.5rem;
  display: flex;
  justify-content: space-between;
`;

export { Nav };
