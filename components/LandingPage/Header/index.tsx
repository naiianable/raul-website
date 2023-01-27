import HamburgerIcon from './HamburgerIcon';
import RsLogo from './RsLogo';
import PhoneIcon from './PhoneIcon';

const Header = () => {
  return (
    <div className='flex items-center justify-between h-14 w-full bg-primary-blue'>
      <RsLogo />
      <HamburgerIcon />
    </div>
  );
};

export default Header;
