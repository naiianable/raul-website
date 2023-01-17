import React from 'react';
import Image from 'next/image';
import hamburger from '../../images/hamburger.svg';
import phoneIcon from '../../images/phone-icon.svg';

const LandingPage = () => {
  return (
    <>
      <div className='flex items-center justify-between h-14 bg-primary-blue'>
        <div className='pl-4'>
          <Image
            alt='Menu Hamburger'
            src={hamburger}
            className='h-max w-[40px]'
          ></Image>
        </div>
        <div className='pr-4'>
          <Image
            alt='Menu Hamburger'
            src={phoneIcon}
            className='h-max w-[40px]'
          ></Image>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
