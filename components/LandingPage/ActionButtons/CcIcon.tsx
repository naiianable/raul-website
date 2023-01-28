import Image from 'next/image';
import ccIcon from '../../../images/cc-icon.svg';

const CcIcon = () => {
  return (
    <div className='flex flex-col items-center w-[80px] leading-3'>
      <div className='w-[41px] h-[40px]'>
        <Image alt='Credit Card Icon' src={ccIcon} />
      </div>
      <div className='mt-3'>
        Online
        <br />
        payments
        <br />
        accepted
      </div>
    </div>
  );
};

export default CcIcon;
