import Image from 'next/image';
import mailIcon from '../../images/mail-icon.svg';

const EmailButton = () => {
  return (
    <>
      <div className='action-button flex flex-row border border-primary-blue border-solid rounded-md bg-primary-blue h-[50px] items-center justify-center mobile:w-1/2 tablet:mr-0 text-primary-white'>
        <div className=''>
          <Image alt='Mail Icon' src={mailIcon} className='pr-2' />
        </div>
        <div className='pl-2 text-[14px]'>EMAIL</div>
      </div>
    </>
  );
};

export default EmailButton;
