import Image from 'next/image';
import rsLogo from '../../../images/rs-logo.svg';

const RsLogo = () => {
  return (
    <div className='pl-4'>
      <Image alt='RS Logo' src={rsLogo} className='h-max w-[53px]' />
    </div>
  );
};

export default RsLogo;
