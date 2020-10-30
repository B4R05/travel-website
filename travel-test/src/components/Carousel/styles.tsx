import styled from 'styled-components';
import { breakpoints } from '../../theme';

const Ol = styled.ol`
  align-items: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  list-style: none;
  margin-top: 2.9375rem;

  li {
    margin-right: 1.25rem;
  }

  @media (min-width: ${breakpoints.mobile}) {
    li {
      max-width: 33.333%;
      padding: 0.75rem;
      margin-bottom: 2rem;
      margin-right: 0;
      border: 0;
      flex-basis: 22%;
      flex-grow: 0;
      flex-shrink: 0;
    }
  }
`;

export { Ol };
