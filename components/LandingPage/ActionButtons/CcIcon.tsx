import Image from 'next/image';
import ccIcon from '../../../images/cc-icon.svg';

const CcIcon = () => {
  return (
    <div className='flex flex-col items-center w-[80px]'>
      <div>
        <Image alt='Credit Card Icon' src={ccIcon} />
      </div>
      <div>
        Online payments
        <br />
        accepted
      </div>
    </div>
  );
};

export default CcIcon;
