import React from 'react';
import SpecialtiesList from './SpecialtiesList';

const Specialties = () => {
  return (
    <>
      <div className='font-sans leading-5 pt-4'>
        <div className='tablet:text-[20px] laptop:text-[24px]'>Specialties</div>
        <SpecialtiesList />
      </div>
    </>
  );
};

export default Specialties;
