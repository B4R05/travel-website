import React from 'react';
import Brand from '../Brand';
import { Nav } from './styles';
import Burger from './parts/icons/Burger';
import { NavProps } from './types';

const Navbar = ({ isFixed }: NavProps) => {
  return (
    <Nav isFixed={isFixed}>
      <Brand />
      <Burger />
    </Nav>
  );
};

export default Navbar;
