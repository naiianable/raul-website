import React from 'react';

const AcceptedPayment = () => {
  return (
    <div className='font-sans text-[16px] tablet:text-[20px] laptop:text-[24px] leading-5 leading-5 pt-4'>
      <div>Accepted Payment Plans</div>
      <div className='list-div list-disc text-[16px] tablet:text-[20px] laptop:text-[24px] leading-6 mobile:leading-5 mt-2'>
        <li>Cash</li>
        <li>Card</li>
        <li>Venmo</li>
      </div>
    </div>
  );
};

export default AcceptedPayment;
