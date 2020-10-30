import React, { useState } from 'react';
import StyledBurger from './styles';
import NavLinks from '../../NavLinks';

const Burger = () => {
  const [openNav, setOpen] = useState<boolean>(false);

  return (
    <>
      <StyledBurger open={openNav} onClick={() => setOpen(!openNav)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <NavLinks open={openNav} />
    </>
  );
};
export default Burger;
