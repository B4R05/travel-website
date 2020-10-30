import React from 'react';
import { connect } from 'react-redux';
import Cart from '../icons/Cart';
import Oval from '../icons/Oval';
import { Ul, CartIcons } from './styles';
import { NavProps } from '../../types';
import { StoreTypes } from '../../../../reducers/types';

const EXPERIENCES = 'Experiences';
const COMPANY = 'Company';
const SUPPORT = 'Support';
const BOOKING = 'Booking';

const NavLinks = ({ open, hasBookings }: NavProps) => {
  return (
    <Ul open={open}>
      <li>{EXPERIENCES}</li>
      <li>{COMPANY}</li>
      <li>{SUPPORT}</li>
      <li>
        {/* Show 'Booking' on mobile widths*/}
        <span>{BOOKING}</span>
        <CartIcons>
          <Cart />
          {hasBookings ? <Oval /> : ''}
        </CartIcons>
      </li>
    </Ul>
  );
};

const mapStateToProps = (state: StoreTypes) => ({
  hasBookings: state.bookings.length
});

export default connect(mapStateToProps, null)(NavLinks);
