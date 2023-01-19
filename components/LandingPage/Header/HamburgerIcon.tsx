import Image from 'next/image';
import hamburger from '../../../images/hamburger-icon.svg';

const HamburgerIcon = () => {
  return (
    <div className='pl-4'>
      <Image
        alt='Menu Hamburger'
        src={hamburger}
        className='h-max w-[40px]'
      ></Image>
    </div>
  );
};

export default HamburgerIcon;
