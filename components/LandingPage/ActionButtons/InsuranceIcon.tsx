import Image from 'next/image';
import insuranceIcon from '../../../images/insurance-icon.svg';

const InsuranceIcon = () => {
  return (
    <div className='flex flex-col items-center w-[80px] leading-3'>
      <div>
        <Image alt='Camera Icon' src={insuranceIcon} />
      </div>
      <div className='mt-3'>
        Accepts
        <br />
        Insurance
      </div>
    </div>
  );
};

export default InsuranceIcon;
