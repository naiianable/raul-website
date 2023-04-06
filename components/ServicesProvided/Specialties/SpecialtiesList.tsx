import React from 'react';

const SpecialtiesList = () => {
  return (
    <div className='specialties-detail-div flex flex-row mobile:text-[16px] tablet: text-[16px] justify-evenly mt-2'>
      <div className='flex border border-secondary-gray rounded-md bg-secondary-gray justify-center items-center w-min h-min px-4 py-2'>
        Depression
      </div>
      <div className='flex border border-secondary-gray rounded-md bg-secondary-gray justify-center items-center w-min h-min px-4 py-2'>
        Anxiety
      </div>
      <div className='flex border border-secondary-gray rounded-md bg-secondary-gray text-center justify-center items-center px-4 py-2'>
        Relationship Issues
      </div>
    </div>
  );
};

export default SpecialtiesList;
