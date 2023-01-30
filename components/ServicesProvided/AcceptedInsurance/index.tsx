import React from 'react';

const AcceptedInsurance = () => {
  return (
    <div className='font-sans leading-5 pt-4'>
      <div className='tablet:text-[20px] laptop:text-[24px]'>
        Accepted Insurance Plans
      </div>
      <div className='list-div list-disc pl-2 text-md mt-2'>
        <li>Hawaii Medical Assurance Association</li>
        <li>Hawaii Medical Services Association</li>
        <li>University Health Alliance</li>
        <li className='mt-3'>Out of Pocket Fee: $XXX</li>
      </div>
    </div>
  );
};

export default AcceptedInsurance;
