import React from 'react';
import Header from './Header';
import Title from './Title';

const LandingPage = () => {
  return (
    <div className='flex flex-col items-center w-full'>
      <Header />
      <Title />
    </div>
  );
};

export default LandingPage;
