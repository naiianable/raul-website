import React from 'react';

const Specialties = () => {
  return (
    <>
      <div className='font-sans leading-5 pt-4'>
        <div className='tablet:text-[20px] laptop:text-[24px]'>Specialties</div>
        <div className='specialties-detail-div flex flex-row text-md mobile:justify-around mt-2'>
          <div className='flex border border-secondary-gray rounded-md bg-secondary-gray justify-center items-center w-min h-min px-4 py-1'>
            Depression
          </div>
          <div className='flex border border-secondary-gray rounded-md bg-secondary-gray justify-center items-center w-min h-min px-4 py-1'>
            Anxiety
          </div>
          <div className='flex border border-secondary-gray rounded-md bg-secondary-gray text-center justify-center items-center px-4 py-1'>
            Relationship Issues
          </div>
        </div>
      </div>
    </>
  );
};

export default Specialties;
