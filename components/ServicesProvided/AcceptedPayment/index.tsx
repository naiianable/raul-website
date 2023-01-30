import React from 'react';

const AcceptedPayment = () => {
  return (
    <div className='font-sans leading-5 pt-4'>
      <div className='tablet:text-[20px] laptop:text-[24px]'>
        Accepted Payment Plans
      </div>
      <div className='list-div list-disc pl-2 text-md mt-2'>
        <li>Cash</li>
        <li>Card</li>
        <li>Venmo</li>
      </div>
    </div>
  );
};

export default AcceptedPayment;
