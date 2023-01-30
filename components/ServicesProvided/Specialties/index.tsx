import React from 'react';
import SpecialtiesList from './SpecialtiesList';

const Specialties = () => {
  return (
    <>
      <div className='font-sans text-[16px] tablet:text-[20px] laptop:text-[24px] leading-5 pt-4'>
        <div>Specialties</div>
        <SpecialtiesList />
      </div>
    </>
  );
};

export default Specialties;
