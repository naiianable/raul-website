import React from 'react';
import HamburgerIcon from './HamburgerIcon';
import PhoneIcon from './PhoneIcon';

const LandingPage = () => {
  return (
    <>
      <div className='flex items-center justify-between h-14 bg-primary-blue'>
        <HamburgerIcon />
        <PhoneIcon />
      </div>
    </>
  );
};

export default LandingPage;
