import Image from 'next/image';
import phoneIcon from '../../../images/phone-icon.svg';

const PhoneIcon = () => {
  return (
    <div className='pr-4'>
      <Image
        alt='Menu Hamburger'
        src={phoneIcon}
        className='h-max w-[30px]'
      ></Image>
    </div>
  );
};

export default PhoneIcon;
