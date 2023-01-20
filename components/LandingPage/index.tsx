import React from 'react';
import Header from './Header';
import Title from './Title';
import ActionButtons from './ActionButtons';

const LandingPage = () => {
  return (
    <div className='flex flex-col items-center w-full'>
      <Header />
      <div className='w-full'>
        <Title />
        <ActionButtons />
      </div>
    </div>
  );
};

export default LandingPage;
