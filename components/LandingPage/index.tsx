import React from 'react';
import Header from './Header';
import Title from './Title';
import CallEmail from './CallEmail';
import Footer from '../Footer';

const LandingPage = () => {
  return (
    <div className='flex flex-col items-center w-full'>
      <Header />
      <div className='w-full'>
        <Title />
        <CallEmail />
      </div>
    </div>
  );
};

export default LandingPage;
