import Image from 'next/image';
import mailIcon from '../../../images/mail-icon.svg';
import phoneIcon from '../../../images/phone-icon.svg';

const ActionButton = () => {
  return (
    <div className='flex flex-row md:flex-col w-full my-4 font-sans'>
      <div className='flex flex-row border border-primary-blue border-solid rounded-md bg-primary-blue h-[50px] items-center justify-center w-1/2 ml-4 mr-2'>
        <div className=''>
          <Image alt='Mail Icon' src={mailIcon} className='pr-2' />
        </div>
        <div className='pl-2 text-[14px]'>EMAIL</div>
      </div>
      <div className='flex flex-row border border-primary-blue border-solid rounded-md bg-primary-blue h-[50px] items-center justify-center w-1/2 ml-2 mr-4'>
        <div className=''>
          <Image alt='Phone Icon' src={phoneIcon} className='pr-2' />
        </div>
        <div className='pl-2 text-[14px]'>CALL</div>
      </div>
    </div>
  );
};

export default ActionButton;
