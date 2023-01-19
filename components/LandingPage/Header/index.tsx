import HamburgerIcon from './HamburgerIcon';
import PhoneIcon from './PhoneIcon';

const Header = () => {
  return (
    <div className='flex items-center justify-between h-14 w-full bg-primary-blue'>
      <HamburgerIcon />
      <PhoneIcon />
    </div>
  );
};

export default Header;
