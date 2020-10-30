import styled from 'styled-components';
import { breakpoints, colours } from '../../../../theme';
import { CoreParagraph } from '../../../../theme/CoreElements';

const Label = styled(CoreParagraph)`
  font-weight: 400;
  text-align: left;
`;

const Input = styled.input`
  border: 0.0625rem solid ${colours.secondary};
  box-sizing: border-box;
  height: 2.5rem;
  width: 5rem;
  border-radius: 0;
  padding: 0.625rem 0.625rem 0.625rem 1.875rem;
  margin-bottom: 2.25rem;
  margin-left: 0.625rem;
  margin-right: 0.625rem;

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 1rem;
  }
`;

const Quantity = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  left: 0;
  colour: ${colours.primary};
  top: 0;
  border-radius: 0;
  background: ${colours.secondary};
  position: relative;
  cursor: pointer;

  :hover {
    background: ${colours.quarternary};
  }

  svg {
    position: absolute;
    left: 25%;
    right: 25%;
    top: 47.5%;
    bottom: 47.5%;
  }
`;

const ControlSection = styled.div`
  display: flex;
`;

export { Label, Input, ControlSection, Quantity };
