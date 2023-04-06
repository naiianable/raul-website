import Image from 'next/image';
import phoneIcon from '../../images/phone-icon.svg';

const CallButton = () => {
  return (
    <div className='action-button flex flex-row border border-primary-blue border-solid rounded-md bg-primary-blue h-[50px] items-center justify-center w-full mobile:w-1/2 tablet:ml-0 text-primary-white'>
      <div>
        <Image alt='Phone Icon' src={phoneIcon} className='pr-2' />
      </div>
      <div className='pl-2 text-[14px]'>CALL</div>
    </div>
  );
};

export default CallButton;
