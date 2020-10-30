import React from 'react';
import Minus from '../Minus';
import Plus from '../Plus';
import { Label, ControlSection, Quantity, Input } from './styles';
import { ControlsType } from './types';

const Controls = ({ label, value, decrement, increment }: ControlsType) => {
  return (
    <>
      <Label>{label}</Label>
      <ControlSection>
        <Quantity onClick={decrement}>
          <Minus />
        </Quantity>
        <Input type='number' min={0} value={value} readOnly />
        <Quantity onClick={increment}>
          <Plus />
        </Quantity>
      </ControlSection>
    </>
  );
};

Controls.defaultProps = {
  label: 'Adult',
  value: 1
};

export default Controls;
